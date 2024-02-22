import React from 'react';
import { ReactComponent as Enviar } from './../../Assets/enviar.svg'
import useFetch from './../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from './../Helper/Error';

const PhotoCommentsForm = ({ id, setComments }) => {
    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, result } = await request(url, options);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, result]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <button>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm