import styles from './Footer.module.css';
import React from 'react';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer_text}>2023 - 2024 &copy; M2CG</p>
        </div>
    )
}

export default Footer