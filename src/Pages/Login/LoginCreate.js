import React from 'react'
import Input from './../../Components/Form/Input';
import Button from './../../Components/Form/Button';
import { USER_POST } from '../../api';
import { UserContext } from './../../UserContext';

const LoginCreate = () => {
    const [username, setUsername] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const { userLogin } = React.useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({ username, email, password });
        const response = await fetch(url, options);
        if (response.ok) userLogin({ username, email, password });
        const result = await response.json();
        console.log(result);
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' placeholder='Digite o seu nome'
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label='Email' type='email' placeholder='Digite o seu Email'
                    value={email} onChange={({ target }) => setEmail(target.value)} />
                <Input label='Senha' type='password' placeholder='Digite uma senha'
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                <Button>Cadastrar</Button>
            </form>
        </section>
    )
}

export default LoginCreate