import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./css/home.css"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Chamba - The Land Of Gods"
    }, [])

    return (
        <>
            <section className="home">
                <div className="home__container">
                    <h1 className="heading home__heading">Welcome To <span>Chamba</span></h1>
                    <p className="paragraph home__description">The Land Of Gods</p>
                    <a href="#information" className="explore-btn">Explore
                        <i className="fa-solid fa-compass"></i></a>
                </div>
            </section>

            <section className="information" id="information">
                <div className="information-container">
                    <h2 className="heading">
                        Basic Information
                    </h2>
                    <p className="paragraph">
                        Full with historical and architecturally significant landmarks, the town in its temples and palaces
                        preserves much of its rich medieval past. For a traveller there is much to explore in and around Chamba.
                    </p>
                    <p className="paragraph">
                        Chamba, perhaps the loveliest valley of Himachal, is a treasure trove of scenic attractions, sparkling
                        streams, primeval lakes, meadows, dense alpine tree covers, rich wildlife and fertile valleys. At the
                        crossroads of Dhauladhar and Zanskar ranges, the region borders Jammu & Kashmir and is the northernmost
                        district of the state. Fast flowing streams drain into River Ravi on the southern side and into River
                        Chenab on the northern fringes.
                    </p>
                    <p className="paragraph">
                        Nestling on the right bank of River Ravi, on terraced flats at a scenic place where the smaller Sal
                        River meets the large one, the sprawling township of Chamba was founded by Raja Sahil Varman in 920 AD.
                        It was at the insistence of his daughter Champavati that the king shifted his capital from Bharmaur to
                        Chamba. After Chamba merged with the Indian union in 1947, the town now is a district headquarter.
                    </p>
                </div>

                <div className="information-data-container">
                    <div className="grid-wrapper">
                        <div className="area box flex-box-column">
                            <i className="fa-solid fa-diamond-turn-right heading" style={{ color: "yellow" }}></i>
                            <h3 className="paragraph" style={{ color: "#ff0000" }}>Area</h3>
                            <h4 className="heading" style={{ color: "#ffffff" }}>6,910km <span
                                style={{ fontSize: "30px", position: "absolute" }}>2</span></h4>
                        </div>

                        <div className="literacy box flex-box-column">
                            <i className="fa-solid fa-book-open heading" style={{ color: "#11ff00" }}></i>
                            <h3 className="paragraph" style={{ color: "yellow" }}>Literacy Rate</h3>
                            <h4 className="heading" style={{ color: "#ffffff" }}>72.17%</h4>
                        </div>

                        <div className="population box flex-box-column">
                            <i className="fa-solid fa-people-group heading" style={{ color: "#1500ff" }}></i>
                            <h3 className="paragraph" style={{ color: "#ff0000" }}>Popultion</h3>
                            <h4 className="heading" style={{ color: "#ffffff" }}>519,090</h4>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            <section className="overview" id="overview">
                <h2 className="heading">Overview</h2>

                <div className="overview-box odd">
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Chamera Lake</p>
                        <p className="paragraph">
                            On the route from Chamba to Dalhousie, the lake of Chamera Dam backwaters have developed into a
                            popular getaway. Water sport activities of boating, kayaking, canoeing, sailing and fishing are
                            recreational and fun filled escapades. To end a day, one can sit back and enjoy the splendour of the
                            sunset as the calm waters reflect back vivid colours. The dam built on River Ravi is 40 km from
                            Chamba.</p>
                    </div>
                    <div className="overview-right odd-img">
                        <img src="./images/home/Chamera-Lake-chamba.jpg" alt="chamera lake" width="350" className="overview-img" />
                    </div>
                </div>
                <hr />

                <div className="overview-box even">
                    <div className="overview-right even-img">
                        <img src="./images/home/Bharmaur-min.jpg" alt="Bharmaur" width="350" className="overview-img" />
                    </div>
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Bharmaur</p>
                        <p className="paragraph">
                            Having been the seat of power for four centuries, Bharmaur was known for its grandiose and royal
                            benevolence. Remains and monuments, best exemplified in the Chaurasi temple complex, exhibit the
                            heritage of the historical township. Nestled on the bank of Budhal river, in a fertile valley
                            between the Dhauladhar and Pir Panjal ranges with an abundant of easily accessible alpine pastures
                            in the vicinity, the land is home to the noble nomadic Gaddi tribesman.</p>
                    </div>
                </div>
                <hr />

                <div className="overview-box odd">
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Khajjiar</p>
                        <p className="paragraph">
                            Often compared with Swiss mountain meadows, Khajjiar is a wide grassy clearing around a pond with a
                            thick cedar forest. On higher ground near the pond is the small temple of Khajji Nag that dates to
                            the 12th century AD.</p>
                    </div>
                    <div className="overview-right odd-img">
                        <img src="./images/home/Khajjiar.jpg" alt="Khajjiar" width="350" className="overview-img" />
                    </div>
                </div>
                <hr />

                <div className="overview-box even">
                    <div className="overview-right even-img">
                        <img src="./images/home/Folk-Dance-Chamba.jpg" alt="Shakti Devi Temple" width="350"
                            className="overview-img" />
                    </div>
                    <div className="overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Shakti Devi Temple at Chhatrari</p>
                        <p className="paragraph">
                            Shakti Devi temple at Chhatrari, is a well documented temple of Chamba – Bharmaur built in the
                            traditional architectural style. The temple belongs to the period when the first temples of Chaurasi
                            complex at Bharmaur were built. The wood work at this temple is very impressive. The brass idol of
                            Shakti Devi is dated to the 8th century period. On the 3rd day of Manimahesh Yatra, water from
                            Manimahesh lake is brought down to the temple and the idol of Maa Shakti is bathed with it.
                            Chhatrari is 40 Km from Chamba.</p>
                    </div>
                </div>
                <hr />

                <div className="overview-btn">
                    <Link to="/topplaces" className="explore-btn">Explore All
                        <i className="fa-solid fa-compass"></i></Link>

                </div>
            </section>


        </>
    )
}

export default Home