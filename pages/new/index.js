import Head from "next/head";
import { useState } from "react";
import { Button } from "../../components/Button";
import styles from "../../styles/CreatePostPageStyles.module.css";



const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const date = new Date();
const initialstate =
    `
---
title: 
date: "${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}"
author: "Alexis Chavez"
category: 
post_id: 1
main_image: linuxosiosi.jpg
main_image_author: Foto de DSD
---
`;

export default function CreatePost() {
    const [post, setPost] = useState(initialstate);
    return (
        <>
            <Head>
                <title>New Post</title>
            </Head>
            <section
                className={styles.createPostMainContainer}
            >
                <main
                    className={styles.createPostMainContent}
                >
                    <header
                        className={styles.createPostHeader}
                    >
                        <h2
                            className={styles.createPostHeaderTitle}
                        >CREATE POST</h2>
                    </header>
                    <form
                        className={styles.createPostForm}
                    >
                        {/* 
                        <input
                            type="text"
                            placeholder="Post Title"
                            className={styles.postItemInput}
                        />

                       <select
                            type="text"
                            placeholder="Post Title"
                            className={styles.postItemInput}
                        >
                            <option value="programing">PROGRAMACION</option>
                            <option value="aws">AWS</option>
                            <option value="azure">AZURE</option>
                            <option value="gcp">GOOGLE CLOUD PLATFORM</option>
                            <option value="so">SISTEMAS OPERATIVOS</option>
                        </select> */}
                        <textarea
                            className={styles.postContent}
                            placeholder="Post Content"
                            name="post"
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                        >
                        </textarea>
                        <Button
                            text={"Publish Post"}
                            theme={"success"}
                            value="Publish Post"
                            onSubmit={() => console.log("hey")}
                        />
                    </form>
                </main>
            </section>
        </>
    );
}