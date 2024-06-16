// styles
import styles from './LoginForm.module.css';
import stylesBtn from './../../components/form/Button.module.css';
// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext';
// components
import Input from './../../components/form/Input';
import Button from './../../components/form/Button';
import Head from '../../helpers/Head';
import Error from '../../helpers/Error';

const LoginFrom = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { error, loading, userLogin } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ username, password })
    }

    return (
        <section className='animeLeft'>
            <Head title='Login' />
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                {error && <Error error={error} />}
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            </form>
            <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site</p>
                <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginFrom