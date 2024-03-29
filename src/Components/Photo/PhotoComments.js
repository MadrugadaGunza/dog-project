// styles
import styles from './PhotoComments.module.css';
// dependencies
import React from 'react'
import { UserContext } from './../../UserContext';
// components
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments);
    const commentsSection = React.useRef(null);
    const { login } = React.useContext(UserContext);

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments])

    return (
        <React.Fragment>
            <ul ref={commentsSection } className={styles.comments}>
                {comments.map((comment) => (
                    <li key={comment.comment_ID} className={styles.item}>
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