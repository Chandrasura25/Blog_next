import React from 'react'
import { PulseLoader } from 'react-spinners'
import useSWR from 'swr';
import Head from 'next/head'
const NewsTable = () => {
    const { data, error, loading } = useSWR("http://localhost:5000/posts")
    
    if (!data) {
        return (
            <div className="text-center mt-5">
                <PulseLoader size={30} color='#20ae26' />
            </div>
        )
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
            </Head>
            <div className="container">
                <div className="mt-5">
                    News <span className="bg-secondary text-white p-3">{data?.length}</span>
                </div>
                <table className='table table-hovered table-striped mt-5 table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>S/N</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Body</th>
                            <th>Desc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((val, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{val.new_cat}</td>
                                    <td>{val.imageUrl}</td>
                                    <td>{val.body}</td>
                                    <td>{val.description}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NewsTable