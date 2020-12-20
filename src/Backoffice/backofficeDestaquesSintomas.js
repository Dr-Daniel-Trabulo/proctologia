import React from 'react';
import BackOfficeDestaquesSintomasForm from './backOfficeDestaquesSintomasForm'
import axios from 'axios';
import  Link  from "react-router-dom/Link";
// import  {Link}  from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './backoffice.css'

class backofficeDestaquesSintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            destaquesDisplay: [],
            publish: 1,
            id: '',
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
            pathNew: '',
            seccao: '',
            flash: '',
            messageStatus: '',
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck
        }
    }

    getData = () => {

        let path = this.props.match.path

        if (path.includes("/backoffice/sintomas")) {
            axios
                .get('/sintomas')
                .then((res) => {
                    const results = res.data
                    this.setState({ destaques: results })
                })
            this.setState({ pathnameSintomas: true, seccao: 'Sintoma' })
            path.includes('/new') ?
                this.setState({ pathNew: true }) : this.setState({ pathNew: false })

        } else {
            axios
                .get('/destaques')

                .then((res) => {
                    const results = res.data
                    this.setState({ destaques: results })

                })
            this.setState({ pathnameSintomas: false, seccao: 'Destaque' })
            path.includes('/new') ?
                this.setState({ pathNew: true }) : this.setState({ pathNew: false })

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
                    publish: destaque.publish,
                    destaquesDisplay: destaque,
                    id: destaque.ID,
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
            pathNew,
            seccao,
            flash,
            messageStatus,
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...destaquesDisplayPut
        } = this.state

        if (this.state.pathnameSintomas === false) {
            axios
                .put('/destaques/destaques/editDestaques', destaquesDisplayPut)
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
                        window.location.reload()
                    }, 5000);
                })
        } else {
            axios
                .put('/sintomas/sintomas/editSintomas', destaquesDisplayPut)
                .then((results) => {
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
                        window.location.reload()
                    }, 5000);
                })
        }
    }

    handleDelete = (event) => {
        event.preventDefault()
        let id = this.state.id

        this.state.pathnameSintomas === false ?
            axios
                .delete('/destaques/destaques/deleteDestaque', { data: { id } })
                .then((response) => {
                    this.setState({ emailTypeAlert: 'successDelete', showEmailAlert: true })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                        window.location.reload()
                    }, 5000);
                })
                .catch((err) => {
                    console.log('err')
                    this.setState({ emailTypeAlert: 'dangerDelete', showEmailAlert: true, messageIcon: faTimes })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                    }, 5000);
                })
            :
            axios
                .delete('/sintomas/sintomas/deleteSintoma', { data: { id } })
                .then((results) => {
                    this.setState({ emailTypeAlert: 'successDelete', showEmailAlert: true })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                        window.location.reload()
                    }, 5000);
                })
                .catch((err) => {
                    this.setState({ emailTypeAlert: 'dangerDelete', showEmailAlert: true, messageIcon: faTimes })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                    }, 5000);
                })
    }

    handleNewDestaque = (event) => {
        event.preventDefault()
        let {
            publish,
            destaques,
            id,
            editorState_texto,
            destaquesDisplay,
            pathnameSintomas,
            pathNew,
            seccao,
            flash,
            messageStatus,
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...destaquesDisplayPost
        } = this.state

        if (this.state.pathnameSintomas === false) {
            axios
                .post('/destaques/destaques/addDestaque', destaquesDisplayPost)
                .then((res) => {
                    this.setState({ emailTypeAlert: 'successPost', showEmailAlert: true })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                        window.location.href="/backoffice/destaques"
                    }, 5000);
                })
                .catch((err) => {
                    this.setState({ emailTypeAlert: 'dangerPost', showEmailAlert: true, messageIcon: faTimes })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                    }, 5000);
                })
        } else {
            axios
                .post('/sintomas/sintomas/addSintoma', destaquesDisplayPost)
                .then((res) => {
                    this.setState({ emailTypeAlert: 'successPost', showEmailAlert: true })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                        window.location.href="/backoffice/sintomas"
                    }, 5000);
                })
                .catch((err) => {
                    this.setState({ emailTypeAlert: 'dangerPost', showEmailAlert: true, messageIcon: faTimes })
                    window.setTimeout(() => {
                        this.setState({ showEmailAlert: false })
                    }, 5000);
                })
        }
    }

    handleChangeCheckBox = (event) => {
        event.preventDefault()
        this.state.publish === 0 ?
            this.setState({ publish: 1 }) : this.setState({ publish: 0 })
    }

    render() {
        return (
            <div className="ContatoInput">
                {
                    this.state.pathNew === false &&
                    <div>
                        <h3 className='NoticiaInput-title'>{`Edição da secção de ${this.state.seccao}s`}</h3>
                        <div className="input-top-dropdown">
                            <select className='input-section-label-top-dropdown' name='destaques' onChange={event => this.handleClick(event)}>
                                <option className='input-section-label' selected="selected">{`Seleccione ${this.state.seccao}`}</option>
                                {this.state.destaques.map((destaque) => {
                                    return (
                                        <option className='input-section-label' name={destaque.nome} value={destaque.nome} >{destaque.nome}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {this.state.pathnameSintomas === false ?
                            <Link Link to='/backoffice/destaques/new' onClick={() => {window.location.href="/backoffice/destaques/new"}}>
                                <div className="NoticiaInput-section-button">
                                    <button className="login-button" type='submit'>Novo Destaque</button>
                                </div>
                            </Link>
                            :
                            <Link Link to='/backoffice/sintomas/new' onClick={() => {window.location.href="/backoffice/sintomas/new"}}>
                                <div className="NoticiaInput-section-button">
                                    <button className="login-button" type='submit'>Novo Sintoma</button>
                                </div>
                            </Link>
                        }

                    </div>
                }
                <BackOfficeDestaquesSintomasForm
                    destaquesDisplay={this.state.destaquesDisplay}
                    publish={this.state.publish}
                    id={this.state.id}
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
                    pathNew={this.state.pathNew}
                    seccao={this.state.seccao}
                    flash={this.state.flash}
                    messageStatus={this.state.messageStatus}
                    showEmailAlert={this.state.showEmailAlert}
                    emailTypeAlert={this.state.emailTypeAlert}
                    messageIcon={this.state.messageIcon}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    handleNewDestaque={this.handleNewDestaque}
                    onEditorStateChange_texto={this.onEditorStateChange_texto}
                    handleChangeCheckBox={this.handleChangeCheckBox}
                />
            </div>
        )
    }
}

export default backofficeDestaquesSintomas

