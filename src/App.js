import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
