import { useRef, useState } from 'react';
import { URL_API } from '../../API/api';
import { Button } from '../Button';
import { ImageMdx } from './ImageMdx';
import { UploadImage } from './UploadImage';
import styles from '../../styles/AsideBarComponent.module.css'
import { useForm } from '../../hooks/useForm';

const categories = ['PROGRAMING', 'AWS', 'AZURE', 'GOOGLE CLOUD PLATFORM', 'SO']
export const AsideBar =  (props) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);
    const [{ SECRET_KEY }, handleInputChange, reset] = useForm({ SECRET_KEY: '' });
    const fileInputRef = useRef();
    function addCategorie(category) {
        setActiveCategories([...activeCategories, category]);
    }
    function selectInputImage() {
        fileInputRef.current.click();
    }
    async function handleInputFileChange({ target }) {
        const file = new FormData();
        file.append('image', target.files[0]);
        try {
            let response = await window.fetch(`${URL_API}/posts/uploadImage`, {
                method: "POST",
                body: file
            })
            response = await response.json()
            setUploadedImages([...uploadedImages, `![text](${response.thumbnailUrl} "stack")`])
        }
        catch (error) {
            throw new Error(error);
        }
    }
    function isIn(categoryInput) {
        let flag = false;
        activeCategories.forEach((category) => {
            if (category === categoryInput) {
                flag = true;
            }
        })
        return flag;
    }
    function handleCategoryChange(category) {
        if (isIn(category)) {
            setActiveCategories(activeCategories.filter((activeCategory) => activeCategory !== category));
            return;
        }
        addCategorie(category);
    }
    /*
        CREATE POST FUNCTION
    */
    const createPost = async (e) => {
        e.preventDefault();
        try {
            let res = await window.fetch(`${URL_API}/posts/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...props.values, mainImage: props.isThereAUrlFile.url, SECRET_KEY: SECRET_KEY, categories: activeCategories })
            })
            res = await res.json();
            if (res.ok) {
                props.reset();
                reset();
                setUploadedImages([]);
                setActiveCategories([]);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    return (
        <aside
            className={styles.createPostAsideContent}
        >
            <section
                className={styles.createPostAsideContentUploadImage}
                onClick={selectInputImage}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleInputFileChange}
                    style={{ display: 'none' }}
                />
                <h5>
                    Upload Image
                </h5>
                <UploadImage
                    className={styles.uploadImageComponent}
                />
            </section>
            <section>
                {
                    uploadedImages.map((image) => <ImageMdx thumbnail={image} key={image} />)
                }
            </section>
            <section
                className={styles.createPostAsideContentUploadImage}
            >
                <h5>Categories</h5>
            </section>
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
            <section
                className={styles.createPostAsideContentUploadImage}
            >

            </section>
            <section>
                <h5>Secret key to upload</h5>
                <form>
                    <input
                        type='password'
                        name='SECRET_KEY'
                        value={SECRET_KEY}
                        onChange={handleInputChange}
                        className={styles.createPostAsideContentSecretKeyInput}
                        autoComplete='off'
                    />
                </form>
            </section>
            <Button
                text={"Publish"}
                theme={"success"}
                className={styles.publishButton}
                onSubmit={createPost}
            />
        </aside>
    );
}