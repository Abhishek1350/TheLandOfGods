import Navbar from './components/Navbar';
import Home from './components/Home';
import TopPlaces from './components/TopPlaces';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/topplaces" element={<TopPlaces/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
