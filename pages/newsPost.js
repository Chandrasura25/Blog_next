import React, { useState, useRef } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewsPost = () => {
    const [imageUrl, setimageUrl] = useState('')
    const [description, setdescription] = useState('')
    const [body, setbody] = useState('')
    const [loader, setloader] = useState(false)
    const cat_ref = useRef();

    const btnSend = () => {
        const new_cat = cat_ref.current.value;
        const url = 'http://localhost:5000/posts'
        let news_ref = Math.floor(Math.random() * 1000000000)
        if (imageUrl && description && body && new_cat) {
            setloader(true)
            const details = { imageUrl, description, body, new_cat, news_ref }
            axios.post(url, details).then((res) => {
                if (res.data) {
                    console.log(res);
                    setloader(false)
                    setbody('')
                    setdescription('')
                    setimageUrl('')
                    toast("Sent Successfully");
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            alert('Please enter all input')
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12 mx-auto shadow-sm mt-5">
                        <h3 className="text-uppercase text-center">News Form</h3>
                        <ToastContainer />
                        <section className="rounded-4 p-2">
                            <div className="d-flex justify-content-between gap-2">
                                <div className="col-6">
                                    <input type="text" placeholder='Image Url' className="form-control" onChange={(e) => setimageUrl(e.target.value)} value={imageUrl} />
                                    <select name="" className='form-select mt-3' id="" ref={cat_ref}>
                                        <option value="Category">Category</option>
                                        <option value="Education">Education</option>
                                        <option value="Politics">Politics</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <textarea name="" id="" onChange={(e) => setdescription(e.target.value)} value={description} className='form-control' placeholder='News Description' style={{ resize: 'none' }}></textarea>
                                </div>
                            </div>
                            <div className="mt-3">
                                <textarea name="" id="" onChange={(e) => setbody(e.target.value)} value={body} className='form-control' placeholder='Type the news body here' cols="30" rows="10" style={{ resize: 'none' }}></textarea>
                            </div>
                            <div className="mx-auto mt-3">
                                <ClipLoader loading={loader} color='blue' size={50} />
                                <button className="btn btn-success px-3" onClick={btnSend} >Add News</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPost