import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/LastPost.module.css';

export const LastPost = ({ main_image, main_image_author, category, title, author, slug }) => {
    return (
        <article className={styles.lastPostContainer}>
            <div className={styles.lastPostTitleContainer}>
                <h3>
                    Last Post
                </h3>
            </div>
            <Link href={`/posts/${slug}`}>
                <div className={styles.lastPostInfo}>
                    <Image
                        src={`/${main_image}`}
                        width={650}
                        height={290}
                        className={styles.mainImage}
                        alt={"main image"}
                    />
                    <span className={styles.lastPostcategory}>{category}</span>
                    <span className={styles.lastPostTitle}>{title}</span>
                    <span className={styles.lastPostAuthor}>By {author}</span>
                    <span className={styles.imageAuthor}>{main_image_author}</span>
                </div>
            </Link>
        </article>
    );
}