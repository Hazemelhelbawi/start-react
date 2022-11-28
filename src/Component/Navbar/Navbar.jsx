import React, { useState } from 'react'
import { Link ,NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {

 let [isActive, setIsActive]=useState(false);
//  const changeBg=()=>{
//   setIsActive(current => !current);
//  }

 
  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid px-5">
    <Link className="navbar-brand fs-2" to="">START REACT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
<<<<<<< HEAD
          className="nav-link"  aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink   className="nav-link"  to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink  className="nav-link"  to="contact">CONTACT</NavLink>
=======
          className="nav-link" activeClassName="active" aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink   className="nav-link" activeClassName="active" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink  className="nav-link" activeClassName="active" to="contact">CONTACT</NavLink>
>>>>>>> 09bec09309e393c8d77bb6980fd0266cbca5769d
        </li>
      </ul>

    </div>
  </div>
</nav>
      
      
      
      </>

    )
}
