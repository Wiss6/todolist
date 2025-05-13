
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membres from './pages/Membres';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Membres" element={<Membres />} />
        <Route path="/evenements" element={<Events />} /> 
      </Routes>
    </Router> 
  );
}

export default App;

