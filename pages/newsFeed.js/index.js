import React from 'react'
import Head from 'next/head'
import styles from '../../styles/NewsFeed.module.css'
import CategoryNews from '../../components/CategoryNews';
const NewsFeed = () => {
  return <>
    <Head>
      <title>News Feed</title>
    </Head>
    <div className='container-fluid'>
      <div className="side">
        <input type="checkbox" name="" className={styles.check} id='check' />
        <label for="check" className={styles.label}>
          <i className="fa fa-bars" aria-hidden="true" id="btn"></i>
          <i className="fa fa-times" aria-hidden="true" id="cancel"></i>
        </label>
        <div className={styles.sidebar}>
          <header>Menu</header>
          <ul>
            <li><a href="#"><i className="fa fa-qrcode" aria-hidden="true"></i>Dashboard</a></li>
            <li><a href="#"><i className="fa fa-link" aria-hidden="true"></i>Shortcuts</a></li>
            <li><a href="#"><i className="fa fa-steam" aria-hidden="true"></i>Overview</a></li>
            <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>Events</a></li>
            <li><a href="#"><i className="fa fa-question-circle" aria-hidden="true"></i>About</a></li>
            <li><a href="#"><i className="fa fa-sliders" aria-hidden="true"></i>Services</a></li>
            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Contact</a></li>
          </ul>
        </div>
      </div>
      <section className={styles.section}>
        <header>
          <a href="/" className={styles.logo}>Blog<span>On</span></a>
        </header>
        <CategoryNews />
      </section>
    </div>
  </>
}
export default NewsFeed