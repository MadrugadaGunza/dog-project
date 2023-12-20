import React, { useState } from 'react'

const UserPost = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://dogsapi.origamid.dev/json/api/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ username, email, password }),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
            <input type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
            <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            <button>Envia</button>
        </form>
    )
}

export default UserPost