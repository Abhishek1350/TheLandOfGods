import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Bharmour = () => {
    useEffect(() => {
        document.title = "Top Places Bharmour"
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <section className="top-places"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(../../images/topplaces/bharmour3.jpg)" }}>
                <div className="home__container">
                    <h1 className="heading home__heading">Bharmour</h1>
                    <p className="paragraph home__description">The Place Of Lord Shiva</p>
                </div>
            </section>
            <section className="place-overview" id="place-overview">
                <h2 className="heading">place-overview</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Bharmour</p>
                        <p className="paragraph">
                            Bharmour, formally known as Brahmpura, was the ancient capital of Chamba state, India. Situated at
                            an altitude of 7000 feet in the Budhil valley (32.26°N 76.32°E), 61 km to the south-east of Chamba,
                            Bharmour is known for its scenic beauty, wildlife sanctuaries, waterfalls and for its ancient
                            temples. Some of the temples are believed to date from 7th century. As Bharmour, Himachal Pradeshthe
                            whole area around Bharmour is supposed to belong to lord Shiva, it
                            is popularly spoken of as Shivabhumi, abode of lord Shiva. It lies between the Pir-Panjal and
                            Dhauladhar range, between Ravi and Chenab valley. The land is blessed with deep beauty of abundant
                            alpine pastures and provides home for nomadic shepherds, known as Gaddi, thus also called Gadderan.

                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/bharmour2.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                </div>
                <hr/>

                    <div className="place-overview-box even">
                        <div className="place-overview-right even-img">
                            <img src="../../images/topplaces/bharmour4.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                        </div>
                        <div className="place-overview-left">
                            <p className="paragraph" style={{ fontWeight: "bold" }}>Bharmour </p>
                            <p className="paragraph">
                                The epitome of spirituality lies in this land as it is endow with ancient temples. The area goes
                                through inhospitable terrain and severe climate changes. “Kailash Vasio” as the people of Bharmour
                                are known are extremely courteous and welcomes you like their own family member. Along with its
                                ethnic traditions, culture and ancient history, Bharmour forms the perfection of divine splendor.
                            </p>
                        </div>
                    </div>
            </section>

            <section className="places-of-interest">
                <h2 className="heading">Places Of Interest</h2>

                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>84 Temples </p>
                        <p className="paragraph">
                            Chaurasi Temple is located in the center of Bharmour town and it holds immense religious importance
                            because of temples built around 1400 years ago. Life of people in Bharmour centres around the temple
                            complex-Chaurasi, named IMG-20141030-WA0004so because of 84 shrines built in the periphery of
                            Chaurasi Temple. Chaurasi is hindi word for number eighty four. The beautiful shikhara style temple
                            of Manimahesh occupies the center of the complex. It is believed that when 84 Siddhas, who had come
                            from kurukshetra, were passing through Bharmour to visit Manimahesh, they fell in love with the
                            calmness of Bharmour and reconciled to meditate here. Chaurasi Temple Complex was built
                            approximately in 7th century, although repairs of many temples have been carried out in later
                            period.

                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/84.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                </div>

                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../../images/topplaces/shaktitemple.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Shivshakti Temple </p>
                        <p className="paragraph">
                            Shivshakti Temple is loacted at Chhatrari, a very beautiful, natural and historical village located
                            in the Tehsil of Chamba district and the last village of Chamba Tehsil. This village is 49 kms from
                            the district headquarters Chamba. Famous Shivshakti Temple of ChhatrariIt is situated on the left
                            side of River Ravi a stream Kunta is also following from the Kunr village and separated Bharmour
                            Tehsil to Chamba. This village is easily approachable by bus road which is well mettaled. Hppwd rest
                            house is also there for stay. It is a famous temple of aadi shakti which constructed by king Meru
                            Varman in 7th century. It is generally located 6k
                        </p>
                    </div>
                </div>


                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Bharmani Mata Temple </p>
                        <p className="paragraph">
                            Brahmani Mata temple complex is at the top of the ridge, 4 km away from the Bharmour. The place is
                            mainly known for Goddess Brahmani Mata. According to a local legend and people believe that the
                            Bharmour was called Brahmpura bharmani-mata-templeafter Brahmani Devi. When Lord Shiva went to
                            Manimahesh Kailash granted a boon to goddess Brahmani Devi that all persons intending to go on
                            pilgrimage to Manimahesh must have a dip in their holy pool. Failing this, their pilgrimage would
                            not be acceptable to Lord Shiva. That’s by every visitor firstly take bath in Brahmani’s holy pool
                            before Manimahesh Lake.
                        </p>
                    </div>

                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/bharmani.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                    
                </div>


                <div className="place-overview-box even">
                    <div className="place-overview-right even-img">
                        <img src="../../images/topplaces/bannimata.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Banni Mata Temple </p>
                        <p className="paragraph">
                            Banni Mata Temple, also known variously as the Mahakali Banni Mata Temple, is located at Bharmour in
                            Chamba District, a hill station in the State of Himachal Pradesh in north India. This temple is
                            situated at a height of 8,500 feet, Front_view_of_the Mahakali_Banni_Mata Templeright at the base of
                            beautiful Pir Panjal Range in the Chamba Valley. It is an ancient temple dedicated to Devi Kali, a
                            goddess figure in Hinduism.
                        </p>
                    </div>
                </div>


                <div className="place-overview-box odd">
                    <div className="place-overview-left">
                        <p className="paragraph" style={{ fontWeight: "bold" }}>Swami Kartik Temple</p>
                        <p className="paragraph">

                            Kartik Swami temple, locally called as Kelang temple, is located 6 km from Kugti village at an
                            altitude of 3100m above sea level. Temple complex have two temples one of Kartik and other of
                            Marali. The devotees want to visit this sacred kartik swami temple kelang temple kugti bharmourplace
                            before attempting Jotnu Pass for Kailash Parikrama and Kugti Pass. One another place is very near to
                            the Kartik Temple known as Naagheli known for snakes. Visitors will find so many snakes at this
                            particular place.
                        </p>
                    </div>
                    <div className="place-overview-right odd-img">
                        <img src="../../images/topplaces/kugti.jpg" alt="Bharmour" width="350" className="place-overview-img" />
                    </div>
                </div>
                <hr />

                <div className="place-overview-btn">
                    <h3 className="heading">Next Places</h3>
                    <div className="btns">
                        <Link to="/topplaces/dalhousie" className="explore-btn">Dalhousie</Link>
                        <Link to="/topplaces/manimahesh" className="explore-btn">Manimahesh</Link>
                        <Link to="/topplaces/kalatop" className="explore-btn">Kalatop</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Bharmour