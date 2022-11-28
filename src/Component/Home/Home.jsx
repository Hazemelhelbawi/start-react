import React from 'react'
import './Home.css'
import HomeImage from '../../assests/Images/avataaars.svg'
export default function Home() {
  return (
    <div className='homePage w-100 vh-100 bg-info'>
      <div className=' d-flex  justify-content-center align-item-center m-auto text-center'>
        <div className='homeImage '>
          <img src={HomeImage} className="image-Home w-50 " alt="" />
          <div className='text-center text-white homeInfo '>
          <h1 className='text-white pt-3'>START REACT</h1>
          <div className='d-flex justify-content-center pb-3'>
          <div className='brdrr'></div>
        <i className="iconsLine fa-solid fa-star fs-3 text-white "></i>
        <div className='brdrr'>

        </div>

          </div>
          <h4>Graphic Artist - Web Designer - Illustrator</h4>

          </div>

        </div>
      </div>
    </div>
  )
}

