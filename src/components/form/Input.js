import styles from './Input.module.css';
import React from 'react'

const Input = ({ label, name, type, value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input