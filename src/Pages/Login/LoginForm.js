// styles
import styles from './LoginForm.module.css';
import stylesBtn from './../../Components/Form/Button.module.css';
// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
// components
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import Error from '../../Helper/Error';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { userLogin, loading, error } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ username, password });
    }

    return (
        <section className='animeLeft'>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className='title'>Login</h1>
                <Input label="Usuário" type="text" name="username" placeholder="Digite o nome do usuário"
                    value={username} onChange={({ target }) => setUsername(target.value)} />
                <Input label="Senha" type="password" name="password" placeholder="Digite a senha"
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                {error && <Error error={error} />}
                {loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
            </form>
            <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm;