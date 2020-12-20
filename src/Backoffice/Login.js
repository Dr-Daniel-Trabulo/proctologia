import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import './backoffice.css';
import './login.css'
import passwordIcon from '../Assets/password.png';
import userIcon from '../Assets/user.png';
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserContext } from '../context/UserContext';
import Cookies from 'js-cookie';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { setAuth } = useContext(UserContext);
    const { setUser } = useContext(UserContext);

    const [showEmailAlert, setShowEmailAlert] = useState('');
    const [emailTypeAlert, setEmailTypeAlert] = useState('');
    const [messageIcon, setMessageIcon] = useState('');

    const onSubmit = (data) => {
        axios.post('/login/signin', data)
            .then((res) => {
                console.log('qualquer coisa2')
                Cookies.set("token", res.data.token)
                setUser({ user: res.data.user });
                setAuth(true);
                setEmailTypeAlert('success')
                setShowEmailAlert(true)
                window.setTimeout(() => {
                    setShowEmailAlert(false)
                    props.history.push({ pathname: '/backoffice' })
                }, 2000)
            })
            .catch((err) => {
                setEmailTypeAlert('danger')
                setShowEmailAlert(true)
                setMessageIcon(faTimes)
                window.setTimeout(() => {
                    setShowEmailAlert(false)
                }, 2000)
            });
    };

    return (
        <div className="Login">
            <Alert className="form-alert" show={showEmailAlert} variant={emailTypeAlert}>
                <FontAwesomeIcon icon={messageIcon} className="message-icon" />
                {emailTypeAlert === 'success' && 'Login efetuado com sucesso'}
                {emailTypeAlert === 'danger' && 'Nome de usuário ou password incorretos '}
            </Alert>
            <div className="login-page">
                <div className="login-card">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-card-section login-middle-section">
                            <div className="login-field">
                                <img src={userIcon} className="login-icons" alt="User input" />
                                <input
                                    type="email"
                                    name="email"
                                    ref={register({
                                        required: '* Campo obrigatório',
                                        minLeght: 2,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Email Inválido',
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && <div className="form-error">{errors.email.message}</div>}
                            <div className="login-field">
                                <img src={passwordIcon} className="login-icons" alt="Password input" />
                                <input
                                    type="password"
                                    name="password"
                                    ref={register({ required: '* Campo obrigatório', minLeght: 2 })}
                                />
                            </div>
                            {errors.password && <div className="form-error">{errors.password.message}</div>}
                        </div>
                        <div className="login-card-section">
                            <button className="login-button" type="submit">LOGIN</button>
                        </div>
                    </form>
                    <div className="login-forgot">
                        <Link to="/login-password">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.string.isRequired,
};

export default Login;
