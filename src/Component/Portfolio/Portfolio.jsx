import React, { useState } from 'react'
import './Portfolio.css'
import Images from '../../assests/Images/index.jsx';



export default function portfolio() {
  function getimg(){
console.log(Image.src);
  }

  let photos = Images.map((elem, index) => {
    console.log({elem})
    return elem.src
  })
  console.log(photos);

  return (
    <>
    <section id='portfolio'>
      <div className='text-center pt-5 headerPortfolio'>
        
        <h1>PORTFOLIO</h1>
          <div className='d-flex justify-content-center'>
          <div className='brdr'></div>
        <i className="iconsLine fa-solid fa-star fs-3  "></i>
        <div className='brdr'></div>

          </div>
        </div>
      <div className="container py-5">
        <div className="row">            
          { Images.map(({id, src}) =>
          <div className="col-md-4">
          <img key={id} src={src} className='w-100' onClick={()=>getimg()}  data-bs-toggle="modal" data-bs-target="#exampleModal" />
         


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title text-center ms-auto" id="exampleModalLabel">TASTY CAKE</h3>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
      <img key={id} src={src} className='w-100'  />

      </div>
      <div className="modal-footer text-center m-auto">
        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" className="btn btn-success m-auto" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
         
          </div>
          )}     

        </div>
      </div>

    </section>
    </>
  )
}

