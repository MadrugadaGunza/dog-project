import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';

const LoginForm = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ username, password })
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            return json;
        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" placeholder="Digite o nome do usuário" />
                <Input label="Senha" type="password" name="password" placeholder="Digite a senha" />
                <Button>Enviar</Button>
            </form>
            <Link to='/login/criar'>Cadastros</Link>
        </section>
    )
}

export default LoginForm