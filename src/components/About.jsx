import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import './css/about.css'


const About = () => {
  const [inputData, setInputData] = useState({ name: "", email: "", phone: "", message: "" })

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "About - The Land Of Gods"
  }, [])

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputData({ ...inputData, [name]: value })
  }

  const sendMail = () => {
    const { name, email, phone, message } = inputData
    if (!name || !email || !phone || !message) {
      return swal("Opps!", " something went wrong!", "error");
    }
    
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: process.env.REACT_APP_USER_NAME,
      Password: process.env.REACT_APP_PASSWORD,
      To: process.env.REACT_APP_TO_EMAIL,
      From: process.env.REACT_APP_FROM_EMAIL,
      Subject: "New Query",
      Body: "Name : " + name
        + "<br> Email : " + email
        + "<br> Phone Number : " + phone
        + "<br> message : " + message
    }).then(
      (message) => {
        if (message === "OK") {
          swal("Thanks!", " " + inputData.name + ". Your message is delivered. We will contact you soon.", "success");
          setInputData({ name: "", email: "", phone: "", message: "" })
        }
        else {
          swal("Opps!", " " + inputData.name + " something went wrong!", "error");
          console.error(message);
        }
      });
  };

  return (
    <>
      <section className="about-home">
        <div className="home__container">
          <h1 className="heading about__heading">Abhishek</h1>
          <p className="about__description">Independent Web Developer</p>
          <a href="#story" className="about-btn">Know More <i className="fa-solid fa-caret-down"></i></a>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-container" style={{ background: "#e3e3ec" }}>
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

          <form >
            <input type="text" name="name" onChange={handleChange} value={inputData.name} placeholder="Your Name :" required />
            <input type="email" name="email" onChange={handleChange} value={inputData.email} placeholder="Email Id :" required />
            <input type="number" name="phone" onChange={handleChange} value={inputData.phone} placeholder="Phone Number :" required />
            <textarea name="message" onChange={handleChange} value={inputData.message} rows="4" placeholder="Message :" required></textarea>
            <button type="button" onClick={sendMail} >Send  <i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </section>


    </>
  )
}

export default About