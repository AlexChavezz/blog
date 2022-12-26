import Link from 'next/link';
import { useContext } from 'react';
import { CategoryasaParameter } from '../../context/CategoryasaParameter';
import styles from '../../styles/CategoriesTargetComponent.module.css';
import tag from '../../assets/tag.svg';
import Image from 'next/image';


export const Category = ({ category, hiddeIcon }) => {
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
                    {
                        !hiddeIcon &&
                            <div className={`${styles.tagIcon} material-symbols-outlined`}>
                                <Image
                                    src={tag}
                                    width={24}
                                    height={24}
                                    alt="tag"
                                />
                            </div>
                    }
                <p style={{ color: "gray" }}>{category}</p>
            </div>
        </Link>
    );
}