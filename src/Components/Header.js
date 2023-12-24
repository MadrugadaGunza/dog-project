import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from './../Assets/dogs.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.logo} to="/">
                    <Dogs aria-label='dogs - home' />
                </Link>

                <Link className={styles.login} to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header;