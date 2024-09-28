//App.js, Adam La Selva, 301488626, and 2024-09-27
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import logo from './assets/logo.png'; 
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav style={{ display: 'flex', alignItems: 'center' }}>
                    {/* navigation bar section */}
                    <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '20px' }} />
                    <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                {/* page routing section */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
