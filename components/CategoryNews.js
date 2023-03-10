import React from 'react'
import styles from '../styles/news.module.css'
import ReactReadMoreReadLess from "react-read-more-read-less";
import Image from 'next/image';
import TimeAgo from 'timeago-react';
const CategoryNews = ({ newsInfo }) => {
    return (
        <>
            {newsInfo?.map((val, i) => (
                <section className={styles.news} key={i}>
                    <div className={styles.titleN}>
                        <h2 className={styles.titleText}>News <span>C</span>ontent</h2>
                        <p>{val.description}</p>
                    </div>
                    {/* <div className={styles.box}>
                        <div className={styles.previewBox}>
                            <div className={styles.imageBox}>
                                <img src={val.imageUrl} alt="image"
                                />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.title}>
                                    <ReactReadMoreReadLess
                                        charLimit={200}
                                        readMoreText={"Read more ▼"}
                                        readLessText={"Read less ▲"}
                                    >
                                        {val.body}</ReactReadMoreReadLess>
                                </span>
                                <span className={styles.icon}><i class="fa fa-clock-o" aria-hidden="true"></i><TimeAgo
                                    datetime={val.created_at} /></span>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.box}>
                        <div className={styles.figure}>
                            <img src={val.imageUrl} alt="image" />
                                <div className={styles.caption}>
                                    <div className={styles.about}>
                                        <h2>{val.description}</h2>
                                        <p> <ReactReadMoreReadLess
                                        charLimit={200}
                                        readMoreText={"Read more ▼"}
                                        readLessText={"Read less ▲"}
                                    >
                                        {val.body}</ReactReadMoreReadLess></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default CategoryNews