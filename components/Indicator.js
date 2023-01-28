import React from 'react'
import styles from '../styles/Indicator.module.css'
const Indicator = () => {
    function activeLink() {
        const list = document.querySelectorAll('.list');
        list.forEach((item) =>{item.classList.remove('active')});
        this.classList.add('active')
    }
    // const list = document.querySelectorAll('.list');
    // list.forEach((item) =>
    //     item.addEventListener('click', activeLink));
    return (
        <>
            <div className={styles.navigation}>
                <ul>
                    <li className={styles.active} style={{ "--clr": "#f44336" }}>
                        <a href="#">
                            <span className={styles.icon}>
                                <i className="fa fa-home" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li className={styles.list} style={{ "--clr": "#ffa117" }}>
                        <a href="#">
                            <span className={styles.icon}>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li className={styles.list} style={{ "--clr": "#0fc70f" }}>
                        <a href="#">
                            <span className={styles.icon}>
                                <i className="fa fa-crosshairs" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li className={styles.list} style={{ "--clr": "#2196f3" }}>
                        <a href="#">
                            <span className={styles.icon}>
                                <i className="fa fa-camera" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li >
                    <li className={styles.list} style={{ "--clr": "#b145e9" }}>
                        <a href="#">
                            <span className={styles.icon}>
                                <i className="fa fa-cog" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li >
                    <div className={styles.indicator}></div>
                </ul >
            </div >
        </>
    )
}

export default Indicator