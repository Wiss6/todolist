import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot.json';
import '../index.css'; 

function Home() {
  const [showModal, setShowModal] = useState(false); // État pour afficher ou masquer la modale

  const handleJoinClub = () => {
    setShowModal(true); // Affiche la modale
  };

  const handleCloseModal = () => {
    setShowModal(false); // Masque la modale
  };

  return (
    <div className="home-section" id="accueil" style={{ position: 'relative', overflow: 'hidden' }}>
      <video autoPlay muted loop className="bg-video">
        <source src="video.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Navbar au-dessus de la vidéo */}
      <Navbar />
      <div className="home-content-wrapper">
        {/* Robot en animation sans déplacer le texte */}
        <Lottie animationData={robotAnimation} className="robot-animation" />

        <div className="home-content" style={{ position: 'relative', zIndex: 3 }}>
          <h2>Bienvenue au Club de Robotique et IoT </h2>
          <p>Découvrez notre passion pour la technologie, les robots, et l'innovation !</p>
          {/* Bouton pour afficher la modale */}
          <button onClick={handleJoinClub}>Rejoindre le Club</button>
        </div>
      </div>

      {/* Modale d'inscription */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Inscription au Club</h2>
            <form>
              <label>
                Nom :
                <input type="text" placeholder="Entrez votre nom" required />
              </label>
              <label>
                Email :
                <input type="email" placeholder="Entrez votre email" required />
              </label>
              <button type="submit">S'inscrire</button>
              <button type="button" onClick={handleCloseModal}>
                Annuler
              </button>
            </form>
            {/* Informations supplémentaires */}
  <div className="modal-info">
  <div className="info-item">
    <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
    <span>criot.fsbm@gmail.com</span>
  </div>
  <div className="info-item">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
    <span>Université Hassan II, Faculté des Sciences Ben M'SIK, Casablanca, Morocco</span>
  </div>
  <div className="info-item">
    <FontAwesomeIcon icon={faLinkedin} className="info-icon" />
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </div>
  <div className="info-item">
    <FontAwesomeIcon icon={faInstagram} className="info-icon" />
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
  </div>
</div>
</div>
 </div>
      )}
    </div>
  );
}

export default Home;