import React from 'react'
import styles from '../styles/news.module.css'
import img from '../assets/images/1.jpg';
import Image from 'next/image'
const CategoryNews = () => {
    return (
        <>
            <section className={styles.news}>
                <div className={styles.titleN}>
                    <h2 className={styles.titleText}>News <span>C</span>ontent</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.previewBox}>
                            <div className={styles.details}>
                                <span className={styles.title}>Image Category: <p>Not defined</p></span>
                                <span className={styles.icon}><i class="fa fa-times" aria-hidden="true"></i></span>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={img} alt="" width={'100%'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryNews