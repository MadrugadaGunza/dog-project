import styles from './Input.module.css';
import React from 'react';

const Input = ({ label, id, name, type, value, onChange, error }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input type={type} id={id} name={name} className={styles.input}
                value={value} onChange={onChange} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input