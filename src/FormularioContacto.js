import React from 'react'

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

            <form onSubmit>
                <input
                    type='text'
                    value={this.state.nome}
                    name='nome'
                    onChange={event => this.updateField(event)}
                    placeholder='Nome'
                    maxLength='90'
                    required
                />
                <input
                    type='number'
                    value={this.state.telefone}
                    name='telefone'
                    onChange={event => this.updateField(event)}
                    placeholder='Telefone'
                    maxLength='15'
                    required
                />
                <input
                    type='email'
                    value={this.state.email}
                    name='email'
                    onChange={event => this.updateField(event)}
                    placeholder='Email'
                    maxLength='15'
                    required
                />
                <input
                    type='text'
                    value={this.state.message}
                    name='message'
                    onChange={event => this.updateField(event)}
                    placeholder='Deixe-nos aqui a sua mensagem. Seremos breves a responder'
                    minLength='5'
                    required
                />
                <button type='submit'>Enviar</button>
            </form>
        )
    }
}

export default FormularioContacto