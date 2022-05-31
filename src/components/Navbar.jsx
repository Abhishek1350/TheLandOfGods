import React, { useState } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [navClassList, setNavClassList] = useState("")
  const [menuClassList, setMenuClassList] = useState("")
  const [menuBtnClassList, setMenuBtnClassList] = useState("")

  const body = document.querySelector("body");

  const openNav = () => {
    setMenuClassList("active")
    setMenuBtnClassList("hide")
    body.classList.add("disabledScroll");
  }

  const closeNav = () => {
    setMenuClassList("")
    setMenuBtnClassList("")
    body.classList.remove("disabledScroll");
  }
  
  window.onscroll = () => {
    window.scrollY > 20 ? setNavClassList("sticky") : setNavClassList("")
  }

  return (
    <>
      <nav className={`navbar ${navClassList}`}>
        <div className="nav-content">
          <div className="logo"><Link to="/"><img src="./logo.png" alt="chamba" /> The Land Of Gods</Link></div>
          <ul className={`nav-links ${menuClassList}`}>
            <div className="icon close-btn" onClick={() => { closeNav() }}>
              <i className="fas fa-times"></i>
            </div>
            <div className="logo mobile-logo" onClick={() => { closeNav() }}><Link to="/"><img src="./logo.png" alt="chamba" /> The Land Of Gods</Link></div>
            <li onClick={() => { closeNav() }}><Link to="/">Home</Link></li>
            <li onClick={() => { closeNav() }}><Link to="/topplaces">Top Places</Link></li>
            <li onClick={() => { closeNav() }}><Link to="/about">About</Link></li>
          </ul>
          <div className={`icon menu-btn ${menuBtnClassList}`} onClick={() => { openNav() }}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar