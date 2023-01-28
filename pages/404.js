import React from 'react'
import aeroplane from '../assets/images/aeroplane.png'
import styles from '../styles/P404.module.css'
import Image from 'next/image'
import Head from 'next/head'
const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={styles.error}>
        <div className={styles.sky}>
          <h2><span>4</span><span>0</span><span>4</span></h2>
          <div className={styles.grass}></div>
          <Image src={aeroplane} alt="aeroplane" className={styles.plane} style={{ maxWidth: "300px" }} />
        </div>
        <div className={styles.field}>
          <h2>Opps...looks like you got lost.</h2>
          <a href="/">Go Home</a>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
PageNotFound.getLayout = function PageLayout(page){
  return <>
  {page}
  </>
}