import React from 'react';
import './FormularioContacto.css'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyrightYear from 'react-copyright-year';


class FormularioContacto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            telefone: '',
            email: '',
            message: '',
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck
        }
    }

    updateField = (event) => {
        event.preventDefault()
        let { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let {
            showEmailAlert,
            emailTypeAlert,
            messageIcon,
            ...dataSend
        } = this.state
        axios({
            method: 'POST',
            url: '/email1',
            data: dataSend
        })
            .then((response) => {
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

    render() {
        return (
            <div className='Geral'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <span className='span-name'>
                        <input
                            onChange={event => this.updateField(event)}
                            className="input-nome"
                            type='text'
                            value={this.state.nome}
                            name='nome'
                            placeholder='Nome'
                            maxLength='90'
                            required
                        />
                    </span>
                    <div className='div_number-email'>
                        <div className='span-number'>
                            <input
                                onChange={event => this.updateField(event)}
                                className="input-number"
                                type='number'
                                value={this.state.telefone}
                                name='telefone'
                                placeholder='Telefone'
                                maxLength='15'
                                required
                            />
                        </div>
                        <div className='span-email'>
                            <input
                                onChange={event => this.updateField(event)}
                                className="input-email"
                                type='email'
                                value={this.state.email}
                                name='email'
                                placeholder='Email'
                                maxLength='30'
                                required
                            />
                        </div>
                    </div>
                    <span className='span-text'>
                        <textarea
                            onChange={event => this.updateField(event)}
                            className="input-text"
                            type='text'
                            value={this.state.message}
                            name='message'
                            placeholder='Deixe-nos aqui a sua mensagem. Seremos breves a responder'
                            minLength='5'
                            required
                        />
                    </span>
                    <ul className='linksButton'>
                        <li className='li_PoliticaDados'><a href='' target="_blank" download title='Politica Dados Pessoais Doenças rabo' rel="noopener noreferrer">Política Dados Pessoais</a></li>
                        <li className='li_Web_Developer'><a href='https://www.linkedin.com/in/antoniobranco1/' target="_blank" title='Software Developer António Branco'>Software Development by António Branco <CopyrightYear /> </a></li>
                        <li className='li-button'>
                            <button className='button' type='submit'>ENVIAR</button>
                        </li>
                    </ul>
                    <div className="alert-section">
                        <Alert className="form-alert" show={this.state.showEmailAlert} variant={this.state.emailTypeAlert}>
                            <FontAwesomeIcon icon={this.state.messageIcon} className="message-icon" />
                            {this.state.emailTypeAlert === 'success' && 'Mensagem enviada com Sucesso'}
                            {this.state.emailTypeAlert === 'danger' && 'Erro no envio da mensagem. Tente de novo'}
                        </Alert>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormularioContacto


