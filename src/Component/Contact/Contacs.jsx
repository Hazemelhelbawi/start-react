import React from 'react'
import './Contact.css'
export default function Contacs() {
  return ( <>
  <section id='contact'>
  <div className=' py-5 text-center'>
    <div className=' contact-info py-4'>

    <h1 className='fw-bold '>CONTACT ME</h1>

          <div className='d-flex justify-content-center'>
          <div className='brdr'></div>
        <i className="iconsLine fa-solid fa-star fs-3  "></i>
        <div className='brdr'></div>

          </div>
    </div>
  <div className='mb-3'>
  <input type="text" class="form-control w-50 m-auto border-bottom mb-2 pb-4 border border-0 rounded-0 fs-4" placeholder="Name" />
  <input type="email" class="form-control w-50 m-auto border-bottom mb-2 pb-4  border border-0 rounded-0 fs-4" placeholder="Email Address" />
  <input type="Number" class="form-control w-50 m-auto border-bottom mb-2 pb-4 border border-0 rounded-0 fs-4" placeholder="Phone Number" />
 <textarea type="text" class="form-control w-50 m-auto mb-6 border border-0 rounded-0 fs-4" placeholder="Message" />

  </div>
  <button type="button" class="btn btn-success py-4 px-5 fw-bold  ">Send</button>





  </div>
  <div className='contactFooter'>
  <div className="container">
        <div className="row">
          <div className="col-md-4 py-5 text-center">
            <h3 className='pb-4'>LOCATION</h3>
            <h5 className='w-75 m-auto'>2215 John Daniel DriveClark, MO 65243</h5>
          </div>
          <div className="col-md-4 py-5 text-center">
            <h3 className='pb-4'>AROUND THE WEB</h3>
            <div className='d-flex  justify-content-evenly'>
            <i class="fa-brands fs-5  text-center pt-2 rounded-circle border border-light border-2 fa-facebook-f"></i>
            <i class="fa-brands fs-5  text-center pt-2 rounded-circle border border-light border-2 fa-twitter"></i>
            <i class="fa-brands fs-5  text-center pt-2 rounded-circle border border-light border-2 fa-linkedin-in"></i>
            <i class="fa-brands fs-5  text-center pt-2 rounded-circle border border-light border-2 fa-dribbble"></i>
            </div>
          </div>
          <div className="col-md-4 py-5 text-center">
            <h3 className='pb-4'>ABOUT FREELANCER</h3>
            <h5 className=' m-auto'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</h5>
          </div>
        </div>
      </div>
  </div>


      </section>
      </>
    )
}
