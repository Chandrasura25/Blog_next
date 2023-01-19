import React from 'react'
import img from '../../assets/images/1.jpg'
import Image from 'next/image'
const NewsFeed = () => {
  return <>
    <div classname='container-fluid'>
      <div className='col-md-7'>
        <div>
          <Image src={img} alt='img' />
        </div>
      </div>
      <div className='col-md-3'></div>
    </div>
  </>
}
export default NewsFeed