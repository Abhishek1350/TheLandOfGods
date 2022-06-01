import React, { useEffect } from 'react'
import "./css/topplaces.css"
import topPlacesData from './topPlacesData'
import { Link } from 'react-router-dom'

const TopPlaces = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Top Places - The Land Of Gods"
  }, [])

  return (
    <>
      <section className="top-places">
        <div className="home__container">
          <h1 className="heading topplaces__heading">Lets Explore Some</h1>
          <p className="heading topplaces__description">Top Places</p>
          <a href="#top-places" className="explore-btn">Let's Go <i className="fa-solid fa-location-dot"></i></a>
        </div>
      </section>


      <section className="top-places-container" id="top-places">
        <h2 className="heading">
          Top Places In <br />
          <span>The Land Of Gods</span>
        </h2>

        <div className="top-places-grid-wrapper">

          {
            topPlacesData.map((elem) => {
              return (
                <div className="top-places-box" key={elem.id} style={{
                  backgroundImage: elem.backgroundImage,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                  <p className="paragraph">{elem.placeName}</p>
                  <span></span>
                  <Link to={elem.slug}>Know More</Link>
                </div>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default TopPlaces
