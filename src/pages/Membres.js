// src/pages/Members.js
import React from 'react';
import './Membres.css';
import Navbar from '../components/Navbar'
import Lottie from "lottie-react";
import robotAnimation from "../assets/robott.json"; // adapte le chemin si nécessaire


const membres = [
  { nom: "BOUGA Bouchra", role: "Présidente", photo: "1.png" },
  { nom: "MORAD Abdessamad", role: "Vice-Président", photo: "2.png" },
  { nom: "ARYBOU Soufiane", role: "Trésorière", photo: "3.png" },
  { nom: "NASYF Aziza", role: "Responsable communication", photo: "4.png" },
  { nom: "SOULTANA Boutaina", role: "Responsable RSE", photo: "5.png" },
  { nom: "CHTAINI Yassine", role: "Designer", photo: "6.png" },
  { nom: "EL HANSALI Ayman", role: "Responsable du matériel", photo: "7.png" },
  { nom: "METAHI Imad", role: "Cellule des événements", photo: "8.png" },
  { nom: "MOUJAHID Latifa", role: "Cellule des événements", photo: "9.png" },
  { nom: "BOUGUI Mounir", role: "Designer", photo: "10.png" },
  { nom: "BENHADDOU Myriem", role: "Secrétaire générale", photo: "11.png" },
  { nom: "SANAA Hartal", role: "Responsable communication", photo: "12.png" },
 
 
];

function Members() {
  return (
    <div className="members-container">
       <video autoPlay muted loop className="bg-video">
        <source src="/video.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas les vidéos HTML5.
      </video>
      <Navbar />
      <h2 className="members-title">
  <span>Notre Equipe</span>
  <Lottie animationData={robotAnimation} style={{ width: 100, height: 100 }} />
</h2>

      <div className="members-grid">
        {membres.map((membre, index) => (
          <div className="member-card" key={index}>
            <img src={`/images/${membre.photo}`} alt={membre.nom} />
            <h3>{membre.nom}</h3>
            <p>{membre.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
