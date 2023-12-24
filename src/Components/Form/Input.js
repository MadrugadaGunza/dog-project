import styles from './Input.module.css';

const Input = ({ label, type, placeholder, name }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Input;