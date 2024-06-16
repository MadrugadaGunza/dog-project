import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState([]);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const getUser = async (token) => {
        try {
            setLoading(true);
            setError(null);
            const { url, options } = USER_GET(token);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Usuário inválido');
            const result = await response.json();
            setData(result);
            setLogin(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const userLogin = async ({ username, password }) => {
        try {
            setLoading(true);
            setError(null);
            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Usuário ou Senha inválida');
            const { token } = await response.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
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
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/login');
    }, [navigate]);

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido');
                    await getUser(token);
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
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, loading, error, login }}>
            {children}
        </UserContext.Provider>
    )
}
