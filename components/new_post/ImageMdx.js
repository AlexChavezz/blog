import styles from '../../styles/ImageMdxComponent.module.css';
import copy from "copy-to-clipboard";  
export const ImageMdx = ({ thumbnail }) => {
    const copyToClipboard = () => {
        copy(thumbnail);
    }
    return (
        <div
            className={styles.imageMdxComponent}
            onClick={copyToClipboard}
        >
            {
                thumbnail
            }
        </div>
    )
}