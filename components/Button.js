import styles from '../styles/ButtonComponentStyles.module.css';


export const Button = ({onSubmit, text, theme }) => {
    return (
        <button
            className={theme === "success"? styles.btnSuccess : styles.btnSecoundary}
            onClick={onSubmit}
        >
            {
                text
            }
        </button>
    );
}