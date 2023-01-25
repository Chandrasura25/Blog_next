import React from 'react'
import styles from '../styles/Banner.module.css'
const Banner = () => {
  return (
    <>
    <section className={styles.banner} id="banner">
      <div className={styles.content}>
        <h2>Readers never lack</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          commodi provident pariatur magnam dolore blanditiis aliquam explicabo
          error facilis quibusdam quia doloribus officiis nesciunt adipisci
          delectus beatae, eos, consequuntur dolor?
        </p>
        <a href="#" className="btn">Our News</a>
      </div>
    </section>
    </>
  )
}

export default Banner