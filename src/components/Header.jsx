import React from 'react'
import { Link } from 'react-router-dom';
import Dog from '../Assets/dogs.svg';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to='/'>
                        <img src={Dog} alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login / Criar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header