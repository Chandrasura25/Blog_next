import React from 'react'
import { RingLoader } from 'react-spinners'
import useSWR from 'swr';
import Head from 'next/head'
import styles from '../styles/Table.module.css'
const NewsTable = () => {
    const { data, error, loading } = useSWR("http://localhost:5000/posts")

    if (!data) {
        return (
            <div className={styles.loader}>
                <RingLoader size={100} color='#ff0157' />
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>News Table</title>
            </Head>
            <section className={styles.section}>
                <div className={styles.leftBox}>
                    <div className={styles.content}>
                        <h1>News And Posts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi ducimus fugit temporibus, sed, eius quos quisquam iste ut sequi quasi mollitia laudantium enim quod voluptas. Alias tempora magnam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, praesentium.</p>
                    </div>
                </div>
                <div className={styles.events}>
                    <ul>
                        {
                            data?.map((val, i) => (
                                <li>
                                    <div className={styles.time}>
                                        <h2>{i + 1}<br /><span>{val.created_at}</span></h2>
                                    </div>
                                    <div className={styles.details}>
                                        <h3>{val.description}</h3>
                                        <p>{val.body}</p>
                                        <a href="#">View Details</a>
                                    </div>
                                    <div style="clear: both;"></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NewsTable