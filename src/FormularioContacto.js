import React from 'react'
import './FormularioContacto.css'

class FormularioContacto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            telefone: ''
        }
    }

    updateField = (event) => {
        event.preventDefault()
        let { name, value } = event.target
        this.setState({ [name]: value })
    }


    render() {

        return (
            <div className='Geral'>
                <form className='form' onSubmit>
                    <span className='form1'>
                        <span className='span-name'>
                            <input
                                className="input-nome"
                                type='text'
                                value={this.state.nome}
                                name='nome'
                                onChange={event => this.updateField(event)}
                                placeholder='Nome'
                                maxLength='90'
                                required
                            />
                        </span>
                        <span className='span-number'>
                            <input
                                className="input-number"
                                type='number'
                                value={this.state.telefone}
                                name='telefone'
                                onChange={event => this.updateField(event)}
                                placeholder='Telefone'
                                maxLength='15'
                                required
                            />
                        </span>
                        <span className='span-email'>
                            <input
                                className="input-email"
                                type='email'
                                value={this.state.email}
                                name='email'
                                onChange={event => this.updateField(event)}
                                placeholder='Email'
                                maxLength='15'
                                required
                            />
                        </span>

                    </span>
                    <div className='div-text'>
                        <input
                            className="input-text"
                            type='text'
                            value={this.state.message}
                            name='message'
                            onChange={event => this.updateField(event)}
                            placeholder='Deixe-nos aqui a sua mensagem. Seremos breves a responder'
                            minLength='5'
                            required
                        />
                        <div className='div-button'>
                            <button className='button' type='submit'>Enviar</button>
                        </div>
                    </div>

                </form>


            </div>
        )
    }
}

export default FormularioContacto