import { useState, useRef } from "react";
import { URL_API } from "../../API/api";
import { UploadImage } from "../../components/new_post/UploadImage";
import { useForm } from "../../hooks/useForm";
import { AsideBar } from "../../components/new_post/AsideBar";
import Head from "next/head";
import styles from "../../styles/CreatePostPageStyles.module.css";
import Image from "next/image";

const initialState = {
    postName: '',
    date: null,
    author: 'alexis chavez',
    mainImage: '',
    path: '',
    content: ''
}

const fileInitialState = {
    url: null,
    isUpload: false,
    isUploading: false
}

export default function CreatePost() {
    const [isThereAUrlFile, setIsThereAUrlFile] = useState(fileInitialState);
    const [values, handleInputChange, reset] = useForm(initialState);
    async function handleInputFileChange({ target }) {
        setIsThereAUrlFile({ ...isThereAUrlFile, isUploading: true })
        const file = new FormData();
        file.append('image', target.files[0]);
        window.fetch(`${URL_API}/posts/uploadImage`, {
            method: "POST",
            body: file
        })
            .then((res) => res.json())
            .then(res => setIsThereAUrlFile({ url: res.thumbnailUrl, isUpload: true, isUploading: false }))
    }
    const fileInput = useRef();
    function selectImageFromLocalFiles() {
        fileInput.current.click();
        setIsThereAUrlFile
    }

    function resetAll() {
        reset();
        setIsThereAUrlFile(fileInitialState);
    }

    return (
        <>
            <Head>
                <title>New Post</title>
            </Head>
            <section
                className={styles.createPostMainContainer}
            >
                <AsideBar values={values} isThereAUrlFile={isThereAUrlFile} reset={resetAll}/>
                <main
                    className={styles.createPostMainContent}
                >
                    <form
                        className={styles.createPostForm}
                    // onSubmit={onSubmit}
                    >
                        <input
                            type="text"
                            name="postName"
                            placeholder="post name"
                            value={values.postName}
                            onChange={handleInputChange}
                            className={styles.postItemInput}
                        />
                        <input
                            type="text"
                            name="path"
                            placeholder="path name"
                            value={values.path}
                            onChange={handleInputChange}
                            className={styles.postItemInput}
                        />
                        {
                            !isThereAUrlFile.isUpload ?
                                (
                                    isThereAUrlFile.isUploading ?
                                        (
                                            <div className='loader'></div>
                                        )
                                        :
                                        (
                                            <UploadImage className={styles.postItemInput} title="Upload main image " onClick={selectImageFromLocalFiles} />
                                        )
                                )
                                :
                                (
                                    <Image
                                        src={isThereAUrlFile.url}
                                        alt='main-image'
                                    />
                                )
                        }
                        <input
                            type="file"
                            className={styles.postItemInput}
                            onChange={handleInputFileChange}
                            ref={fileInput}
                            style={{ display: 'none' }}
                        />
                        <textarea
                            className={styles.postContent}
                            placeholder="Post Content"
                            name="content"
                            value={values.content}
                            onChange={handleInputChange}
                        >
                        </textarea>
                    </form>
                </main>
            </section>
        </>
    );
}