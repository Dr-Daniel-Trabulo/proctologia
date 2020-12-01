import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import PopUp from '../PopUp';
import './backoffice.css';
import passwordIcon from '../Assets/password.png';
import userIcon from '../Assets/user.png';

import { UserContext } from '../context/UserContext';
import Cookies from 'js-cookie';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const setAuth = useContext(UserContext);
    const setUser = useContext(UserContext);


    const [flash, setFlash] = useState('');
    const [messageStatus, setMessageStatus] = useState('');

    const onSubmit = (data) => {
        axios.post('/login/signin', data)
            .then((res) => {
                Cookies.set("token", res.data.token)
                setUser({ user: res.data.user });
                setAuth(true);
                setFlash(res.data.message);
                setMessageStatus('success');
                window.setTimeout(() => (props.history.push({ pathname: '/backoffice' })), 1500);
            })
            .catch((err) => {
                setMessageStatus('error');
                setFlash('Invalid Email or Password, please try again.');
            });
    };

    return (
        <div className="Login">
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
            <PopUp flashInput={flash} typeMessage={messageStatus} />
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.string.isRequired,
};

export default Login;
