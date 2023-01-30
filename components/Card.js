import React from 'react'
import styles from '../styles/CardBanner.module.css'
import Image from 'next/image'
import ReactReadMoreReadLess from "react-read-more-read-less";
import TimeAgo from 'timeago-react';

const Card = ({val,i}) => {
    return (
        <>
            <div className={styles.box} key={i}>
                <div className={styles.imgBx}>
                    <Image src={val.imageUrl} alt='img' width="300" height={300} blurDataURL={val.imageUrl} placeholder='blur' />
                </div>
                <div className={styles.text}>
                    <p><ReactReadMoreReadLess
                        charLimit={20}
                        readMoreText={""}
                        readLessText={""}
                    >
                        {val.description}
                    </ReactReadMoreReadLess></p>
                    <p><ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={""}
                        readLessText={""}
                    >
                        {val.body}
                    </ReactReadMoreReadLess></p>
                    <span className={styles.timeago}><TimeAgo
                        datetime={val.created_at}
                    /></span>
                    <button className='btn'><a href={`/newsFeed?desc=${val.description}`} style={{ color: '#fff' }}>Read More </a></button>
                </div>
            </div>
        </>
    )
}

export default Card