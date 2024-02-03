//styles
import styles from './UserHeaderNav.module.css'
//dependencies
import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './../../UserContext';
import useMedia from '../../Hooks/useMedia';
// svg
import { ReactComponent as MinhasFotos } from './../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from './../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from './../../Assets/adicionar.svg';
import { ReactComponent as Sair } from './../../Assets/sair.svg';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const mobile = useMedia('(max-width: 40rem)');

    const handleLogout = () => {
        userLogout();
        navigate('/login');
    }

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname])

    return (
        <React.Fragment>
            {
                mobile &&
                <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}
                >
                </button>
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to='/conta' end>
                    <MinhasFotos />{mobile && 'Minhas Fotos'}
                </NavLink>
                <NavLink to='/conta/estatisticas'>
                    <Estatisticas />{mobile && 'Estatíisticas'}
                </NavLink>
                <NavLink to='/conta/postar'>
                    <AdicionarFoto />{mobile && 'Adiicionar Foto'}
                </NavLink>
                <button onClick={handleLogout}>
                    <Sair />{mobile && 'Saír'}
                </button>
            </nav>
        </React.Fragment>
    )
}

export default UserHeaderNav