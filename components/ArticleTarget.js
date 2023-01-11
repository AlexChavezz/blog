import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ArticleTargetComponent.module.css';

export const ArticleTarget = ({ categories, postName, path, date, mainImage }) => {
    return (
        <Link href={`/posts/${path}`}>
            <article className={styles.articleTargetContainer}>
                <div className={styles.articleImageContainer}>
                    <Image
                        src={`${mainImage}`}
                        width={316}
                        height={207}
                        objectFit="cover"
                        className={styles.articleImage}
                        alt={"main_image"}
                    />
                </div>
                <div className={styles.articleInfoContainer}>
                    <span className={styles.articleCategoryText}>{categories[0]}</span>
                    <h4 className={styles.articleTitle}>{postName}</h4>
                    <span className={styles.articleDate}>{date}</span>
                </div>
            </article>
        </Link>
    );
}