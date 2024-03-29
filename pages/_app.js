import { CategoryasaParameter } from '../context/CategoryasaParameter'
import { useState } from 'react'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  return (
    <>
    <Head>
      <link rel="icon" href="/alexisIcon.png" />
    </Head>
      <CategoryasaParameter.Provider value={{
        activeCategory,
        setActiveCategory
      }}>
        <Component {...pageProps} />
      </CategoryasaParameter.Provider>
    </>
  );

}

export default MyApp
