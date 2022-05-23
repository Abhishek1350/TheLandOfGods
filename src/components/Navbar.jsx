import React,{useState} from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

const [navClassList, setNavClassList] = useState("")
  
  // const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");
  const body = document.querySelector("body");

  const openNav = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
  }

  const closeNav = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
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
          <ul className="nav-links">
            <div className="icon close-btn" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </div>
            <div className="logo mobile-logo" onClick={closeNav}><Link to="/"><img src="./logo.png" alt="chamba" /> The Land Of Gods</Link></div>
            <li onClick={closeNav}><Link to="/">Home</Link></li>
            <li onClick={closeNav}><Link to="/pages/topplaces">Top Places</Link></li>
            <li onClick={closeNav}><Link to="/about">About</Link></li>
          </ul>
          <div className="icon menu-btn" onClick={openNav}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar