import React from 'react';
import styles from '../styles/Comment.module.css';
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { ToastContainer, toast } from 'react-toastify';
const Comment = ({ news_ref }) => {
    const [comments, setcomments] = useState('')
    const { data, error, mutate } = useSWR(`http://localhost:5000/comments?news_ref=${news_ref}`, {
        refreshInterval: 1000
    })
    const send = () => {
        const message = comments;
        if (comments) {
            axios.post("http://localhost:5000/comments", { news_ref, message }).then((res) => {
                setcomments('')
                mutate();
            })
        }
        else {
            toast('Please enter the comment input')
        }
    }
    const delBtn = (delIndex) => {
        axios.delete(`http://localhost:5000/comments/${delIndex}`)
    }
    return (
        <>
            <div className={styles.body}>
                <h3>Comment Section</h3>
                {/* <ToastContainer /> */}
                <div className={styles.showBx}>
                    {data?.map((val, i) => (
                        <div className={styles.mesBx}>
                            <p>{val.message}</p>
                            <button onClick={() => delBtn(val.id)}>Delete</button>
                        </div>
                    ))}
                </div>
                <div className="formBx">
                    <div className={styles.inputBox}>
                        <input type="text" value={comments} onChange={(e) => setcomments(e.target.value)} />
                        <button onClick={send}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment