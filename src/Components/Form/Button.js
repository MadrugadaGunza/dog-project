import styles from './Button.module.css';
import React from 'react';

const Button = (props) => {
    return <button {...props} className={styles.button}>{props.children}</button>
}

export default Button;