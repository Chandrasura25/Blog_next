import React from 'react'
import Head from 'next/head'
import styles from '../../styles/NewsFeed.module.css'
import CategoryNews from '../../components/CategoryNews';
import Indicator from '../../components/Indicator';
import Link from 'next/link';
import Comment from '../../components/Comment';
const NewsFeed = ({ newsInfo }) => {
  const news_ref = newsInfo[0].news_ref;
  return <>
    <Head>
      <title>News Feed</title>
    </Head>
    <div className={styles.containerFluid}>
      <section className={styles.section}>
        <header>
          <Link href="/" className={styles.logo}>Blog<span>On</span></Link>
          <Indicator/>
        </header>
       <div className={styles.center}>
       <CategoryNews newsInfo={newsInfo} />
       </div>
       <div className={styles.comment}>
        <Comment news_ref={news_ref} />
       </div>
      </section>
    </div>
  </>
}
export default NewsFeed

export async function getServerSideProps(context) {
  const { query } = context;
  const { desc } = query;
  const demo = desc.replace(/ /g, "%20")
  let response = await fetch(`http://localhost:5000/posts?description=${demo}`);
  let data = await response.json();
  return {
    props: { newsInfo: data }
  }
}