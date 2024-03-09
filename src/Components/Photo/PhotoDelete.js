import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';
import styles from './PhotoDelete.module.css';
import React from 'react';

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    const handleClick = async () => {
        const confirm = window.confirm('Tem certeza de deseja deletar?');
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }
    
    return (
        <>
            {
                loading ? (
                    <button disabled className={styles.delete}>Deleting...</button>
                ) :
                    (
                        <button onClick={handleClick} className={styles.delete}>Delete</button>
                    )
            }
        </>
    )
}

export default PhotoDelete