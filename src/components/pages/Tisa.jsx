import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Tisa = () => {
    useEffect(() => {
        document.title = "Top Places Tisa"
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(../../images/topplaces/tissa.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Tisa</h1>
                    <p className="paragraph home__description">The Heaven</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Tisa</p>
                        <p className="paragraph">
                            According to Census 2011 information the location code or village code of Tisa village is 006935.
                            Tisa village is located in Chaurah tehsil of Chamba district in Himachal Pradesh, India. It is
                            situated 69km away from district headquarter Bhanjraru. Bhanjraru is the sub-district headquarter of
                            Tisa village. As per 2009 stats, Tissa I is the gram panchayat of Tisa village.

                            The total geographical area of village is 218 hectares. Tisa has a total population of 796 peoples,
                            out of which male population is 418 while female population is 378. There are about 169 houses in
                            tisa village. Pincode of tisa village locality is 176316.

                            When it comes to administration, Tisa village is administrated by a sarpanch who is elected
                            representative of the village by the local elections. As per 2019 stats, Tisa village comes under
                            Churah assembly constituency & Kangra parliamentary constituency. Chamba is nearest town to tisa
                            village for all major economic activities.
                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/tissa.jpg" alt="tissa" width="350" className="place-overview-img" />
                    </div>
                </div>
                <hr />

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../../images/topplaces/tisa.jpg" alt="tissa" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Gandasru Mahadev </p>
                        <p className="paragraph">
                            Located in the north of Upper Churah, there is a unique place in the skyscraper chain of Nosradhar,
                            a wonderful place for Rudra Lord, Gandasru Mahadev. It is about 3,470 meters (11,380 ft) in height.
                            This area is spread over an area of about 2km. There is a green grass field on both sides of the
                            lake and on the north side, the pavement of different types of pavements is laid as if the tile is
                            laid.

                            There are a few small khilas on the other side of Dal Lake. It is also more surprising to walk on
                            those rows, as if walking on a soft mattress. There are many types of miracles present in this area,
                            according to the direct-sighting. There is another dal approximately 1½km which is absolutely black
                            and is very scary. It is called Mahakali Dal. The mountains of the northeast of Dal are exactly like
                            Shivlinga. In the north-west of this dal, there are two mountain squares which are connected with
                            each other, known as ‘sin-virtue’.
                        </p>
                    </div>
                </div>
            </section>

            <div className="place-overview-btn">
                <h3 className="heading">Next Places</h3>
                <div className="btns">
                    <Link to="/topplaces/pangi" className="explore-btn">Pangi</Link>
                </div>
            </div>
        </>
    )
}

export default Tisa