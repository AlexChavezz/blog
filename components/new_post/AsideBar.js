import { useRef, useState } from 'react';
import { URL_API } from '../../API/api';
import { Button } from '../Button';
import { ImageMdx } from './ImageMdx';
import { UploadImage } from './UploadImage';
import { useForm } from '../../hooks/useForm';
import { ToogleCategories } from '../ToogleCategories';
import styles from '../../styles/AsideBarComponent.module.css'


export const AsideBar = (props) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);
    const [{ SECRET_KEY }, handleInputChange, reset] = useForm({ SECRET_KEY: '' });
    const fileInputRef = useRef();
  
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
            <ToogleCategories state={activeCategories} setState={setActiveCategories}/>
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