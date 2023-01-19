import React from 'react'

const NewsPost = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12 mx-auto shadow-sm mt-5">
                        <h3 className="text-uppercase text-center">News Form</h3>
                        <section className="rounded-4 p-2">
                            <div className="d-flex justify-content-between gap-2">
                                <div className="col-6">
                                    <input type="file" placeholder='Image Url' className="form-control" />
                                   <select name="" className='form-select mt-3' id="">
                                    <option value="Category">Category</option>
                                    <option value="Education">Education</option>
                                    <option value="Politics">Politics</option>
                                   </select>
                                </div>
                                <div className="col-6">
                                    <textarea name="" id="" className='form-control' placeholder='News Description' style={{ resize: 'none' }}></textarea>
                                </div>
                            </div>
                            <div className="mt-3">
                                <textarea name="" id="" className='form-control' placeholder='Type the news body here' cols="30" rows="10" style={{ resize: 'none' }}></textarea>
                            </div>
                            <div className="mx-auto mt-3">
                                <button className="btn btn-success px-3">Add News</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPost