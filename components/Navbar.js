import React from 'react'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const toggleMenu = () => {
        const menuToggle = document.querySelector('#menuToggle') 
        const navigation = document.querySelector('#navigation') 
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }
    return (
        <>
            <header className={styles.header}>
                <a href="#" className={styles.logo}>Blog<span>On</span></a>
                <div className={styles.menuToggle} id='menuToggle' onClick={toggleMenu}></div>
                <ul className={styles.navigation} id='navigation'>
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/newsTable" onClick={toggleMenu}>News Table</a></li>
                    <li><a href="#testimonial" onClick={toggleMenu}>News</a></li>
                    <li><a href="/newsPost" onClick={toggleMenu}>Post News</a></li>
                    <li><a href="latestNews" onClick={toggleMenu}>Latest News</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar