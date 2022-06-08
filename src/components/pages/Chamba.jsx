import React,{useEffect} from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Chamba = () => {
    useEffect(()=>{
        document.title="Top Places Chamba"
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <section className="top-places"
                style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(../../images/topplaces/chamba7.jpg)"}}>
                <div className="home__container">
                    <h1 className="heading home__heading">Chamba</h1>
                    <p className="paragraph home__description">The Main Town</p>
                </div>
            </section>

            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{fontWeight:"bold"}}>Chamba</p>
                        <p className="paragraph">
                            Chamba is a town in the Chamba district in the Indian state of Himachal Pradesh. According to the
                            2001 Indian census, Chamba has a population of 20,312 people. Located at an altitude of 1,006 metres
                            (3,301 ft) above mean sea level, the town is situated on the banks of the Ravi River (a major
                            tributary of the Trans-Himalayan Indus River), at its confluence with the Sal River.
                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/chamba3.jpg" alt="Chamba" width="350" className="place-overview-img"/>
                    </div>
                </div>
                <hr/>

                    <div className="place-overview-box even">
                        <div className="place-overview-right even-img">
                            <img src="../../images/topplaces/chamba6.jpg" alt="Chamba" width="350" className="place-overview-img"/>
                        </div>
                        <div className="place-overview-left">
                            <p className="paragraph" style={{fontWeight:"bold"}}>Chamba</p>
                            <p className="paragraph">
                                The town has numerous temples and palaces,[2][3] and hosts two popular jatras (fairs), the "Suhi
                                Mata Mela" and the "Minjar Mela", which last for several days of music and dancing. Chamba is also
                                well noted for its arts and crafts, particularly its Pahari paintings, which originated in the Hill
                                Kingdoms of North India between the 17th and 19th century, and its handicrafts and textiles
                            </p>
                        </div>
                    </div>
            </section>

            <section className="places-of-interest">
                <h2 className="heading">Places Of Interest</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{fontWeight:"bold"}}>The Chamba Chowgan</p>
                        <p className="paragraph">
                            The Chaugan is the heart and hub center of all activity in Chamba. According to Dr. J. Hutchison, “
                            The town is built on two terraces. On the lower is the Chaugan a fine grassy sward, about a half a
                            mile long by eighty yards broad. Tradition is silent as to its use as a polo ground and the name is
                            etymologically distinct from Chaugan, the Persian name of Polo, being of Sanskrit origin and meaning
                            ‘four-sided; Besides being a public promenade and recreation-ground, the Chaugan was utilized for
                            State Darbars and sports”.

                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/chaugan.jpg" alt="Chamba" width="350" className="place-overview-img"/>
                    </div>
                </div>

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../../images/topplaces/chamba5.jpg" alt="lakshimi narayan temple chamba" width="350"
                            className="place-overview-img"/>
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{fontWeight:"bold"}}>Laxmi Narayan Temple </p>
                        <p className="paragraph">
                            Laxmi Narayan Temple, which is the main temple of Chamba town was built by Sahil Verman in the 10th
                            century A.D. The temple has been built in the Shikhara style.

                            The temple consist of Bimana i.e. Shikhara and Garbhgriha with a small antralya. Laxmi Narayan
                            Temple has a Mandapa like structure also. The wooden Chhattries, the wheel roof, atop the temple
                            were in response to the local climatic conditions as a protection against snow-fall.

                            There are several other temples within this complex. The temple know as Radha Krishan was erected as
                            late as 1825 A.D. by Rani sarda, queen of Raja Jeet Singh. The Shiva temple of Chandergupta was also
                            believed to have been built by Sahil Verman while the construction of Gauri Shankar Temple is
                            ascribed to his son and successor Yugkar Varman.
                        </p>
                    </div>
                </div>


                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{fontWeight:"bold"}}>Sui Mata Temple </p>
                        <p className="paragraph">

                            This temple can be divided into three parts which can physically spread apart. The temple of Sui
                            Mata is on an elevation of Shah Madar Hill. A steep flight of steps comes down to a small pavilion
                            just above the Saho road. From the Saho road the flight of steps continues down to the main town a
                            little to the east of Chauntra Mohalla. At the end of the flight of steps there is another small
                            pavilion with gargoyles with running water. The flight of stone steps to the aqueduct from the
                            Sarota stream was built by Sarda, the Rani of Raja Jeet Singh (1794-1808). According to the legend
                            when Raja Sahil Varman founded the town and made this aqueduct for water supply to the town the
                            water refused to flow.
                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/suimata.jpg" alt="Chamba" width="350" className="place-overview-img"/>
                    </div>
                </div>


                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../../images/topplaces/bhoorising.jpg" alt="Chamba" width="350" className="place-overview-img"/>
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{fontWeight:"bold"}}>Bhuri Singh Museum </p>
                        <p className="paragraph">

                            Bhuri Singh Museum at Chamba opened formally on 14-09-1908, it is named after Raja Bhuri Singh who
                            ruled Chamba from 1904 to 1919. Bhuri Singh donated his family collection of paintings to the
                            museum. The idea to open a public museum came from J. Ph. Vogel, an eminent Indologist who was
                            serving A.S.I. and who through an intensive exploration had discovered, read and analyzed old
                            inscriptions dispersed far and wide in the territory of Chamba state. These inscriptions mostly in
                            Sarda script shed important light on the mediaeval history of Chamba. The parasites of Sarahan,
                            Devi-ri-kothi and mul Kihar are now preserved in the museum.
                        </p>
                    </div>
                </div>
                <hr/>

                    <div className="place-overview-btn">
                        <h3 className="heading">Next Places</h3>
                        <div className="btns">
                            <Link to="/topplaces/bharmour" className="explore-btn">Bharmaur</Link>
                            <Link to="/topplaces/dalhousie" className="explore-btn">Dalhousie</Link>
                            <Link to="/topplaces/manimahesh" className="explore-btn">Manimahesh</Link>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Chamba