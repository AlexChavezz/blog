import { useState, useEffect, useContext } from 'react';
import Head from "next/head";
import { ArticleTarget } from "../../components/ArticleTarget";
import { Category } from "../../components/aside_components/Category";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";
import { getAllFilesMetadata } from "../../lib/mdx";

import styles from '../../styles/Posts.module.css';
import { CategoryasaParameter } from '../../context/CategoryasaParameter';

export default function Posts({ posts, category }) {
    const [activePosts, setActivePosts] = useState(posts);
    const { activeCategory, setActiveCategory } = useContext(CategoryasaParameter);
    useEffect(() => {
        if (activeCategory === "ALL") {
            setActivePosts(posts);
        }
        else {
            setActivePosts(posts.filter(post => post.category.toUpperCase() === activeCategory));
        }
    }, [activeCategory, posts])

    return (
        <>
            <Head>
                <title>POSTS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <MainContent>
                <section className={styles.postsContainer}>
                    SELECT A CATEGORY
                    <article className={styles.caategoriesContainer}>
                        <Category
                            category="AWS"
                        />
                        <Category
                            category="AZURE"
                        />
                        <Category
                            category="PROGRAMING"
                        />
                        <Category
                            category="TECHNOLOGY"
                        />
                    </article>
                    <article className={styles.containerConcidences}>
                        <h3 className={styles.coincidenceText}>COINCIDENCES FOR {" "}</h3>
                        <Category category={activeCategory} />
                    </article>
                    <article>
                        {
                            activePosts.map(post => <ArticleTarget {...post} key={post.post_id} />)
                        }
                    </article>
                </section>
            </MainContent>
            <Footer />
        </>
    );
}

export const getStaticProps = async () => {
    const posts = await getAllFilesMetadata();
    return {
        props: { posts }
    }
}