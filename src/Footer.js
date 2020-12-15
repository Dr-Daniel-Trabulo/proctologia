import React from 'react'
import FormularioContacto from './FormularioContacto'
import './Footer.css'
import telefone from './Assets/telefone.png'
import email from './Assets/email.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withWindowSizeListener } from 'react-window-size-listener';
import CopyrightYear from 'react-copyright-year';



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
            <div>
                {
                    this.props.windowSize.windowWidth > 1000 ?
                        <div className='footer' >
                            <div className='contactos'>
                                <div className='mensagemAgendamento'>
                                    <div>
                                        <p>Pode solicitar o agendamento de consulta através do formulário</p>
                                        <p>ou contactar-nos diretamente por telefone ou email:</p>
                                    </div>
                                </div>
                                <ul className='telefoneEmail'>
                                    <li className='contactoTelefone'>
                                        <img className='imagem_telefone' alt='Contacto Telefonico doenças anais' src={telefone} />
                                        <a className='numeroTelefone' href={this.state.contactos.telefoneContacto}>
                                            {this.state.contactos.telefoneContacto}
                                        </a>
                                    </li>
                                    <li className='contactoTelefone'>
                                        <img className='imagem_email' alt='Contacto Email doenças do anús' src={email} />
                                        <a className='numeroTelefone' href={`mailto:${this.state.contactos.emailContacto}`}>
                                            {this.state.contactos.emailContacto}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='formularioFooter' >
                                <div className='formularioContacto'><FormularioContacto /></div>
                            </div>
                        </div >
                        :
                        <div className='footer' >
                            <div className='contactosMensagem'>
                                <div className='contactos'>
                                    <ul className='telefoneEmail'>
                                        <li className='contactoTelefone'>
                                            <a className='numeroTelefone' href={`tel:${this.state.contactos.telefoneContacto}`}>
                                                <img className='imagem_telefone' alt='Contacto Telefonico doenças anais' src={telefone} />
                                            </a>
                                        </li>
                                        <li className='contactoTelefone'>
                                            <a className='numeroTelefone' href={`mailto:${this.state.contactos.emailContacto}`}>
                                                <img className='imagem_email' alt='Contacto Email doenças do anús' src={email} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                    <Link className='linkMensagem' to='./contactos_dr_daniel_trabulo'><button className='button'>Agende a sua consulta ou deixe-nos uma mensagem</button></Link>
                            </div>
                            <span className='linksButton'>
                                <a className='li_PoliticaDados' href='' target="_blank" download title='Politica Dados Pessoais Doenças rabo' rel="noopener noreferrer">Política Dados Pessoais</a>
                                <a className='li_Web_Developer' href='https://www.linkedin.com/in/antoniobranco1/' target="_blank" title='Software Developer António Branco'>Software Development by António Branco <CopyrightYear/> </a>
                            </span>
                        </div >

                }
            </div>


        )
    }
}

export default withWindowSizeListener(Footer)

