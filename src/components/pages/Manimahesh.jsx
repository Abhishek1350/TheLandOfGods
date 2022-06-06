import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Manimahesh = () => {
    useEffect(() => {
        document.title = "Top Places Manimahesh"
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(../images/topplaces/manimahesh.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Manimahesh</h1>
                    <p className="paragraph home__description">The Home Of Lord Shiva</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Manimahesh</p>
                        <p className="paragraph">

                            The Manimahesh Lake is situated Twenty-six kilometers from Bharmour in the Budhil valley , one of
                            the chief pilgrimage spots in Himachal Pradesh. The lake is situated at an altitude of 13,000 feet
                            at the foot of the Kailash peak (18,564 ft). Every year, on the eighth day of the light half of the
                            moon in the month of Bhadon, a fair is held at this lake, which attracts thousands of pilgrims who
                            assemble here to take a dip in the holy water.

                            Lord Shiva is the presiding deity of this fair / jatra. He is believed to reside in Kailash. A rock
                            formation in the shape of a Shivling on Kailash is considered to be the manifestation of Lord Shiva.
                            The snowfield at the base of the mountain is called Shiva’s Chaugan by the local people.

                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/manihahesh3.jpg" alt="manimahesh" width="350" className="place-overview-img" />
                    </div>
                </div>
                <hr />

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/manimahesh2.jpg" alt="manimahesh" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}> </p>
                        <p className="paragraph">
                            Mount Kailash is considered as invincible. No one has so far been able to scale this peak despite
                            the fact that much taller peaks, including Mount Everest have been conquered many times. One story
                            goes that once a Gaddi tried to climb the mountain alongwith his herd of sheep. He is believed to
                            have been turned stone alongwith his sheep. The series of minor peaks below the principal peak are
                            believed to be the remains of the ill-fated shepherd and his flock.
                            There is yet another legend according to which a snake also attempted to climb this peak but failed
                            and was turned into stone. It is also believed that the devotees can have a view of the Kailash peak
                            only if the Lord is pleased. Bad weather, when the peak is hidden behind clouds, is a sign of the
                            Lord’s displeasure.

                            At one corner of the Manimahesh lake is a marble image of Shiva which is worshipped by the pilgrims
                            who visit this place. After bathing in the holy waters, the pilgrims go around the circumference of
                            the lake three times. The lake and its surroundings present a majestic view. The quiet waters of the
                            lake carry the reflection of snow capped peaks that carry over the valley.
                        </p>
                    </div>
                </div>
            </section>

            <section className="places-of-interest">
                <div className="mani-img" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="../images/topplaces/manimaheshyatra.jpg" alt="manimahesh" style={{ width: "95%" }} />
                </div>

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/kalatop" className="explore-btn">Kalatop</Link>
                        <Link to="/topplaces/bhalei" className="explore-btn">Bhalei</Link>
                        <Link to="/topplaces/tissa" className="explore-btn">Tisa</Link>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Manimahesh