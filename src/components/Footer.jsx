import React from 'react'
import "./css/footer.css"

const Footer = () => {
  return (
    <footer className="footer" >
      <p className="paragraph" style={{color:"#f8f8f8"}}>Designed With <i className="fa-brands fa-react" style={{color:"cyan"}}></i></p>
    <p className="paragraph" style={{color:"grey"}}>© AB 2022</p>
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/abhishek-bhardwaj-76b9a721b" target="_blank" rel="norel"
            className="social__icon--link"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/abhishek1350" className="social__icon--link" target="_blank" rel="norel"><i
                className="fab fa-twitter"></i></a>
    </div>
</footer>
  )
}

export default Footer