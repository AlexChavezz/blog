import Head from "next/head";
import styles from "../../styles/CreatePostPageStyles.module.css";

export default function CreatePost() {
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
                </main>
            </section>
        </>
    );
}