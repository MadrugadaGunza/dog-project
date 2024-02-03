import React from 'react'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Form/Button';
import { Link } from 'react-router-dom';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from './../../Components/Helper/Error';

const LoginCreate = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { userLogin } = React.useContext(UserContext);
    const { loading, error, request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { url, options } = USER_POST({ username, email, password });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username, password);
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label='Usuário  ' type='text' id='username' name='username'
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label='Email' type='email' id='email' name='email'
                    value={email} onChange={({ target }) => setEmail(target.value)} />
                <Input label='Senha' type='password' id='password' name='password'
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                {loading ? <Button>Carregando...</Button> : <Button>Cadastrar</Button>}
                {error && <Error error={error} />}
            </form>

            <Link to='/login'>Login</Link>
        </section>
    )
}

export default LoginCreate