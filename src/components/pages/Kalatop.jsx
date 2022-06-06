import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Kalatop = () => {
    useEffect(() => {
        document.title = "Top Places Kalatop"
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(../images/topplaces/kalatop.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Kalatop</h1>
                    <p className="paragraph home__description">The Heaven</p>
                </div>
            </section>

            <section className="overview" id="overview">
                <h2 className="heading">Overview</h2>

                <div className="overview-box odd">
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Kalatop</p>
                        <p className="paragraph">
                            Kalatop Khajjiar Sanctuary, or simply Kalatop Sanctuary, is a 30.69 km² animal sanctuary at Kalatop
                            and Khajjiar in the Chamba district of Himachal Pradesh, India. The sanctuary area is well laid out
                            for trekking trails both at Kalatop and Khajjiar. There is a dense deodar and fir forest covering
                            19.63 km² of the sanctuary, which is about 6 km from Dalhousie. Pheasants, serow and black bear are
                            some of the common animals found here. The sanctuary lies in the path of the Ravi River, and is
                            surrounded by coniferous and oak forests.
                        </p>
                    </div>
                    <div className="overview-right odd-img">
                        <img src="../images/topplaces/kalatop2.jpg" alt="kalatop" width="350" className="overview-img" />
                    </div>
                </div>
                <hr />

                <div className="overview-box even">
                    <div className="overview-right even-img">
                        <img src="../images/topplaces/kalatop3.jpg" alt="kalatop" width="350" className="overview-img" />
                    </div>
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}> </p>
                        <p className="paragraph">
                            The flora in the sanctuary includes cedar and blue pine, oaks like moru and ban, deodar trees,
                            rhododendron, firs, and many more. It's also popular for medicinal plants and herbs. The wilderness
                            is conferred with a huge variety of Indian Wildlife, including some of the endangered species of
                            flora and fauna.

                            In the middle of this sanctuary, you'll find a lake offering splendid views to sightseers. The
                            Sanctuary boasts of a huge variety of wildlife like Bear, Himalayan Black Marten, Leopard, Deer,
                            Barking Goral, Squirrel, Serow, Jackal, Langur, Himalayan Tahr, Goral, Ibex, Himalayan Squirrel,
                            Muntjak, etc. This sanctuary is known for preserving the native Himalayan serow
                        </p>
                    </div>
                </div>

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/bhalei" className="explore-btn">Bhalei</Link>
                        <Link to="/topplaces/tissa" className="explore-btn">Tisa</Link>
                        <Link to="/topplaces/pangi" className="explore-btn">Pangi</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Kalatop