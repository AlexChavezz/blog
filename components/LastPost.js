import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/LastPost.module.css';

export const LastPost = ({ postName, categories, author, mainImage, path }) => {
    return (
        <article className={styles.lastPostContainer}>
            <div className={styles.lastPostTitleContainer}>
                <h3>
                    Last Post
                </h3>
            </div>
            <Link href={`/posts/${path}`}>
                <div className={styles.lastPostInfo}>
                    <Image
                        src={`${mainImage}`}
                        width={650}
                        height={290}
                        className={styles.mainImage}
                        alt={"main image"}
                    />
                    <span className={styles.lastPostcategory}>{categories[0]}</span>
                    <span className={styles.lastPostTitle}>{postName}</span>
                    <span className={styles.lastPostAuthor}>By {author}</span>
                    {/* <span className={styles.imageAuthor}>{main_image_author}</span> */}
                </div>
            </Link>
        </article>
    );
}