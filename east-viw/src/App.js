import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Academics from './pages/Academics';
import Career from './pages/Career';


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
            <Route path="/academics" element={<Academics/>} />
            <Route path="/career" element={<Career/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App;