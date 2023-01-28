import React from 'react'
import useSWR from 'swr';
import CardBanner from '../components/CardBanner';
import PulseLoader from "react-spinners/PulseLoader";

const latestNews = () => {
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
    {data?.reverse().slice(0,3).map((val,i)=>(
     <CardBanner val={val} i={i} />
    ))}
    </>
  )
}

export default latestNews