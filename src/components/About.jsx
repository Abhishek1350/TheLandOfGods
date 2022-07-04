import React, { useEffect } from 'react'
import swal from 'sweetalert'
import './css/about.css'


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "About - The Land Of Gods"
  }, [])

  return (
    <>
      <section className="about-home">
        <div className="home__container">
          <h1 className="heading about__heading">Abhishek</h1>
          <p className="about__description">Independent Web Developer</p>
          <a href="https://imabhishek.me" rel="noreferrer" className="about-btn">Know More <i className="fa-solid fa-caret-down"></i></a>
        </div>
      </section>
    </>
  )
}

export default About
