import React from 'react'
import axios from 'axios'
import './backoffice.css'
import TextEditor from './TextEditor'
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class backofficeProctologia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: {},
            editorState_texto: EditorState.createEmpty(),
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/proctologia')
            .then((res) => {
                let results = res.data[0]

                const contentBlock_texto = htmlToDraft(results.texto);

                const contentState_texto = ContentState.createFromBlockArray(
                    contentBlock_texto.contentBlocks,
                );

                const formatContent_texto = EditorState.createWithContent(contentState_texto)

                this.setState({ editorState_texto: formatContent_texto })
            })
    }

    onEditorStateChange_texto = (editorState) => {
        this.setState({ editorState_texto: editorState })
        const rawContentState = convertToRaw(
            this.state.editorState_texto.getCurrentContent(),
        );
        const HtmlContent = draftToHtml(rawContentState);
        this.setState({ texto: HtmlContent });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let {
            editorState_texto,
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...texto
        } = this.state
        axios
            .put('/proctologia/proctologia/editProctologia', texto)
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
                <h3 className='NoticiaInput-title'>O que é a Proctologia?</h3>
                <form className="NoticiaInput-section" onSubmit={event => this.handleSubmit(event)}>
                    <div className='input'>
                        <label className="input-section-label">Texto</label>
                        <TextEditor
                            editorState={this.state.editorState_texto}
                            onEditorStateChange={this.onEditorStateChange_texto}
                        />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" type='submit'>GUARDAR</button>
                    </div>
                </form>
                <Alert className="form-alert" show={this.state.showEmailAlert} variant={this.state.emailTypeAlert}>
                    <FontAwesomeIcon icon={this.state.messageIcon} className="message-icon" />
                    {this.state.emailTypeAlert === 'success' && 'Alterado com Sucesso'}
                    {this.state.emailTypeAlert === 'danger' && 'Erro ao alterar. Tente de novo'}
                </Alert>
            </div>
        )
    }
}

export default backofficeProctologia