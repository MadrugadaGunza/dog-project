// styles
import styles from './Header.module.css';
// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// svg
import { ReactComponent as Dogs } from './../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {

    const { data, userLogout } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='/' className={styles.logo} aria-label='Dogs - Home'>
                    <Dogs />
                </Link>
                {
                    data ? (
                        <Link to='/conta' className={styles.login}>{data.nome}</Link>
                    ) : (
                        <Link to='/login' className={styles.login}>Login</Link>
                    )
                }
            </nav>
        </header>
    )
}

export default Header;