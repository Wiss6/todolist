// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import du composant Link
import logo from '../LOGO.jpg'; // Logo du club
import faculteLogo from '../assets/faculteLogo.png'; // Logo de la faculté

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Ajoute la classe scrolled si on défile de plus de 50px
      } else {
        setScrolled(false); // Retire la classe scrolled si on revient en haut
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    marginRight: '12px',
    transform: hovered ? 'rotate(5deg) scale(1.05)' : 'none',
    transition: 'transform 0.3s ease'
  };

  return (
    <nav className={`nav-overlay ${scrolled ? 'scrolled' : ''}`}>
      {/* Partie gauche : Logo club + nom */}
      <div className="container"> 
      <div className="nav-left">
        <img
          src={logo}
          alt="Logo Club"
          style={logoStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <h1 className="logo">Club Robotique & IoT</h1>
      </div>

      {/* Partie centre : Navigation */}
      <div className="nav-center">
        <Link to="/">Accueil</Link>
        <Link to="/evenements">Evénements</Link>
        <Link to="/membres">Membres</Link>
      </div>

      {/* Partie droite : Logo Faculté sans style spécial */}
      <div className="nav-right">
        <img src={faculteLogo} alt="Logo Faculté" className="fac-logo" />
      </div>
      </div>
    </nav>
  );
}

export default Navbar;