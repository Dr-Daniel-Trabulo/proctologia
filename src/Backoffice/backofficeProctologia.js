import React from 'react'
import axios from 'axios'
import PopUp from '../PopUp'
import './backoffice.css'
import TextEditor from './TextEditor'
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';


class backofficeProctologia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: {},
            editorState_texto: EditorState.createEmpty(),
            flash: '',
            messageStatus: ''
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

                this.setState({ texto: formatContent_texto })
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
            flash,
            messageStatus,
            editorState_texto,
            ...texto
        } = this.state
        axios
            .put('/proctologia/proctologia/editProctologia', texto)
            .then((res) => {
                console.log(texto)
                this.setState({ flash: 'Alterado com Sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um erro', messageStatus: 'Erro' })
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
                <PopUp
                    flashInput={this.state.flash}
                    typeMessage={this.state.messageStatus}
                />
            </div>
        )
    }
}

export default backofficeProctologia