import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Pangi = () => {
    useEffect(() => {
        document.title = "Top Places Pangi"
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section class="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(../../images/topplaces/pangi.jpg)" }}>
                <div class="home__container">
                    <h1 class="heading home__heading">Pangi</h1>
                    <p class="paragraph home__description">The Daring Place</p>
                </div>
            </section>

            <section class="place-overview" id="place-overview">
                <h2 class="heading">place-overview</h2>

                <div class="place-overview-box odd">
                    <div class="place-overview-left">
                        <p class="paragraph" style={{ fontWeight: "bold" }}>Pangi</p>
                        <p class="paragraph">
                            Pangi valley is one of the most remote, rugged and poorly developed areas in Chamba District of
                            Himachal Pradesh. It is at an altitude of 7,000 feet to 11,000 feet above sea level. The scenery is
                            magnificent and daunting. Nature appears in her wildest and grandest moods. verything is on an
                            astonishing scale. The lower ranges are full of grass slopes that are rich with dense forests of
                            pine and cedar. The higher ranges are magnificent mountains of eternal snow. These mountains have an
                            altitude of 18,000 to 21,000 feet above the sea level. After few miles traveler reaches the
                            surpassing beauty. It may have small lakes in some gone by age, while the river was cutting its
                            course.

                        </p>
                    </div>
                    <div class="place-overview-right odd-img">
                        <img src="../../images/topplaces/pangi4.jpg" alt="pangi" width="350" class="place-overview-img" />
                    </div>
                </div>
                <hr />

                <div class="place-overview-box even">
                    <div class="place-overview-right even-img">
                        <img src="../../images/topplaces/pangi3.jpg" alt="pangi" width="350" class="place-overview-img" />
                    </div>
                    <div class="place-overview-left">
                        <p class="paragraph" style={{ fontWeight: "bold" }}> </p>
                        <p class="paragraph">
                            Pangi valley is locked for six to eight months due to heavy snowfall. It is located between Pir
                            Panjal and the Greater Himalayan Zanskar ranges. During summer access is provided through several
                            passes. That is a challenge to serious trekkers.

                            The Sach pass is one of its lonely connections it is at an altitude of 14,500 feet. Sach pass
                            remains closed for the better part of the year. It is open for vehicles between months of June and
                            October. It is covered with snow. The valley is populated with Bhoti people, who practice Buddhism
                            or Hinduism.

                        </p>
                    </div>
                </div>
            </section>

            <div class="place-overview-btn">
                <h3 class="heading">Next Places</h3>
                <div class="btns">
                    <Link to="/" class="explore-btn">Comming Soon</Link>
                </div>
            </div>
        </>
    )
}

export default Pangi