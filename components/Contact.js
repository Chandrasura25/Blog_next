import React from 'react'
import styles from '../styles/contact.module.css';
const Contact = () => {
    return (
        <>
            <section className={styles.contact} id="contact">
                <div className={styles.title} id='whit'>
                    <h2 className={styles.titleText}>Our <span>C</span>ontacts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.contactForm}>
                    <h3>Send Message</h3>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className={styles.inputBox}>
                        <textarea></textarea>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact