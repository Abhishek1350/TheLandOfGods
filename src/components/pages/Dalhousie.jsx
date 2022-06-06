import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Dalhousie = () => {
    useEffect(() => {
        document.title = "Top Places Dalhousie"
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(../images/topplaces/dalhousie.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Dalhousie</h1>
                    <p className="paragraph home__description">The Awesome Hill Station</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>
                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Dalhousie</p>
                        <p className="paragraph">
                            Dalhousie is a hill station full of colonial charm that holds lingering echoes of the Raj. Spread
                            out over five hills (Kathlog Potreys, Tehr/a, Bakrota & Bolun) the town is named after the 19th
                            century British governor general Lord Dalhousie. The town’s varying altitude shades it with a
                            variety of vegetation that includes stately grooves of pines, deodars, oaks and flowering
                            rhododendrons. Rich in colonial architecture, the town preserves some beautiful churches. Its
                            marvelous forest trails overlook vistas of wooded hills, water falls, springs and rivulets. Like a
                            silver snake finding its way out of the mountains, the twists and turns of river Ravi are a treat to
                            watch from many vantage points.
                        </p>
                    </div>

                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/dalhousie2.jpg" alt="dalhousie" width="350" className="place-overview-img" />
                    </div>

                </div>
                <hr />

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/dalhousie.jpg" alt="dalhousie" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}> </p>
                        <p className="paragraph">
                            There are also magnificent views of Chamba valley and the mighty
                            Dhauladhar range with its awe-inspiring snow covered peaks filling an entire horizon. A veneer of
                            Tibetan culture has added a touch of the exotic to this serene resort and along road sides are huge
                            rocks carved in low relief painted in the Tibetan style. By road Dalhousie is 555 Km from Delhi, 45
                            KM from Chamba and the closest railhead at Pathankot is 85 KM away.
                        </p>
                    </div>
                </div>

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/manimahesh" className="explore-btn">Manimahesh</Link>
                        <Link to="/topplaces/kalatop" className="explore-btn">Kalatop</Link>
                        <Link to="/topplaces/bhalei" className="explore-btn">Bhalei</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dalhousie