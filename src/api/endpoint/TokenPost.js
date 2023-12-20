import React, { useState } from 'react'

const TokenPost = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            setToken(json.token);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p style={{ wordBreak: 'break-all' }}>{token}</p>
            <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
            <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            <button>Envia</button>
        </form>
    )
}

export default TokenPost