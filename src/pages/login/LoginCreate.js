// dependencies
import React from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../hooks/useFetch'
import { UserContext } from './../../UserContext';
// components
import Head from '../../helpers/Head'
import Input from '../../components/form/Input'
import Error from './../../helpers/Error';
import Button from './../../components/form/Button';

const LoginCreate = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { loading, error, request } = useFetch();
    const { userLogin } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { url, options } = USER_POST({ username, email, password });
        const { response } = await request(url, options);
        if (response.ok) userLogin({ username, password });
    }

    return (
        <section className='animeLeft'>
            <Head title='Cadastre-se' />
            <h1 className='title'>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label='Usuário'
                    name='username'
                    type='text'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Input
                    label='Senha'
                    name='password'
                    type='password'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                {error && <Error error={error} />}
                {loading ? <Button disabled>Carregando...</Button> : <Button>Cadastre-se</Button> }
            </form>
        </section>
    )
}

export default LoginCreate