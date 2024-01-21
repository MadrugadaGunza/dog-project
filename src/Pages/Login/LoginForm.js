// styles
import styles from './LoginForm.module.css';
import stylesBtn from './../../Components/Form/Button.module.css';
// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext';
//components
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import Error from '../../Components/Helper/Error';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { userLogin, error, loading } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin(username, password);
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' id='username' name='username'
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label='Senha' type='password' id='password' name='password'
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
                {error && <Error error={error} />}
            </form>
            <Link to='/login/perdu' className={styles.perdeu}>
                Perdeu a senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui uma conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to='/login/criar'>
                    Cadastro
                </Link>
            </div>
        </section>
    )
}

export default LoginForm