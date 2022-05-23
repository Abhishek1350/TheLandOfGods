import React, {useEffect} from 'react'
import "./css/topplaces.css"

const TopPlaces = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <section className="top-places">
        <div className="home__container">
          <h1 className="heading topplaces__heading">Lets Explore Some</h1>
          <p className="heading topplaces__description">Top Places</p>
          <a href="#top-places" className="explore-btn">Let's Go
            <i className="fa-solid fa-location-dot"></i></a>
        </div>
      </section>


      <section className="top-places-container" id="top-places">
        <h2 className="heading">
          Top Places In <br />
          <span>The Land Of Gods</span>
        </h2>

        <div className="top-places-grid-wrapper">

          <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/khajjiar.jpeg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
            <p className="paragraph">Khajjiar</p>
            <span></span>
            <a href="./top places/khajjiar.html">Know More</a>
          </div>

          <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/chamba.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
            <p className="paragraph">Chamba</p>
            <span></span>
            <a href="./top places/chamba.html">Know More</a>
          </div>
          
          <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/bharmour.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Bharmour</p>
                <span></span>
                <a href="./top places/bharmour.html">Know More</a>
            </div>
            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/dalhousie.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Dalhousie</p>
                <span></span>
                <a href="./top places/dalhousie.html">Know More</a>
            </div>
            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/manimahesh.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Manimahesh</p>
                <span></span>
                <a href="./top places/manimahesh.html">Know More</a>
            </div>

            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/kalatop.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Kalatop</p>
                <span></span>
                <a href="./top places/kalatop.html">Know More</a>
            </div>

            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/bhalei.jpeg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Bhalei Mata Temple</p>
                <span></span>
                <a href="./top places/bhalei.html">Know More</a>
            </div>
            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/tissa.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Tissa</p>
                <span></span>
                <a href="./top places/tissa.html">Know More</a>
            </div>
            
            <div className="top-places-box" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(../images/topplaces/pangi.jpg)", backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
                <p className="paragraph">Pangi</p>
                <span></span>
                <a href="./top places/pangi.html">Know More</a>
            </div>



        </div>
      </section>
    </>
  )
}

export default TopPlaces
