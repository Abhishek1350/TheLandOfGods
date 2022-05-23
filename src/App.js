import Navbar from './components/Navbar';
import Home from './components/Home';
import TopPlaces from './components/TopPlaces';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/pages/topplaces" element={<TopPlaces/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
