import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';
import { ReactComponent as Dog } from './../assets/dogs.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link to='/' className={styles.logo}>
                    <Dog />
                </Link>
                <Link to='/login' className={styles.login}>Login</Link>
            </nav>
        </header>
    )
}

export default Header