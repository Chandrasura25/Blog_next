import React from 'react'
import styles from '../styles/CardBanner.module.css'
import img from '../assets/images/1.jpg'
import Image from 'next/image'
import ReactReadMoreReadLess from "react-read-more-read-less";
import TimeAgo from 'timeago-react';
import useSWR from 'swr'
const CardBanner = () => {
    const { data, error, loading } = useSWR("http://localhost:5000/posts")
    return (
        <>
            <section className={styles.testimonials} id="testimonial">
                <div className={styles.title} id='white'>
                    <h2 className={styles.titleText}>Our <span>N</span>ews  Content</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.content}>
                    {data?.map((val, i) => (
                        <div className={styles.box} key={i}>
                            <div className={styles.imgBx}>
                                <Image src={img} alt='img' style={{ width: "100%" }} />
                            </div>
                            <div className={styles.text}>
                                <p><ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={""}
                                    readLessText={""}
                                >
                                    {val.description}
                                </ReactReadMoreReadLess></p>

                                <button className='btn'><a href={`/newsFeed?desc=${val.description}`}>Read More </a></button>
                                <span> <TimeAgo
                                    datetime={val.created_at}
                                /></span>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default CardBanner