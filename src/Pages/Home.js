import React from 'react'
import { UserContext } from '../UserContext';

const Home = () => {
    const { data } = React.useContext(UserContext);
    return (
        <div>
            {data && <h1 className='title'>{data.nome}</h1>}
        </div>
    )
}

export default Home