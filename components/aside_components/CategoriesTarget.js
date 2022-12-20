import styles from '../../styles/CategoriesTargetComponent.module.css';
import { Category } from './Category';

export const CategoriesTarget = () => {
    return (
        <section className={styles.CategoriesTargetContainer}>
            <article>
                <h3 className={styles.categoriesTitle}>CATEGORIES</h3>
            </article>
            <article className={styles.categoriesContainer}>
                {/* COMPONENET*/}
                <Category category="AZURE" />
                <Category category="SOFTWARE" />
                <Category category="AWS" />
                <Category category="TECHNOLOGY" />
                <Category category="SO" />
            </article>
        </section>
    );
}