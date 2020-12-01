import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './backoffice.css';


const ForgotPassword = () => {
    const { register, handleSubmit, errors } = useForm();

    const [ative, setActive] = useState('emailInput');
    const [userEmail, setUserEmail] = useState('');
    const [emailNotFound, setEmailNotFound] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);


    const submitEmail = (data) => {
        axios.put('/login/forgot-password', data)
            .then((response) => response.data)
            .then((result) => {
                if (result.affectedRows === 1) {
                    setActive('codeInput');
                    setUserEmail(data.email);
                }
            })
            .catch((error) => {
                if (error.response.data.message === 'user not found') {
                    setEmailNotFound(true);
                }
            });
    };

    const submitCode = (data) => {
        axios
            .post('/login/change-password', data)
            .then((response) => response.data)
            .then((data) => {
                if (data.message === 'password correct') {
                    setActive('newInput');
                }
            })
            .catch((error) => {
                if (error.response) {
                    setPasswordErr(true);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    };

    const submitNew = (data) => {
        const { password, confirmPassword } = data;
        if (password === confirmPassword) {
            axios.put('/login/update-password', data);
            setActive('success');
        } else {
            setPasswordsDontMatch(true);
        }
    };

    return (
        <div className="ForgotPassword">
            <div className="forgot-page">
                <div className="forgot-card">
                    {ative === 'emailInput' &&
                        <form className="forgot-form" onSubmit={handleSubmit(submitEmail)}>
                            <div className="forgot-title">1. Por favor, insira o seu email</div>
                            <input type="email" name="email" placeholder='Endereço de E-mail' required ref={register} />
                            {emailNotFound && <div className="forgot-invalid">* Email Inválido</div>}
                            <div className="forgot-button-section">
                                <button className="login-button" type="submit">Enviar</button>
                            </div>
                        </form>
                    }
                    {ative === 'codeInput' &&
                        <form className="forgot-form" onSubmit={handleSubmit(submitCode)}>
                            <div className="forgot-title">2. Por favor, insira o código recebido</div>
                            <input name="email" type='hidden' value={userEmail} contentEditable={false} ref={register} />
                            <input type="text" name="password" placeholder='Código de confirmação' autocomplete="off" required ref={register} />
                            {passwordErr && <div className="forgot-invalid">* Código Inválido</div>}
                            <div className="forgot-button-section">
                                <button className="login-button" type="submit">Enviar</button>
                            </div>
                        </form>
                    }
                    {ative === 'newInput' &&
                        <form className="forgot-form" onSubmit={handleSubmit(submitNew)}>
                            <div className="forgot-title">3. Por favor, insira a nova password</div>
                            <input name="email" type='hidden' value={userEmail} contentEditable={false} ref={register} />
                            <div className="forgot-subtitle">Password:</div>
                            <input name="password" type="password" ref={register({ required: true, minLength: { value: 6, message: "* Mínimo 8 caracteres" }, })} />
                            {errors.password && <div className="forgot-invalid">{errors.password.message}</div>}
                            <div className="forgot-subtitle">Confirmação Password:</div>
                            <input name="confirmPassword" type="password" ref={register} />
                            {passwordsDontMatch && <div className="forgot-invalid">* Passwords diferentes</div>}
                            <div className="forgot-button-section">
                                <button className="login-button" type="submit">Enviar</button>
                            </div>
                        </form>
                    }
                    {ative === 'success' &&
                        <div className="forgot-success">
                            <div className="forgot-title">Password alterada com sucesso.</div>
                            <div className="forgot-button-section">
                                <Link to="/login">
                                    <button className="login-button">Voltar ao Login</button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;