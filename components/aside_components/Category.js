import Link from 'next/link';
import { useContext } from 'react';
import { CategoryasaParameter } from '../../context/CategoryasaParameter';
import styles from '../../styles/CategoriesTargetComponent.module.css';

export const Category = ({ category }) => {
    const { setActiveCategory } = useContext(CategoryasaParameter);
    const changeCategory = () => {
        setActiveCategory(category.toUpperCase());
    }
    return (
        <Link 
            href="/posts"
        >
            <div 
                className={styles.Category}
                onClick={changeCategory}>
                <span className={`${styles.tagIcon} material-symbols-outlined`}>
                    sell
                </span>
                <p style={{ color: "gray" }}>{category}</p>
            </div>
        </Link>
    );
}