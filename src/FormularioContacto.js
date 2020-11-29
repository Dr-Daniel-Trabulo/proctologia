import React from 'react';
import './FormularioContacto.css'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const FormularioContacto = () => {
//     const { register, handleSubmit, errors } = useForm();

//     const [showEmailAlert, setShowEmailAlert] = useState(false);
//     const [emailTypeAlert, setEmailTypeAlert] = useState('success');
//     const [messageIcon, setMessageIcon] = useState(faCheck);

//     const onSubmit = (data) => {
//         axios.post('/email', data)
//             .then((response) => {
//                 if (response.data.code !== 200) {
//                     setEmailTypeAlert('danger');
//                     setMessageIcon(faTimes);
//                 }
//                 setShowEmailAlert(true);
//                 window.setTimeout(() => setShowEmailAlert(false), 4000);
//             });
//     };


//     return (
//         <div className='Geral'>
//             <form className='form' onSubmit={handleSubmit(onSubmit)}>
//                 <span className='span-name'>
//                     <input
//                         className="input-nome"
//                         type='text'
//                         name='nome'
//                         placeholder='Nome'
//                         ref={register({ required: 'Campo Obrigatório', maxLength: 90 })}
//                     />
//                     {errors.nome && <div className="form-error">{errors.nome.message}</div>}
//                 </span>
//                 <div className='div_number-email'>
//                     <div className='span-number'>
//                         <input
//                             className="input-number"
//                             type='text'
//                             name='telefone'
//                             placeholder='Telefone'
//                             ref={register({ required: 'Campo Obrigatório', maxLength: 15 })}
//                         />
//                         {errors.telefone && <div className="form-error">{errors.telefone.message}</div>}
//                     </div>
//                     <div className='span-email'>
//                         <input
//                             className="input-email"
//                             type='email'
//                             name='email'
//                             placeholder='Email'
//                             maxLength='30'
//                             ref={register({
//                                 required: 'Campo Obrigatório',
//                                 minLeght: 2,
//                                 pattern: {
//                                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                                     message: 'Formato inválido',
//                                 },
//                             })}

//                         />
//                         {errors.email && <div className="form-error">{errors.email.message}</div>}

//                     </div>
//                 </div>
//                 <span className='span-text'>
//                     <input
//                         className="input-text"
//                         type='textarea'
//                         name='message'
//                         placeholder='Deixe-nos aqui a sua mensagem. Seremos breves a responder'
//                         ref={register({ required: 'Campo Obrigatório', minLeght: 5 })}
//                     />
//                     {errors.message && <div className="message-error">{errors.message.message}</div>}

//                 </span>
//                 <div className='div-button'>
//                     <button className='button' type='submit'>Enviar</button>
//                 </div>
//                 <div>
//                     <Alert className="form-alert" show={showEmailAlert} variant={emailTypeAlert}>
//                         <FontAwesomeIcon icon={messageIcon} className="message-icon" />
//                         {emailTypeAlert === 'success' ? 'Sucesso' : 'Erro'}
//                     </Alert>
//                 </div>
//             </form>
//         </div>


//     )

// }


class FormularioContacto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEmailAlert: false,
            emailTypeAlert: '',
            messageIcon: faCheck,
            nome: '',
            telefone: '',
            email: '',
            message: ''
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
            url: '/email',
            data: dataSend
        })
            .then((response) => {
                if (response.data.code !== 200) {
                    this.setState({ emailTypeAlert: 'danger', messageIcon: faTimes })
                } else {
                    this.setState({ showEmailAlert: true })
                    window.setTimeout(() => this.setState({ showEmailAlert: false }), 4000);
                }
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
                        <input
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
                    <div className='div-button'>
                        <button className='button' type='submit'>ENVIAR</button>
                    </div>
                    <div>
                        <Alert className="form-alert" show={this.state.showEmailAlert} variant={this.state.emailTypeAlert}>
                            <FontAwesomeIcon icon={this.state.messageIcon} className="message-icon" />
                            {this.state.emailTypeAlert === 'success' ? 'Sucesso' : 'Erro'}
                        </Alert>

                    </div>
                </form>
            </div>
        )
    }
}

export default FormularioContacto


