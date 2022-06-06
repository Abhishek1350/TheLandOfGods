import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Bhalei = () => {
    useEffect(() => {
        document.title = "Top Places Bhalei"
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(../images/topplaces/bhalei.jpeg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Bhalei Mata Temple</h1>
                    <p className="paragraph home__description">The Holy Place</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>
                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Bhalei Mata Temple</p>
                        <p className="paragraph">
                            Bhalei Mata Temple is dedicated to the Hindu Goddess Bhadra.It is located on a 3,800 feet (1,200
                            m) high spur in Bhalei, which is now a Sub-Tehsil headquarters. It is about 35 km from Salooni
                            Tehsil headquarters. The temple can be approached either from Chamba or from Dalhousie and is at a
                            distance of 40 kilometers from Chamba and 30 kilometers from Dalhousie. The deity is in the front
                            of an image of black stone of two feet height and is enshrined in the sanctum sanctorum of the
                            temple. Bhadar Kali draws a large number of pilgrims from far and wide. A big havan ceremony is
                            performed during navratras of Ashwin and Chait months.
                        </p>
                    </div>

                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/bhalei.jpeg" alt="bhalei" width="350" className="place-overview-img" />
                    </div>
                </div>
                <hr />

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/bhalei2.jpg" alt="bhalei" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>History </p>
                        <p className="paragraph">
                            Mythology has it that the temple of Bhadar Kali murti found by Raja Pratap Singh during his reign.
                            He was a religiously disposed king and has to his credit construction, repair and renovation of many
                            temples in the district. The legend is that the deity appeared to Raja Partap Singh in dream and
                            told him that she was lying hidden in a place called Bhran about three kilometers from the present
                            site of temple. The deity asked the Raja to bring her from there and erect a suitable temple for
                            her. The Raja with his officials went to the site and discovered the image. The Raja and his team
                            were very happy they had already decided to construct a temple for the deity in Chamba town. So they
                            started their journey back. On way back they stopped for rest at Bhalei and when they resumed their
                            journey, the bearers could not lift the palanquin of the deity in which she was being taken to
                            Chamba. A Brahman from Kilod village was invited to interpret this peculiar incident. The Brahaman
                            interpreted that the deity did not want to go to Chamba, rather she desired her temple to be erected
                            at the site.
                        </p>
                    </div>
                </div>

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/tissa" className="explore-btn">Tissa</Link>
                        <Link to="/topplaces/pangi" className="explore-btn">Pangi</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Bhalei