import React from 'react'
import styles from '../styles/CardBanner.module.css'
import img from '../assets/images/1.jpg'
import Image from 'next/image'

const CardBanner = () => {
    return (
        <>
            <section className={styles.testimonials} id="testimonial">
                <div className={styles.title} id='white'>
                    <h2 className={styles.titleText}>Our <span>N</span>ews  Content</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.content}>
                    {[1, 2, 3, 4, 5,6].map((val, i) => (
                        <div className={styles.box} key={i}>
                            <div className={styles.imgBx}>
                                <Image src={img} alt='img' style={{ width: "100%" }} />
                            </div>
                            <div className={styles.text}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad id cumque blanditiis! Doloribus officia debitis, illum distinctio facilis ducimus, ipsa harum ea dicta voluptas consequatur ullam, porro nemo delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, odio. Lorem, ipsum dolor.</p>
                                <button className='btn'>Read More</button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default CardBanner