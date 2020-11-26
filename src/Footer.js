import React from 'react'
import FormularioContacto from './FormularioContacto'
import './Footer.css'
import telefone from './Assets/telefone.png'
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
                <FormularioContacto className='formulario' />
                <div className='contactos'>
                    <p className='consulta'>Caso pretenda agendar uma consulta pode fazê-lo através de mensagem. Os nossos serviços irão entrar em contacto consigo.</p>
                    <p className='consulta_telefone'>Pode também agendar a sua consulta por telefone ou email:</p>
                    <div className='contactoTelefone'> <img className='imagem_telefone' alt='Contacto Telefonico doenças anais' src={telefone} /><a className='numeroTelefone' href={this.state.contactos.telefoneContacto}>{this.state.contactos.telefoneContacto}</a></div>
                    <div className='contactoTelefone'>{this.state.contactos.emailContacto}</div>
                </div>
            </div>
        )

    }
}

export default Footer

