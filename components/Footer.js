import styles from '../styles/FooterComponent.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerCopy}>&copy; Alexis Chavez 2022</p>
        </footer>
    );
}