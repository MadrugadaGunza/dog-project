import styles from './Input.module.css';

const Input = ({ label, type, placeholder, name, value, onChange, error, onBlur }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input;