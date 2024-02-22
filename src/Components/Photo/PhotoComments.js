// styles
import styles from './PhotoComments.module.css';
// dependencies
import React from 'react'
import { UserContext } from './../../UserContext';
// components
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments)
    const { login } = React.useContext(UserContext);

    return (
        <React.Fragment>
            <ul className={styles.comments}>
                {comments.map((comment) => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </React.Fragment>
    )
}

export default PhotoComments