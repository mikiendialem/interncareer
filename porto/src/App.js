import React from 'react';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Porto from './components/Porto';
import Service from './components/Service';
import Contact from './components/Contact';
import All from './components/All';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className='app' >
        <Router>
          <div className="about-first">
            <div className="about-profile">
              <div></div>
              <h5>Mikiyas Endalew</h5>
            </div>
            <div className="about-nav">
                <ul>
                  <li><ScrollLink to="about" smooth={true} duration={500}>Home</ScrollLink></li>
                  <li><ScrollLink to="home" smooth={true} duration={500}>About</ScrollLink></li>
                  <li><ScrollLink to="porto" smooth={true} duration={500}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="service" smooth={true} duration={500}>Services</ScrollLink></li>
                  <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                </ul>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/porto' element={<Porto  />} />
            <Route path='/service' element={<Service  />} />
            <Route path='/contact' element={<Contact  />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
