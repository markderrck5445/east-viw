import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Courses from './pages/Courses';
import Career from './pages/Career';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path="/career" element={<Career/>} />
            <Route path="footer" element={<Footer/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App;