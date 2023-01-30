import React from 'react'
import useSWR from 'swr';
import Card from '../components/Card';
import PulseLoader from "react-spinners/PulseLoader";
import style from '../styles/Table.module.css'
import styles from '../styles/CardBanner.module.css';
const latestNews = () => {
  const { data, error, loading } = useSWR("http://localhost:5000/posts")

  if (!data) {
    return (
      <div className={style.loader}>
        <PulseLoader size={100} color='#20ae26' />
      </div>
    )
  }
  return (
    <>
      <div>
        <div className={styles.title} id='white'>
          <h2 className={styles.titleText}>Our <span>N</span>ews  Content</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.content}>
          {data?.reverse().map((val, i) => (
            <Card val={val} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default latestNews