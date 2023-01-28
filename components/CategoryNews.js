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
                    <p>News description</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.previewBox}>
                        <div className={styles.imageBox}>
                            <Image src={img} alt="" width={'100%'} />
                        </div>
                        <div className={styles.details}>
                            <span className={styles.title}>News Body</span>
                            <span className={styles.icon}><i class="fa fa-clock-o" aria-hidden="true"></i> time</span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CategoryNews