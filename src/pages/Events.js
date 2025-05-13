import React from 'react';
import Navbar from '../components/Navbar';
import './Evenements.css';
import Lottie from "lottie-react";
import robotAnimation from "../assets/robott.json"; // adapte le chemin si nécessaire



const evenements = [
   {
    titre: "Formation sur les systèmes embarqués",
    image: "/images/p4.jpg",
    description: "Le 26/04/2025 , notre Club de Robotique et IoT a organisé une formation passionnante sur les systèmes embarqués, animée par le formateur Morad Abdessamad .Au programme : des explications théoriques claires, des mini-projets pratiques pour ancrer les connaissances, et un accompagnement précieux pour les étudiants de S6 dans la préparation de leurs projets de fin d'études.."
  },
  {
    titre: "Formation en Python ",
    image: "/images/P5.jpg",
    description: "Le 28 novembre 2025,le Club de Robotique et IoT  a une fois de plus marqué les esprits en proposant une activité enrichissante pour tous les étudiants de la Faculté des Sciences Ben M’sik passionnés par la robotique et l’IoT. une formation en Python a été brillamment animée par notre vice-président, Morad Abdessamad , dans la salle située en face du Centre Orange, à partir de 14h30.     Cette formation a été une véritable opportunité pour les étudiants, notamment ceux qui découvrent l’univers de la programmation. Avec pédagogie et passion, Abdessamad a partagé les notions fondamentales de Python, telles que les variables, les conditions, et bien d'autres concepts essentiels. Les participants, venus de diverses filières, ont pu mettre en pratique ces apprentissages dans une ambiance à la fois studieuse et enthousiaste."
  },
 {
    titre: "Rencontre Annuelle des Clubs accrédités par l'Université",
    image: "/images/p3.jpg",
    description: "Le samedi 12 octobre 2024, restera gravé dans nos mémoires comme une journée marquante, celle où le forum des clubs de la FSBM s'est tenu à la bibliothèque universitaire Mohamed Sekkat.notre Club  a brillamment présenté ses projets, objectifs et réalisations devant un public diversifié, venu des différents établissements de l'Université Hassan II. C’était une occasion unique de partager nos valeurs, nos initiatives et nos ambitions avec des étudiants curieux et passionnés par la robotique et l’IoT. Grâce à l’enthousiasme de tous les membres présents, notamment ceux du bureau, nous avons su captiver l'attention avec nos projets innovants, attirant ainsi de nouveaux talents prêts à rejoindre notre aventure technologique."
  },
  {
    titre: "Atelier Arduino (la deuxième session)",
    image: "/images/p1.jpg",
    description: `Le samedi 9 décembre, le club de robotique et IoT a brillamment animé la deuxième session de formation Arduino. Les participants ont mis en pratique les concepts théoriques avec des équipements réels, explorant les boucles, les conditions de programmation, et la configuration de la carte Arduino. Le projet LED a été particulièrement éclairant, passant de programmes simples à complexes. Un grand merci aux participants motivés, qui ont contribué à la réussite et à l'approfondissement des connaissances en Arduino.`,
  },
  {
    titre: "Atelier Arduino (la première session)",
    image: "/images/arduino.jpg",
    description: "Dans le cadre d'une future compétition, le 2 décembre 2023, nous avons consacré la première partie de la formation Arduino (Arduino UNO), réalisée par le président du club CRIOT. Cette session comprenait une introduction à cette carte et ses caractéristiques. Les participants ont appris beaucoup d'informations sur cette carte, ainsi que des notions sur la façon de la programmer, grâce aux exercices travaillés avec un programme de modélisation appelé 'Tinkercad'. Ainsi, ils ont été capables de concevoir et programmer des projets simples de manière autonome. Les retours positifs des participants indiquent que la formation a atteint ses objectifs en termes de transmission de connaissances théoriques. Pour la pratique, nous verrons dans la deuxième partie des idées innovantes pour un projet en vue de la compétition. Les participants ont acquis de nombreuses connaissances sur la carte Arduino, accompagnées de notions sur la programmation, grâce aux exercices pratiques réalisés avec le logiciel de modélisation appelé 'Tinkercad'."
  },
  ]
function Evenements() {
  return (
    <div className="evenements-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/video.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas les vidéos HTML5.
      </video>

      <Navbar />

      <h2 className="evenements-titre"><span>Nos Evenements</span>
  <Lottie animationData={robotAnimation} style={{ width: 100, height: 100 }} />
</h2>

      <div className="evenements-list">
        {evenements.map((event, index) => (
          <div className="evenement-item" key={index}>
            {/* Image de l'événement */}
            <img src={event.image} alt={event.titre} className="evenement-image" />

            {/* Carte pour la description */}
            <div className="evenement-card">
              <h3>{event.titre}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Evenements;