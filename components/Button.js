export const Button = ({onSubmit, text, className, }) => {
    return (
        <button
            className={className}
            onClick={onSubmit}
        >
            {
                text
            }
        </button>
    );
}