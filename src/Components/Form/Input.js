import styles from './Input.module.css';

const Input = ({ label, type, placeholder, name }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className={styles.input} />
            <p className={styles.error}>Error</p>
        </div>
    )
}

export default Input;