import React from 'react'
import FormularioContacto from './FormularioContacto'
import axios from 'axios'
import './Contactos.css'
import './FormularioContacto.css'
import telefone from './Assets/telefone_black.png'
import email from './Assets/email_black.png'


class Contactos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactos: {}
        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/contactos')
            .then((res) => {
                const results = res.data[0]
                this.setState({ contactos: results })
            })
    }

    render() {
        return (
            <div className='Contactos'>
                <div className='formasContacto'>
                    <div className='emailTelefone'>
                        <ul className='div-ul'>
                            <li className='li-contactos'><img className='imagem_email' alt='Email Telefonico doenças anais' src={email} /><a href={`mailto:${this.state.contactos.emailContacto}`}>{this.state.contactos.emailContacto}</a></li>
                            <li className='li-contactos'><img className='imagem_telefone' alt='Telefone doenças anais' src={telefone} /><a href={`tel:${this.state.contactos.telefoneContacto}`}>{this.state.contactos.telefoneContacto}</a></li>
                        </ul>
                    </div>
                    <div className='formulario' >
                        <p className='textoFormulario'>Solicite aqui o agendamento da sua consulta ou coloque-nos as suas questões.</p>
                        <div className='formularioComponente'>
                            <FormularioContacto />
                        </div>
                    </div>
                </div>
                <div className='googleMaps'>
                    <div className='morada'>
                        <p>{`O Dr Daniel Trabulo efectua consultas na clinica XPTO na ${this.state.contactos.moradaContacto}`}</p>
                    </div>
                    <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.115945832208!2d-9.1643332846601!3d38.738101479595464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331152bf9f73%3A0x8d29961e00e08322!2sAv.%20Columbano%20Bordalo%20Pinheiro%2061%2C%201070-060%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1604331817767!5m2!1spt-PT!2spt" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        )
    }
}

export default Contactos