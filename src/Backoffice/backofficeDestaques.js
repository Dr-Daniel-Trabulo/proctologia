import React from 'react';
import BackOfficeDestaquesForms from './backOfficeDestaquesForms'
import BackOfficeDestaquesNew from './BackofficeDestaquesNew'
import axios from 'axios';
import { Link } from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp'



class backofficeDestaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            destaquesDisplay: [],
            ID: '',
            texto: {},
            editorState_texto: EditorState.createEmpty(),
            nome: '',
            foto_alt1: '',
            foto_alt2: '',
            foto_alt3: '',
            foto_alt4: '',
            fotoLink1: '',
            fotoLink2: '',
            fotoLink3: '',
            fotoLink4: '',
            pathnameSintomas: '',
            flash: '',
            messageStatus: ''
        }
    }

    getData = () => {

        let path = this.props.match.path

        if (path === "/backoffice/sintomas") {
            axios
                .get('/sintomas')
                .then((res) => {
                    const results = res.data
                    this.setState({ destaques: results })
                })
            this.setState({ pathnameSintomas: true })
        } else {
            axios
                .get('/destaques')

                .then((res) => {
                    const results = res.data
                    this.setState({ destaques: results })
                    console.log(this.props.match.pathname)
                })
            this.setState({ pathnameSintomas: false })

        }

    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.destaques.map((destaque) => {
            if (destaque.nome === event.target.value) {
                const contentBlockPT = htmlToDraft(destaque.texto);

                const contentStatePT = ContentState.createFromBlockArray(
                    contentBlockPT.contentBlocks,
                );

                const formatContentPT = EditorState.createWithContent(contentStatePT);

                this.setState({
                    destaquesDisplay: destaque,
                    ID: destaque.ID,
                    texto: destaque.texto,
                    nome: destaque.nome,
                    foto_alt1: destaque.foto_alt1,
                    foto_alt2: destaque.foto_alt2,
                    foto_alt3: destaque.foto_alt3,
                    foto_alt4: destaque.foto_alt4,
                    fotoLink1: destaque.fotoLink1,
                    fotoLink2: destaque.fotoLink2,
                    fotoLink3: destaque.fotoLink3,
                    fotoLink4: destaque.fotoLink4,
                    editorState_texto: formatContentPT
                })
            }
        })
    }


    handleChange = (event) => {
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
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
            destaques,
            editorState_texto,
            destaquesDisplay,
            pathnameSintomas,
            flash,
            messageStatus,
            ...destaquesDisplayPut
        } = this.state

        this.state.pathnameSintomas === false ?
            axios
                .put('/destaques/destaques/editDestaques', destaquesDisplayPut)
                .then((res) => {
                    this.setState({ flash: 'Alterado com sucesso', messageStatus: 'Sucesso' })
                })
                .catch((err) => {
                    this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
                })
            :
            axios
                .put('//sintomas/sintomas/editSintomas', destaquesDisplayPut)
                .then((res) => {
                    this.setState({ flash: 'Alterado com sucesso', messageStatus: 'Sucesso' })
                })
                .catch((err) => {
                    this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
                })
    }

    handleDelete = () => {
        let ID = this.state.ID

        this.state.pathnameSintomas === false ?
            axios
                .delete('/destaques/destaques/deleteDestaque', { data: { ID } })
                .then((res) => {
                    this.setState({ flash: 'Eliminado com sucesso', messageStatus: 'Sucesso' })
                    console.log(ID)
                }) :
            axios
                .delete('/sintomas/sintomas/deleteSintoma', { data: { ID } })
                .then((res) => {
                    this.setState({ flash: 'Eliminado com sucesso', messageStatus: 'Sucesso' })
                    console.log(ID)
                })
        window.location.reload()
        this.getData()
    }

    handleNewDestaque = () => {
        let {
            destaques,
            ID,
            editorState_texto,
            destaquesDisplay,
            pathnameSintomas,
            flash,
            messageStatus,
            ...destaquesDisplayPost
        } = this.state

        this.state.pathnameSintomas === false ?
            axios
                .post('/destaques/destaques/addDestaque', destaquesDisplayPost)
                .then((res) => {
                    this.setState({ flash: 'Adicionado com sucesso', messageStatus: 'Sucesso' })
                })
                .catch((err) => {
                    this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
                })
            :
            axios
                .post('//sintomas/sintomas/addSintoma', destaquesDisplayPost)
                .then((res) => {
                    this.setState({ flash: 'Adicionado com sucesso', messageStatus: 'Sucesso' })
                })
                .catch((err) => {
                    this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
                })
        this.props.history.push({ pathname: '/backoffice/destaques' })
    }

    render() {

        let path = this.props.history.location.pathname

        return (
            <div>
                {
                    !path.includes('new') ?

                        <div>
                            <h3>Edição da secção de Destaques</h3>
                            <select name='destaques' onChange={event => this.handleClick(event)}>
                                <option selected="selected">Seleccione uma opção</option>
                                {this.state.destaques.map((destaque) => {
                                    return (
                                        <option name={destaque.nome} value={destaque.nome} >{destaque.nome}</option>
                                    )
                                })}
                            </select>
                            {this.props.match.pathname !== '/backoffice/sintomas' ?
                                <Link Link to='/backoffice/destaques/new' > <button type='submit'>Novo Destaque</button></Link>
                                :
                                <Link Link to='/backoffice/sintomas/new' > <button type='submit'>Novo Destaque</button></Link>

                            }

                            {
                                this.state.destaquesDisplay.length !== 0 &&

                                <BackOfficeDestaquesForms
                                    destaquesDisplay={this.state.destaquesDisplay}
                                    ID={this.state.ID}
                                    texto={this.state.texto}
                                    editorState_texto={this.state.editorState_texto}
                                    nome={this.state.nome}
                                    foto_alt1={this.state.foto_alt1}
                                    foto_alt2={this.state.foto_alt2}
                                    foto_alt3={this.state.foto_alt3}
                                    foto_alt4={this.state.foto_alt4}
                                    fotoLink1={this.state.fotoLink1}
                                    fotoLink2={this.state.fotoLink2}
                                    fotoLink3={this.state.fotoLink3}
                                    fotoLink4={this.state.fotoLink4}
                                    editorState_texto={this.state.editorState_texto}
                                    pathnameSintomas={this.state.pathnameSintomas}
                                    flash={this.state.flash}
                                    messageStatus={this.state.messageStatus}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    handleDelete={this.handleDelete}
                                    onEditorStateChange_texto={this.onEditorStateChange_texto}
                                />
                            }
                        </div>
                        :
                        <div>
                            <BackOfficeDestaquesNew
                                destaquesDisplay={this.state.destaquesDisplay}
                                ID={this.state.ID}
                                texto={this.state.texto}
                                editorState_texto={this.state.editorState_texto}
                                nome={this.state.nome}
                                foto_alt1={this.state.foto_alt1}
                                foto_alt2={this.state.foto_alt2}
                                foto_alt3={this.state.foto_alt3}
                                foto_alt4={this.state.foto_alt4}
                                fotoLink1={this.state.fotoLink1}
                                fotoLink2={this.state.fotoLink2}
                                fotoLink3={this.state.fotoLink3}
                                fotoLink4={this.state.fotoLink4}
                                editorState_texto={this.state.editorState_texto}
                                pathnameSintomas={this.state.pathnameSintomas}
                                flash={this.state.flash}
                                messageStatus={this.state.messageStatus}
                                handleChange={this.handleChange}
                                handleNewDestaque={this.handleNewDestaque}
                                onEditorStateChange_texto={this.onEditorStateChange_texto}
                            />
                        </div>
                }
            </div>
        )
    }
}

export default backofficeDestaques

