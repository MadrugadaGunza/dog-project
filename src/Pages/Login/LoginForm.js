import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { userLogin, loading, error } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ username, password });
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input label="Usuário" type="text" name="username" placeholder="Digite o nome do usuário"
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label="Senha" type="password" name="password" placeholder="Digite a senha"
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
                {error && <p className='error'>{error}</p>}
            </form>
            <Link to='/login/criar'>Cadastros</Link>
        </section>
    )
}

export default LoginForm;