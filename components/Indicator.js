import React,{useRef} from 'react'
import styles from '../styles/Indicator.module.css'
const Indicator = () => {
    const navigation = useRef();
    const toggle = useRef();
    const toggling=()=>{
            toggle.current.classList.toggle('active')
            navigation.current.classList.toggle('active')
        }
    return (
        <>
            <div className={styles.navigation} ref={navigation} id='navigate'>
                <div className={styles.toggle} onClick={toggling} ref={toggle} id='togg'><span></span></div>
                <ul>
                    <li style={{"--i":"0"}}><a href="/">Home</a></li>
                    <li style={{"--i":"1"}}><a href="/newsPost">Post News</a></li>
                    <li style={{"--i":"2"}}><a href="#">Services</a></li>
                    <li style={{"--i":"3"}}><a href="#">Work</a></li>
                    <li style={{"--i":"4"}}><a href="#">Team</a></li>
                    <li style={{"--i":"5"}}><a href="/">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Indicator