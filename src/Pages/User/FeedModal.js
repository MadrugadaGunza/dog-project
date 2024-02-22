import styles from './FeedModal.module.css';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../../Components/Helper/Error';
import Loading from '../../Components/Helper/Loading';
import PhotoContent from '../../Components/Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        const { result } =  request(url, options);
        console.log(result);
    }, [request, photo]);

    function handleOutsiteClick(e) {
        if (e.target === e.currentTarget) {
            setModalPhoto(null);
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsiteClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal