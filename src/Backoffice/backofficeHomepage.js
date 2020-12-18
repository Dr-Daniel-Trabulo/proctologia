import React from 'react'
import axios from 'axios'
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import TextEditor from './TextEditor'
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class backofficeHomepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            CV_text: {},
            editor_State_CV_text: EditorState.createEmpty(),
            CV_pic: '',
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios
            .get('/homepage')
            .then((res) => {
                const results = res.data[0]

                const contentBlock_CV_Text = htmlToDraft(results.CV_Text);

                const contentState_CV_Text = ContentState.createFromBlockArray(
                    contentBlock_CV_Text.contentBlocks,
                );

                const formatContent_CV_Text = EditorState.createWithContent(contentState_CV_Text);

                this.setState({
                    CV_text: results.CV_Text,
                    CV_pic: results.CV_Pic,
                    editor_State_CV_text: formatContent_CV_Text
                })
            })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    onEditorStateChange_CV_text = (editorState) => {
        this.setState({ editor_State_CV_text: editorState })
        const rawContentState = convertToRaw(
            this.state.editor_State_CV_text.getCurrentContent(),
        );
        const HtmlContent = draftToHtml(rawContentState);
        this.setState({ CV_Text: HtmlContent });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            editor_State_CV_text,
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...homepage } = this.state
        axios
            .put('/homepage/homepage/editHomepage', homepage)
            .then((res) => {
                this.setState({ emailTypeAlert: 'success', showEmailAlert: true })
                window.setTimeout(() => {
                    this.setState({ showEmailAlert: false })
                    window.location.reload()
                }, 5000);
            })
            .catch((err) => {
                this.setState({ emailTypeAlert: 'danger', showEmailAlert: true, messageIcon: faTimes })
                window.setTimeout(() => {
                    this.setState({ showEmailAlert: false })
                }, 5000);
            })
    }
    render() {
        return (
            <div className="ContatoInput">
                <h3 className='NoticiaInput-title'>Edição Homepage</h3>
                <Alert className="form-alert" show={this.state.showEmailAlert} variant={this.state.emailTypeAlert}>
                    <FontAwesomeIcon icon={this.state.messageIcon} className="message-icon" />
                    {this.state.emailTypeAlert === 'success' && 'Alteração efectuada com Sucesso'}
                    {this.state.emailTypeAlert === 'danger' && 'Erro! Alteração não efectuada.Tente de novo'}
                </Alert>
                <form className="NoticiaInput-section" onSubmit={event => this.handleSubmit(event)}>
                    <div className='input'>
                        <label className="input-section-label">Texto Apresentação</label>
                        <TextEditor
                            editorState={this.state.editor_State_CV_text}
                            onEditorStateChange={this.onEditorStateChange_CV_text}
                        />
                    </div>
                    <div className='input'>
                        <label className="input-section-label">Fotografia Apresentação</label>
                        <input type='text' name='CV_pic' value={this.state.CV_pic} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" type='submit'>GUARDAR</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default backofficeHomepage

