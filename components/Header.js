import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import image from '../public/searchImage.svg';
import { useForm } from '../hooks/useForm';
import { URL_API } from '../API/api';

const initialState = {
    keyword: ''
}

export const Header = () => {
    const [{ keyword }, handleInputChange] = useForm(initialState);
    const [searchResults, setSearchResults] = useState(null);
    useEffect(() => {
        getDataToAutoComplete();
        async function getDataToAutoComplete() {
            try {
                const data = await window.fetch(`${URL_API}/posts/search/${keyword}`)
                const dataJson = await data.json();
                setSearchResults(dataJson);
            }
            catch (error) {
                console.log(error)
            }
        }
    }, [keyword])
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={styles.headerMainContainer}>
                <h2 className={styles.headerTitle}>
                    Alexis&apos;s Blog
                </h2>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="search"
                        className={styles.searchInput}
                        name="keyword"
                        value={keyword}
                        onChange={handleInputChange}
                    />
                    <div
                        className={styles.lensIcon}
                    >
                        <Image
                            src={image}
                            alt="search"
                            title="search"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.headerBarNav}>
                <nav>
                    <Link href="/">
                        <a className={router.pathname == '/' ? styles.NavBarLinkActive : styles.NavBarLink}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={router.pathname == '/posts' ? styles.NavBarLinkActive : styles.NavBarLink}>Posts</a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname == '/about' ? styles.NavBarLinkActive : styles.NavBarLink}>About Me</a>
                    </Link>
                </nav>
            </div>
            {
                searchResults &&
                <div
                    className={styles.searchResultsContainer}
                >
                    <nav>
                        {
                            searchResults.length === 0 ?
                                (
                                    <p className={styles.searchResultItemException}>there is not results for <b>{keyword}</b></p>
                                )
                                :
                                (
                                    searchResults.map(({ path, postName }) => <Link href={`/posts/${path}`} key={postName}>
                                        <p className={styles.searchResultItem}>
                                            {postName}
                                        </p>
                                    </Link>)
                                )
                       }
                    </nav>
                </div>
            }
        </header>
    );
}


export const getStaticProps = async () => {

}