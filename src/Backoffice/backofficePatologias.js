import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import BackofficePatologiasForm from './backofficePatologiasForm'

class backofficePatologias extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patologias: [],
            patologiaDisplay: '',
            publish: '',
            nomePatologia: '',
            tratamentosPatologia: '',
            examesPatologia: '',
            sintomasPatologia: '',
            linkPatologia: '',
            idPatologia: '',
            editorState_examesPatologia: EditorState.createEmpty(),
            editorState_sintomasPatologia: EditorState.createEmpty(),
            editorState_tratamentosPatologia: EditorState.createEmpty(),
            pathNew: '',
            flash: '',
            messageStatus: ''
        }
    }

    getData = () => {
        axios
            .get('/patologias')
            .then((res) => {
                const results = res.data
                this.setState({ patologias: results })
                results.publish === 0 ?
                    this.setState({ publish: 0 }) : this.setState({ publish: 1 })
            })



        let path = this.props.history.location.pathname
        path.includes('/new') ?
            this.setState({ pathNew: true }) : this.setState({ pathNew: false })

    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.patologias.map((patologia) => {
            if (patologia.nomePatologia === event.target.value) {

                const contentBlock_examesPatologia = htmlToDraft(patologia.examesPatologia);
                const contentBlock_sintomasPatologia = htmlToDraft(patologia.sintomasPatologia);
                const contentBlock_tratamentosPatologia = htmlToDraft(patologia.tratamentosPatologia);


                const contentState_examesPatologia = ContentState.createFromBlockArray(
                    contentBlock_examesPatologia.contentBlocks,
                );
                const contentState_sintomasPatologia = ContentState.createFromBlockArray(
                    contentBlock_sintomasPatologia.contentBlocks,
                );
                const contentState_tratamentosPatologia = ContentState.createFromBlockArray(
                    contentBlock_tratamentosPatologia.contentBlocks,
                );

                const formatContent_examesPatologia = EditorState.createWithContent(contentState_examesPatologia)
                const formatContent_sintomasPatologia = EditorState.createWithContent(contentState_sintomasPatologia)
                const formatContent_tratamentosPatologia = EditorState.createWithContent(contentState_tratamentosPatologia)

                this.setState({
                    patologiaDisplay: patologia,
                    nomePatologia: patologia.nomePatologia,
                    tratamentosPatologia: patologia.tratamentosPatologia,
                    examesPatologia: patologia.examesPatologia,
                    sintomasPatologia: patologia.sintomasPatologia,
                    linkPatologia: patologia.linkPatologia,
                    idPatologia: patologia.idPatologia,
                    editorState_examesPatologia: formatContent_examesPatologia,
                    editorState_sintomasPatologia: formatContent_sintomasPatologia,
                    editorState_tratamentosPatologia: formatContent_tratamentosPatologia
                })
            }
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        let value = event.target.value
        let name = event.target.name
        this.setState({ [name]: value })
    }

    onEditorStateChange_examesPatologia = (editorState) => {
        this.setState({ editorState_examesPatologia: editorState })
        const rawContentState = convertToRaw(
            this.state.editorState_examesPatologia.getCurrentContent(),
        );
        const HtmlContent = draftToHtml(rawContentState);
        this.setState({ examesPatologia: HtmlContent });
    }

    onEditorStateChange_sintomasPatologia = (editorState) => {
        this.setState({ editorState_sintomasPatologia: editorState })
        const rawContentState = convertToRaw(
            this.state.editorState_sintomasPatologia.getCurrentContent(),
        );
        const HtmlContent = draftToHtml(rawContentState);
        this.setState({ sintomasPatologia: HtmlContent });
    }

    onEditorStateChange_tratamentosPatologia = (editorState) => {
        this.setState({ editorState_tratamentosPatologia: editorState })
        const rawContentState = convertToRaw(
            this.state.editorState_tratamentosPatologia.getCurrentContent(),
        );
        const HtmlContent = draftToHtml(rawContentState);
        this.setState({ tratamentosPatologia: HtmlContent });
    }


    handleSubmit = (event) => {
        event.preventDefault()

        let {
            patologias,
            patologiaDisplay,
            flash,
            editorState_examesPatologia,
            editorState_sintomasPatologia,
            editorState_tratamentosPatologia,
            messageStatus,
            pathNew,
            ...patologiasPut
        } = this.state

        axios
            .put('/patologias/patologias/editPatologias', patologiasPut)
            .then((res) => {
                console.log(patologiasPut)
                this.setState({ flash: 'Alterado com Sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                console.log(patologiasPut)
                this.setState({ flash: 'Ocorreu um erro', messageStatus: 'Erro' })
            })
        this.props.history.push({ pathname: '/backoffice/patologias' })

    }

    handleDelete = () => {
        let idPatologia = this.state.idPatologia

        axios
            .delete('/patologias/patologias/deletePatologia', { data: { idPatologia } })
            .then((res) => {
                this.setState({ flash: 'Apagado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((res) => {
                this.setState({ flash: 'Ocorreu um erro', messageStatus: 'Erro' })
            })
        window.location.reload()
        this.getData()
    }

    HandleNewSintoma = () => {
        let {
            patologias,
            patologiaDisplay,
            editorState_examesPatologia,
            editorState_sintomasPatologia,
            editorState_tratamentosPatologia,
            flash,
            messageStatus,
            pathNew,
            ...patologiasPut
        } = this.state

        axios
            .post('/patologias/patologias/addPatologia', patologiasPut)
            .then((res) => {
                this.setState({ flash: 'Sintoma adicionado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Erro ao Adicionar sintoma', messageStatus: 'Erro' })
            })
        this.props.history.push({ pathname: '/backoffice/patologias' })
    }

    handleChangeCheckBox = (event) => {
        event.preventDefault()
        this.state.publish === 0 ?
            this.setState({ publish: 1 }) : this.setState({ publish: 0 })
    }

    render() {
        return (
            <div className="ContatoInput">
                {this.state.pathNew === false &&
                    <div>
                        <h3 className='NoticiaInput-title'>Edição Patologia</h3>
                        <div className="input-top-dropdown">
                            <select className='input-section-label-top-dropdown' name='patologias' onChange={(event => this.handleClick(event))}>
                                <option className='input-section-label' selected="selected">Seleccione uma patologia</option>
                                {this.state.patologias.map((patologia) => {
                                    return (
                                        <option className='input-section-label' name={patologia.nomePatologia} value={patologia.nomePatologia}>{patologia.nomePatologia}</option>
                                    )
                                })}
                            </select>
                            <Link to='/backoffice/patologias/new'>
                                <div className="NoticiaInput-section-button">
                                    <button className="login-button">Nova Patologia</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
                <div>
                    <BackofficePatologiasForm
                        patologiaDisplay={this.state.patologiaDisplay}
                        publish={this.state.publish}
                        pathNew={this.state.pathNew}
                        nomePatologia={this.state.nomePatologia}
                        sintomasPatologia={this.state.sintomasPatologia}
                        examesPatologia={this.state.examesPatologia}
                        tratamentosPatologia={this.state.tratamentosPatologia}
                        editorState_examesPatologia={this.state.editorState_examesPatologia}
                        editorState_sintomasPatologia={this.state.editorState_sintomasPatologia}
                        editorState_tratamentosPatologia={this.state.editorState_tratamentosPatologia}
                        linkPatologia={this.state.linkPatologia}
                        idPatologia={this.state.idPatologia}
                        flash={this.state.flash}
                        messageStatus={this.state.messageStatus}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleDelete={this.handleDelete}
                        HandleNewSintoma={this.HandleNewSintoma}
                        onEditorStateChange_examesPatologia={this.onEditorStateChange_examesPatologia}
                        onEditorStateChange_sintomasPatologia={this.onEditorStateChange_sintomasPatologia}
                        onEditorStateChange_tratamentosPatologia={this.onEditorStateChange_tratamentosPatologia}
                        handleChangeCheckBox={this.handleChangeCheckBox}
                    />
                </div>
            </div>
        )
    }
}


export default backofficePatologias

