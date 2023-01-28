import React from 'react'
import Head from 'next/head'
import styles from '../../styles/NewsFeed.module.css'
import CategoryNews from '../../components/CategoryNews';
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Indicator from '../../components/Indicator';
const NewsFeed = ({ newsInfo }) => {
  const [comments, setcomments] = useState('')
  // const news_ref = newsInfo[0].news_ref;
  // const { data, error, mutate } = useSWR(`http://localhost:5000/comments?news_ref=${news_ref}`, {
  //   refreshInterval: 1000
  // })
  const send = () => {
    const message = comments;
    axios.post("http://localhost:3000/comments", { news_ref, message }).then((res) => {
      setcomments('')
      mutate();
    })
  }
  const delBtn = (delIndex) => {
    axios.delete(`http://localhost:3000/comments/${delIndex}`)
  }
  return <>
    <Head>
      <title>News Feed</title>
    </Head>
    <div className={styles.containerFluid}>
      <section className={styles.section}>
        <header>
          <a href="/" className={styles.logo}>Blog<span>On</span></a>
          <Indicator/>
        </header>

        <CategoryNews />
        <div>
          {/* <input type="text" value={comments} onChange={(e) => setcomments(e.target.value)} />
          <button className="btn" onClick={send}>Send</button>
          <button className="btn" onClick={() => delBtn(val.id)}>Del Comment</button> */}
        </div>
      </section>
    </div>
  </>
}
export default NewsFeed

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const { desc } = query;
//   const demo = desc.replace(/ /g, "%20")
//   let response = await fetch(`http://localhost:5000/posts?description=${demo}`);
//   let data = await response.json();
//   return {
//     props: { newsInfo: data }
//   }
// }