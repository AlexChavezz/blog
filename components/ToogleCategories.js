import styles from '../styles/ToogleCategories.module.css';

const categories = ['PROGRAMING', 'AWS', 'AZURE', 'GOOGLE CLOUD PLATFORM', 'OPERATING SYSTEMS', 'MONGODB', 'DATABASES', 'JAVASCRIPT', 'CLOUD'];
export const ToogleCategories = ({ state, setState }) => {
    function addCategorie(category) {
        setState([...state, category]);
    }

    function isIn(categoryInput) {
        let flag = false;
        state.forEach((category) => {
            if (category === categoryInput) {
                flag = true;
            }
        })
        return flag;
    }
    function handleCategoryChange(category) {
        if (isIn(category)) {
            setState(state.filter((activeCategory) => activeCategory !== category));
            return;
        }
        addCategorie(category);
    }
    return (
        <section
            className={styles.createPostAsideContentCategoriesContainer}
        >
            {
                categories.map((category) =>
                    <span
                        className={isIn(category) ? styles.activeCategory : styles.createPostAsideContentCategory}
                        onClick={() => handleCategoryChange(category)}
                        key={category}
                    >
                        {category}
                    </span>)
            }
        </section>
    );
}