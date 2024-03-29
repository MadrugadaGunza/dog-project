import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();

    const userGet = async (token) => {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setLogin(true);
    }

    const userLogin = async (username, password) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`Erro: usuário inexistente`);
            const { token } = await response.json();
            window.localStorage.setItem('token', token);
            await userGet(token);
            navigate('/conta');
        } catch (error) {
            setError(error.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    const userLogout = React.useCallback(async () => {
        setData(null);
        setLogin(false);
        setError(null);
        setLoading(false);
        window.localStorage.removeItem('token');
    }, [])

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido');
                    await userGet(token);
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout])

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, login, loading }}>
            {children}
        </UserContext.Provider>
    )
}
