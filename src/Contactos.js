import React from 'react'
import FormularioContacto from './FormularioContacto'

class Contactos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactos: {}
        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        let contactos = {
            telefoneContacto: +351000000000,
            emailContacto: 'xpto@xpto.pt',
            moradaContacto: 'Avenida Columbano Bordalo Pinheiro ...'
        }

        this.setState({ contactos })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.state.contactos.emailContacto}</li>
                    <li><a href={`tel:${this.state.contactos.telefoneContacto}`}>{this.state.contactos.telefoneContacto}</a></li>
                    <li>{this.state.contactos.moradaContacto}</li>
                </ul>
                <FormularioContacto />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.115945832208!2d-9.1643332846601!3d38.738101479595464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331152bf9f73%3A0x8d29961e00e08322!2sAv.%20Columbano%20Bordalo%20Pinheiro%2061%2C%201070-060%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1604331817767!5m2!1spt-PT!2spt" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>

            </div>

        )
    }
}

export default Contactos