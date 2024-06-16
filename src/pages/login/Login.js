// styles
import styles from './Login.module.css';
// dependencies
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
// pages
import LoginFrom from './LoginFrom';
import LoginCreate from './LoginCreate';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';

const Login = () => {
    const { login } = React.useContext(UserContext);
    if (login === true) return <Navigate to='/conta' />

    return (
        <section className={styles.login}>
            <div className={styles.form}>
                <Routes>
                    <Route path='/' element={<LoginFrom />} />
                    <Route path='/criar' element={<LoginCreate />} />
                    <Route path='/perdeu' element={<LoginPasswordLost />} />
                    <Route path='/resetar' element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login