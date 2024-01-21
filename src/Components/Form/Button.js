import styles from './Button.module.css';
import React from 'react';

const Button = ({ children, props }) => {
    return <button {...props} className={styles.button}>{children}</button>
}

export default Button;