import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from './../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {

    const { nome } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.logo} to="/">
                    <Dogs aria-label='dogs - home' />
                </Link>

                <ul style={{ display: 'flex', textDecoration: 'none' }}>
                    <li style={{ marginRight: '.5rem' }}>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        nome ? (
                            <li>
                                <Link className={styles.login} to="/conta">{nome}</Link>
                            </li>
                        ) : (
                            <li>
                                <Link className={styles.login} to="/login">Login</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;