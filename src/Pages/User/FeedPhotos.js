import styles from './FeedPhotos.module.css'
import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from './../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from './../../Components/Helper/Error';
import Loading from '../../Components/Helper/Loading';

const FeedPhotos = ({ setModalPhoto }) => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            await request(url, options);
        }
        fetchPhotos();
    }, [request])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={styles.feed}>
                {
                    data.map((photo) => (
                        <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                    ))
                }
            </ul>
        )
    else return null
}

export default FeedPhotos