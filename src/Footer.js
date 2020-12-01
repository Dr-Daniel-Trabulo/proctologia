import React from 'react'
import FormularioContacto from './FormularioContacto'
import './Footer.css'
import telefone from './Assets/telefone.png'
import email from './Assets/email.png'
import axios from 'axios'


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contactos: '' }
    }

    getData = () => {
        axios
            .get('/contactos')
            .then((res) => {
                let results = res.data[0]
                this.setState({
                    contactos: results
                })
                console.log(results)
            })
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()
    }


    render() {
        return (
            <div className='footer'>
                <div className='formulario' >
                    <FormularioContacto />
                </div>
                <div className='contactos'>
                    <div className='mensagemAgendamento'>
                        <p>Pode solicitar o agendamento de consulta através do formulário</p>
                        <p>ou contactar-nos diretamente por telefone ou email:</p>
                    </div>
                    <ul className='telefoneEmail'>
                        <li className='contactoTelefone'><img className='imagem_telefone' alt='Contacto Telefonico doenças anais' src={telefone} /><a className='numeroTelefone' href={this.state.contactos.telefoneContacto}>{this.state.contactos.telefoneContacto}</a></li>
                        <li className='contactoTelefone'><img className='imagem_email' alt='Contacto Email doenças do anús' src={email} /><a className='numeroTelefone' href={`mailto:${this.state.contactos.emailContacto}`}>{this.state.contactos.emailContacto}</a></li>
                    </ul>
                </div>
            </div>
        )

    }
}

export default Footer

