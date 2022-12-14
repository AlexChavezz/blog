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
                    <form>
                        <select
                            className={styles.inputSelectCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}
                            defaultValue={activeCategory}
                        >
                            <option value="ALL">TODOS</option>
                            <option value="AWS">AWS</option>
                            <option value="AZURE">AZURE</option>
                            <option value="PROGRAMACIÓN">PROGRAMACIÓN</option>
                            <option value="TECNOLOGÍA">TECNOLOGÍA</option>
                            <option value="SO">SISTEMAS OPERATIVOS</option>
                            <option value="GCP">GOOGLE CLOUD PLATFORM</option>
                        </select>

                    </form>
                    <article className={styles.containerConcidences}>
                        <h3 className={styles.coincidenceText}>COINCIDENCIAS PARA  {" "}</h3>
                        <Category category={activeCategory} hiddeIcon/>
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
