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
                    <div className={styles.box}>
                        <div className={styles.previewBox}>
                            <div className={styles.imageBox}>
                                <Image src={val.imageUrl} alt="" width={500} height={400} blurDataURL={val.imageUrl} placeholder='blur' />
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
                    </div>
                </section>
            ))}
        </>
    )
}

export default CategoryNews