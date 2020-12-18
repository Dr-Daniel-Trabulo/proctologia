import React from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class backOfficeContactos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailContacto: '',
            telefoneContacto: '',
            moradaContacto: '',
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/contactos')
            .then((res) => {
                const response = res.data[0]
                this.setState({ emailContacto: response.emailContacto })
                this.setState({ telefoneContacto: response.telefoneContacto })
                this.setState({ moradaContacto: response.moradaContacto })
            })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...contactos } = this.state
        axios
            .put('/contactos/contactos/editContactos', contactos)
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
                <h3 className='NoticiaInput-title'>Edição Contactos</h3>
                <Alert className="form-alert" show={this.state.showEmailAlert} variant={this.state.emailTypeAlert}>
                    <FontAwesomeIcon icon={this.state.messageIcon} className="message-icon" />
                    {this.state.emailTypeAlert === 'success' && 'Alteração efectuada com Sucesso'}
                    {this.state.emailTypeAlert === 'danger' && 'Erro! Alteração não efectuada.Tente de novo'}
                </Alert>
                <form className="NoticiaInput-section" onSubmit={event => this.handleSubmit(event)}>
                    <div className='input'>
                        <label className="input-section-label">Email Contacto</label>
                        <input type='text' name='emailContacto' value={this.state.emailContacto} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className='input'>
                        <label className="input-section-label">Telefone Contacto</label>
                        <input type='text' name='telefoneContacto' value={this.state.telefoneContacto} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className='input'>
                        <label className="input-section-label">Morada Contacto</label>
                        <input type='text' name='moradaContacto' value={this.state.moradaContacto} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" type='submit'>
                            GUARDAR
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default backOfficeContactos