import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styles from '../styles/ArticleTargetComponent.module.css';

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const ArticleTarget = ({ categories, postName, path, date, mainImage }) => {
    const {current:postDate} = useRef(new Date(date));
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
                    <span className={styles.articleDate}>{`${months[postDate.getMonth()]} ${postDate.getDate()} ${postDate.getFullYear()}`}</span>
                </div>
            </article>
        </Link>
    );
}