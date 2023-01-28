import React from 'react';
import useSWR from 'swr';
import Card from './Card';
import styles from '../styles/CardBanner.module.css';
const CardBanner = () => {
    const { data, error, loading } = useSWR("http://localhost:5000/posts")
    return (
        <>
            <section className={styles.testimonials} id="testimonial">
                <div className={styles.title} id='white'>
                    <h2 className={styles.titleText}>Our <span>N</span>ews  Content</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <h2 className={styles.titleText}>Latest <span>N</span>ews  Content</h2>
                <div className={styles.content}>
                    {data?.reverse().slice(0, 6).map((val, i) => (
                        <Card val={val} i={i} />
                    ))}
                </div>
                <h2 className={styles.titleText}>Available <span>N</span>ews  Content</h2>
                <div className={styles.content}>
                    {data?.slice(0, 6).map((val, i) => (
                        <Card val={val} i={i} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default CardBanner