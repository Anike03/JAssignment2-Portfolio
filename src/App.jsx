import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanvasBackground from './effects/CanvasBackground';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <CanvasBackground />
      <NavBar />
      <div style={{ position: 'relative', zIndex: 2, marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
