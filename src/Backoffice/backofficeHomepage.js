import React from 'react'
import axios from 'axios'
import PopUp from '../PopUp'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import TextEditor from './TextEditor'


class backofficeHomepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            CV_text: {},
            editor_State_CV_text: EditorState.createEmpty(),
            CV_pic: '',
            flash: '',
            messageStatus: ''
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
        const { editor_State_CV_text, flash, messageStatus, ...homepage } = this.state
        axios
            .put('/homepage/homepage/editHomepage', homepage)
            .then((res) => {
                this.setState({ flash: 'Alterado com Sucesso', messageStatus: 'Sucesso' })
            })
    }

    render() {
        return (
            <div className="ContatoInput">
                <h3 className='NoticiaInput-title'>Edição Homepage</h3>
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
                <PopUp
                    flashInput={this.state.flash}
                    typeMessage={this.state.messageStatus}
                />
            </div>
        )
    }
}

export default backofficeHomepage

