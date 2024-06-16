import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';
import { ReactComponent as Dog } from './../assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
    const { login, data, userLogout } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link to='/' className={styles.logo}>
                    <Dog />
                </Link>
                {data && login === true ?
                    (
                        <div>
                            <Link to='/conta' className={styles.login}>
                                {data.nome}
                            </Link>
                            <button onClick={userLogout}>Saír</button>
                        </div>
                    ) :
                    (<Link to='/login' className={styles.login}>Login</Link>)
                }
            </nav>
        </header>
    )
}

export default Header