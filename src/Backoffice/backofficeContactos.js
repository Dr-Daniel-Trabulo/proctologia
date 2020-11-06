import React from 'react'
import axios from 'axios'

class backOfficeContactos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailContacto: '',
            telefoneContacto: '',
            moradaContacto: '',
            flash: ''
        }
    }

    componentDidMount = () => {
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
        //const { emailContacto, telefoneContacto, moradaContacto } = this.state
        const { flash, ...contactos } = this.state
        console.log(contactos)

        axios
            .post('/contactos/editContactos', contactos)
            .then((res) => {
                this.setState({ flash: 'Alterado com sucesso' })
            })
    }



    render() {

        return (
            <div>
                <div>Edição Contactos</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>Email Contacto</div>
                        <input type='text' name='emailContacto' value={this.state.emailContacto} onChange={(event) => this.handleChange(event)}>
                        </input>
                    </div>
                    <div>
                        <div>Telefone Contacto</div>
                        <input type='text' name='telefoneContacto' value={this.state.telefoneContacto} onChange={(event) => this.handleChange(event)}>
                        </input>
                    </div>
                    <div>
                        <div>Morada Contacto</div>
                        <input type='text' name='moradaContacto' value={this.state.moradaContacto} onChange={(event) => this.handleChange(event)}>
                        </input>
                    </div>
                    <button type='submit'>
                        GUARDAR
                    </button>
                </form>
            </div>

        )
    }
}

export default backOfficeContactos