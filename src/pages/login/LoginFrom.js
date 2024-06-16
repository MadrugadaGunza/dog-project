import React from 'react'
import { Link } from 'react-router-dom'
import Input from './../../components/form/Input';
import Button from './../../components/form/Button';
import Head from '../../helpers/Head';
import { TOKEN_POST } from '../../api';

const LoginFrom = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            const { token } = await response.json();
            setData(token);
            console.log(token);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section>
            <Head title='Login' />
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label='Usuário'
                    type='text'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <Input
                    label='Senha'
                    type='password'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                {loading ? <Button disabled>Entrar</Button> : <Button>Entrar</Button>}
            </form>
            <Link to='/login/criar'>Cadastro</Link>
            <Link to='/login/perdeu'>Perdeu a senha?</Link>
        </section>
    )
}

export default LoginFrom