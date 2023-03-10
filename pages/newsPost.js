import React, { useState, useRef } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/newsPost.module.css';
import Head from 'next/head'
import { useRouter } from 'next/router';

const NewsPost = () => {
    const [imageUrl, setimageUrl] = useState('')
    const [description, setdescription] = useState('')
    const [body, setbody] = useState('')
    const [loader, setloader] = useState(false)
    const cat_ref = useRef();
   const router = useRouter()
    const btnSend = () => {
        let created_at=new Date().toLocaleString()
        const new_cat = cat_ref.current.value;
        const url = 'http://localhost:5000/posts'
        // let news_ref = Math.floor(Math.random() * 1000000000)
        const news_ref = crypto.randomUUID();
        if (imageUrl && description && body && new_cat) {
            setloader(true)
            const details = { imageUrl, description, body, new_cat, news_ref,created_at }
            axios.post(url, details).then((res) => {
                if (res.data) {
                    setloader(false)
                    setbody('')
                    setdescription('')
                    setimageUrl('')
                    toast("Sent Successfully");
                    router.push('/newsTable')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            toast('Please enter all input')
        }
    }
    return (
        <>
        <Head>
            <title>Post A News</title>
        </Head>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.drop}>
                        <div className={styles.content}>
                            <h2>News Form</h2>
                            <ToastContainer />
                            <div className={styles.form}>
                                <div className={styles.inputBox}>
                                    <input type="text" name="" placeholder='Image Url' id="" onChange={(e) => setimageUrl(e.target.value)} value={imageUrl} />
                                </div>
                                <div className={styles.inputBox}>
                                    <select name="" className='select' id="" ref={cat_ref}>
                                        <option value="Category">Category</option>
                                        <option value="Education">Education</option>
                                        <option value="Politics">Politics</option>
                                        <option value="Animals">Animals</option>
                                        <option value="Decorations">Decorations</option>
                                        <option value="Flowers">Flowers</option>
                                    </select>
                                </div>
                                <div className={styles.inputBox}>
                                    <textarea name="" id="" onChange={(e) => setdescription(e.target.value)} value={description} className='form-control' placeholder='News Description' style={{ resize: 'none' }}></textarea>
                                </div>
                                <div className={styles.inputBox}>
                                    <textarea name="" id="" onChange={(e) => setbody(e.target.value)} value={body} className='form-control' placeholder='Type the news body here' style={{ resize: 'none' }}></textarea>
                                </div>
                                    <ClipLoader loading={loader} color='blue' size={50} />
                                <div className={styles.inputBox}>
                                    <input type="submit" name="" value='Add News' id="" onClick={btnSend} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/newsTable" className={styles.btns}>News Table</a>
                    <a href="/" className={styles.btns} id="signup">Home</a>
                </div>
            </div>
        </>
    )
}

export default NewsPost