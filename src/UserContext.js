import React from 'react';
import { GET_USER, POST_TOKEN, TOKEN_VALIDATE_POST } from './api';
import { Navigate, useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogin = async ({ username, password }) => {
        try {
            setLoading(true);
            const { url, options } = POST_TOKEN({ username, password });
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Usuario não existente');
            const { token } = await response.json();
            window.localStorage.setItem('token', token);
            getUser(token);
            navigate('/conta')
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setLogin(true);
        }
    }

    const getUser = async (token) => {
        try {
            setError(null);
            setLoading(true);
            setLogin(false);
            const { url, options } = GET_USER(token);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Usuarion inválido');
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setError(null);
            setLoading(false);
            setLogin(true);
        }
    }

    const userLogout = React.useCallback(
        async function () {
            setData(null);
            setError(null);
            setLoading(false);
            setLogin(false);
            window.localStorage.removeItem('token');
            navigate("/login");
        },
        [navigate]
    );

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setLoading(true);
                    setLogin(false);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido');
                    const result = await response.json();
                    console.log(result);
                    await getUser(token);
                } catch (error) {
                    setError(error.message)
                    userLogout();
                } finally {
                    setLoading(false);
                    setLogin(true);
                    setError(null);
                }
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, data, userLogout, loading, error, login }}>
            {children}
        </UserContext.Provider>
    )
}
