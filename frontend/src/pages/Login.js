import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev logo" />
                <input 
                    placeholder="Digite seu usuario no Github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;