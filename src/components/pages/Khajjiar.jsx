import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Khajjiar = () => {
    useEffect(() => {
        document.title = "Top Places Khajjiar"
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(../images/topplaces/khajjiar2.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Khajjiar</h1>
                    <p className="paragraph home__description">The Mini Switzerland</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Khajjiar</p>
                        <p className="paragraph">
                            Khajjiar is a hill station in Chamba district, Himachal Pradesh, India, located approximately 24
                            kilometres (15 mi) from Dalhousie.[2]

                            Khajjiar lies on a small plateau with a small stream-fed lake in the middle that has been covered
                            over with weeds. The hill station is surrounded by meadows and forests. It is about 2,000 metres
                            (6,500 ft) above sea level in the foothills of the Dhauladhar ranges of the Western Himalayas and
                            peaks can be seen in the distance.[3] It is part of the Kalatop Khajiar Sanctuary.

                            Khajiar can be reached from Dalhousie, the nearest major town and hill station, by bus in an hour or
                            so. It has a rare combination of three ecosystems: lake, pasture and forest.</p>
                    </div>

                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/khajjiar2.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>

                </div>
                <hr />

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/khajjiar.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Mini Switzerland</p>
                        <p className="paragraph">
                            On 7 July 1992, Swiss Envoy Willy P. Blazer, Vice Counselor and Head of Chancery of Switzerland in
                            India brought Khajjiar on the world tourism map by calling it "Mini Switzerland". He also put a sign
                            of a yellow Swiss hiking footpath showing Khajjiar's distance from the Swiss capital Bern: "6,194
                            km" or 3,849 mi. Khajjiar is among the 160 locations in the world that bears a topographical
                            resemblance with Switzerland. The counselor also took a stone from Khajjiar which will form part of
                            a stone collage around the Swiss Parliament to remind the visitors of Khajjiar as a "Mini
                            Switzerland of India".</p>
                    </div>
                </div>
            </section>

            <section className="places-of-interest">
                <h2 className="heading">Places Of Interest</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Khajjiar Lake</p>
                        <p className="paragraph">
                            Khajjiar Lake is a small lake, surrounded by saucer-shaped lush green meadow and a floating island.
                            The dense growth of weed called vacha has made its earth spongy. Now the banks stand covered by a
                            thick layer of earth, formed by the years of dust settling down on the weeds.</p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/khajjiar3.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>
                </div>

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/khajjiar.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Khajji Nag temple</p>
                        <p className="paragraph">
                            A little away from the lake is the temple of Khajji Nag belonging to the 12th century CE made by the
                            king of Chamba, Prithvi Singh. The temple has a golden dome due to which it is also known as Golden
                            Devi Temple. In the mandapa of the temple one can see the images of the Pandavas and the defeated
                            Kauravas hanging from the roof of the circumambulatory path. The sanctum of the temple has been
                            carved from wood.[1] This temple is dedicated to snake (Nāga) worship and there are some snake idols
                            inside. The temple also houses idols of Shiva and the Goddess Hadimba.</p>
                    </div>
                </div>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Trekking</p>
                        <p className="paragraph">
                            Khajjiar offers numerous trekking opportunities. Khajjiar to Dainkund is a 3.5-kilometre (2.2 mi)
                            easy to moderate trek. The trek starts 6 kilometres (3.7 mi) from Khajjiar on the Dalhousie-Khajjiar
                            road and ends at Pholani Devi Temple at Dainkund. This trek with a well-defined trail and moderate
                            ascent is an excellent trek for beginners and children. The trek offers excellent views and a
                            beautiful camping site.</p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../images/topplaces/khajjiar6.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>
                </div>

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../images/topplaces/khajjiar7.jpg" alt="khajjiar" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Paragliding</p>
                        <p className="paragraph">
                            Paragliding in Khajjiar is certainly the most sought after adventure activity in Himachal. The
                            quaint village tucked in the Chamba district of Himachal Pradesh acts as a perfect weekend getaway
                            from Delhi. It is also a completely hassle free destination to live your dream of flying without the
                            rumbling noise of motors deafening your ears.</p>
                    </div>
                </div>
                <hr />

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/chamba" className="explore-btn">Chamba</Link>
                        <Link to="/topplaces/bharmour" className="explore-btn">Bharmour</Link>
                        <Link to="/topplaces/dalhousie" className="explore-btn">Dalhousie</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Khajjiar