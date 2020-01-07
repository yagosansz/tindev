import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

function Login({ history }) {

    const [ username, setUsername ] = useState(''); // inicializada com valor vazio

    function handleSubmit(e) {
        e.preventDefault();

        console.log(username);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={ handleSubmit }>
                <img src={logo} alt="Tindev logo" />
                <input 
                    placeholder="Digite seu usuario no Github"
                    value={username}
                    onChange={ e => setUsername(e.target.value) }
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;