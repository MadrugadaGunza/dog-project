import React from 'react';
import { POST_TOKEN } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const userLogin = async ({ username, password }) => {
        try {
            setLoading(true);
            const { url, options } = POST_TOKEN({ username, password });
            const response = await fetch(url, options);
            const { token } = await response.json();
            console.log(token)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setLogin(true);
        }
    }

    return (
        <UserContext.Provider value={{ nome: 'Madrugada', userLogin }}>
            {children}
        </UserContext.Provider>
    )
}
