import styles from '../styles/ButtonComponentStyles.module.css';


export const Button = ({onSubmit, text, theme, className }) => {
    return (
        <button
            className={theme === "success"? `${styles.btnSuccess} ${className}` : styles.btnSecoundary}
            onClick={onSubmit}
        >
            {
                text
            }
        </button>
    );
}