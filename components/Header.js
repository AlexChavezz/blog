import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export const Header = () => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={styles.headerMainContainer}>
                <h2 className={styles.headerTitle}>
                    Alexis&apos;s Blog
                </h2>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="search" className={styles.searchInput}/>
                    <span className={`material-symbols-outlined ${styles.lensIcon}`}>
                        search
                    </span>
                </div>
            </div>
            <div className={styles.headerBarNav}>
                <nav>
                    <Link href="/">
                        <a className={router.pathname=='/'?styles.NavBarLinkActive:styles.NavBarLink}>Home</a>
                    </Link>
                    <Link href="/posts">
                    <a className={router.pathname=='/posts'?styles.NavBarLinkActive:styles.NavBarLink}>Posts</a>
                    </Link>
                    <Link href="/about">
                    <a className={router.pathname=='/about'?styles.NavBarLinkActive:styles.NavBarLink}>About Me</a>
                    </Link>
                </nav>
            </div>
        </header>  
    );
}


export const getStaticProps = async() => {
    
}