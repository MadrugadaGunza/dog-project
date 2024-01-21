import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { userLogin, error, loading } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin(username, password);
    }

    return (
        <div>
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' id='username' name='username' error={error}
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label='Senha' type='password' id='password' name='password' error={error}
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                    {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            </form>
            <Link to='/login/criar'>Criar</Link>
        </div>
    )
}

export default LoginForm