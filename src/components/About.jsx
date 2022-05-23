import React, { useEffect } from 'react'
import swal from 'sweetalert'
import './css/about.css'


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <section className="about-home">
        <div className="home__container">
          <h1 className="heading about__heading">Abhishek</h1>
          <p className="about__description">Independent Web Developer</p>
          <a href="#story" className="about-btn">Know More
            <i className="fa-solid fa-caret-down"></i></a>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-container" style={{background: "#e3e3ec"}}>
          <h2 className="heading">
            How I Learned ?
          </h2>
          <p className="paragraph">
            Started on June 2021 during Lockdown, All alone without any teacher or mentor. At that point I didn't
            know anything about Web development. So I grabbed that opportunity of learning something new in
            Lockdown.
            It was an amazing journey for me. I have learned so many things from the Internet. Now I am capable of
            making websites all by myself.
          </p>
          <hr />
        </div>

        <div className="contact__container" id="contact">
          <h2 className="heading">
            Contact Me
          </h2>
          <p className="paragraph">
            Available For Freelancing
          </p>

          <form>
            <input type="text" id="name" placeholder="Your Name :" required />
            <input type="email" name="email" id="email" placeholder="Email Id :" required />
            <input type="number" name="phone" id="phone" placeholder="Phone Number :" required />
            <textarea name="message" id="message" rows="4" placeholder="Message :" required></textarea>
            <button type="button" onClick={()=>swal ( "Sorry" ,  "This Form Is Not Working Yet!" ,  "error" )}>Send <i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </section>


    </>
  )
}

export default About