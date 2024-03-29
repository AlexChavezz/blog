import Head from 'next/head'
import { URL_API } from '../API/api';
import { ArticleTarget } from '../components/ArticleTarget';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'
import { LastPost } from '../components/LastPost';
import { MainContent } from '../components/MainContent';
import styles from "../styles/Home.module.css";

export default function Home({
  posts,
}) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Blog de Tecnológia en Español" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent>
        <section className={styles.postsSection}>
          <LastPost {...posts[0]} />
          <article>
            <div className={styles.morePostTitleContainer}>
              <h3>
                More Posts
              </h3>
            </div>
            {
              posts.map((post, index) => {
                if( index === 0)
                {
                  return;
                }
                return <ArticleTarget {...post} key={post.path} />
              })
            }
          </article>
        </section>
      </MainContent>
      <Footer />
    </div>
  )
}

// export async function getServerSideProps() {
//   // -> get posts
//   const data = await fetch(`${URL_API}/posts`);
//   const posts = await data.json();
//   return {
//     props: {
//       posts,
//     },
//   }

// }


export async function getStaticProps() {
  // -> get posts
  const data = await fetch(`${URL_API}/posts`);
  const posts = await data.json();
  return {
    props: {
      posts,
    },
  }
}
