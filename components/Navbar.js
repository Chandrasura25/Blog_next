import React,{useRef} from 'react'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const onHead = useRef()
    if (typeof window !== "undefined") {  
        window.addEventListener("scroll", function () { 
            // const header = document.querySelector(".header"); 
            onHead.current.classList.toggle('sticky', window.scrollY > 0)
            console.log(onHead.current)
        });
    }
    const toggleMenu = () => {
        const menuToggle = document.querySelector('.menuToggle') 
        const navigation = document.querySelector('.navigation') 
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }
    return (
        <>
            <header className={styles.header} ref={onHead}>
                <a href="#" className={styles.logo}>Blog<span>On</span></a>
                <div className={styles.menuToggle} onClick={toggleMenu}></div>
                <ul className={styles.navigation}>
                    <li><a href="#banner" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#menu" onClick={toggleMenu}>News</a></li>
                    <li><a href="#expert" onClick={toggleMenu}>Expert</a></li>
                    <li><a href="#testimonial" onClick={toggleMenu}>Testimonials</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar