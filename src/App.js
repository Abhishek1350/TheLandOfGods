import Navbar from './components/Navbar';
import Home from './components/Home';
import TopPlaces from './components/TopPlaces';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chamba from './components/pages/Chamba';
import Bhalei from './components/pages/Bhalei';
import Bharmour from './components/pages/Bharmour';
import Dalhousie from './components/pages/Dalhousie';
import Kalatop from './components/pages/Kalatop';
import Khajjiar from './components/pages/Khajjiar';
import Manimahesh from './components/pages/Manimahesh';
import Pangi from './components/pages/Pangi';
import Tisa from './components/pages/Tisa';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topplaces" element={<TopPlaces />} />
        <Route exact path="/topplaces/chamba" element={<Chamba />} />
        <Route exact path="/topplaces/bhalei" element={<Bhalei />} />
        <Route exact path="/topplaces/bharmour" element={<Bharmour />} />
        <Route exact path="/topplaces/dalhousie" element={<Dalhousie />} />
        <Route exact path="/topplaces/kalatop" element={<Kalatop />} />
        <Route exact path="/topplaces/khajjiar" element={<Khajjiar />} />
        <Route exact path="/topplaces/manimahesh" element={<Manimahesh />} />
        <Route exact path="/topplaces/pangi" element={<Pangi />} />
        <Route exact path="/topplaces/tissa" element={<Tisa />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
