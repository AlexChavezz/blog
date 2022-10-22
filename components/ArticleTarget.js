import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ArticleTargetComponent.module.css';

export const ArticleTarget = ({ category, title, resumen, slug, date, main_image }) => {
    return (
        <Link href={`/posts/${slug}`}>
            <article className={styles.articleTargetContainer}>
                <div className={styles.articleImageContainer}>
                    <Image
                        src={`/${main_image}`}
                        width={316}
                        height={207}
                        objectFit="cover"
                        className={styles.articleImage}
                        alt={"main_image"}
                    />
                </div>
                <div className={styles.articleInfoContainer}>
                    <span className={styles.articleCategoryText}>{category}</span>
                    <h4 className={styles.articleTitle}>{title}</h4>
                    <span className={styles.articleDate}>{date}</span>
                    <p className={styles.articleResume}>{resumen}</p>

                </div>
            </article>
        </Link>
    );
}