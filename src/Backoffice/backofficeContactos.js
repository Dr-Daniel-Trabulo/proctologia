import React from 'react'
import axios from 'axios'
import PopUp from '../PopUp'

class backOfficeContactos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailContacto: '',
            telefoneContacto: '',
            moradaContacto: '',
            flash: '',
            messageStatus: ''
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

    handleSubmit = () => {
        const { flash, messageStatus, ...contactos } = this.state
        axios
            .put('/contactos/contactos/editContactos', contactos)
            .then((res) => {
                this.setState({ flash: 'Alterado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um errp', messageStatus: 'Erro' })
            })
    }

    render() {

        return (
            <div className="ContatoInput">
                <h3 className='NoticiaInput-title'>Edição Contactos</h3>
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
                <PopUp
                    flashInput={this.state.flash}
                    typeMessage={this.state.messageStatus}
                />
            </div>
        )
    }
}

export default backOfficeContactos