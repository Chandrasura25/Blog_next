import React from 'react'
import img from '../assets/images/1.jpg'
import Image from 'next/image'
const Newscard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className='col-11 mx-auto'>
          <div className='row gap-3'>
            {[1, 2, 3, 4, 5].map((val, i) => ( 
              <div className="card mt-3 col-lg-3 col-md-7" style={{ width: "18rem" }} key={i}>
                <Image src={img} className="card-img-top" alt="..." style={{ height: '250px'}} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Newscard