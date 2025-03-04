import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import ProjectsC from "./components/ProjectsC";

const App = () => {
  const projects = [
    {
      id: 1,
      title: "🎧 VR Game",
      objectif: " Développement d'un jeu jouable en VR pour apprendre l'anglais",
      techno: " HTML, Tailwind, Javascript, A-FRAME, PHP, MySQL.",
      apercu: " Un TV show mettant en scène différents mini-jeu.",
      img: "./src/assets/chicken.png",
      github: " https://github.com/BradSavary/Let_him_quizz",
      site: " https://vr-game.example.com",
    },
    {
      id: 2,
      title: "🚀 Dashboard dynamique",
      objectif: " Développement d'une application de gestion de projet",
      techno: " HTML, CSS, JavaScript, PHP, MySQL.",
      apercu: " Un projet mettant en avant une gestion de contenu type supermarché avec une base de données.",
      img: "./src/assets/graph.webp",
      github: " https://github.com/BradSavary/SAE303",
      site: " https://vr-game.example.com",
    },
    {
      id: 3,
      title: "🗺️ Personnaliser une carte OpenStreetMap",
      objectif: " Apprendre la manipulation de l'API OpenStreetMap",
      techno: " HTML, CSS, Javascript, API REST.",
      apercu: " Un carte classant des lycées et élèves par région et diplôme.",
      img: "./src/assets/map.webp",
      github: " https://github.com/BradSavary/SAE303-2",
      site: " https://vr-game.example.com",
    },
    {
      id: 4,
      title: "🌃 Nuit MMI",
      objectif: " Créer un jeu et sa landing page promotionnelle sur la pollution digitale, en moins de 24h.",
      techno: " JS, CSS, HTML.",
      apercu:  ` Un jeu type "clicker" avec différentes compétences.`,
      img: "./src/assets/nuit.webp",
      github: " https://github.com/BradSavary/Let_him_quizz",
      site: " https://vr-game.example.com",
    },
  ];

  let projectsC = [
    {
      id: 1,
      title: "🍎 Iconographie",
      objectif: " Créer des icônes sur sur un même thème graphique.",
      techno: " Illustrator",
      apercu:  ` 13 icones légendées + un rebus d'icones.`,
      img: "./src/assets/pomme.svg",
      pdf: "./src/assets/Iconographie.pdf",
    },
    {
      id: 2,
      title: "🥊 Super Smash or Pass",
      objectif: " Créer un prototype d'application mobile sur le thème d'un jeu vidéo.",
      techno: " Figma",
      apercu:  ` Une application de rencontre de combat sur Super Smash Bros.`,
      img: "./src/assets/smash.webp",
      proto: "https://www.figma.com/proto/48l5KxSFCejVs3FigOyWw9/Savary-Brad---Super-Smash-Bros.-Ultimate?page-id=5%3A2&node-id=19-1060&starting-point-node-id=19%3A1060&t=okV0tOVrMGdURF0E-1",
      site: "https://www.figma.com/design/48l5KxSFCejVs3FigOyWw9/Savary-Brad---Super-Smash-Bros.-Ultimate?node-id=33-288&t=Y8NINd8hI2WQw9XA-1",
      pdf: "",
    },
    {
      id: 3,
      title: "🕊️ Frise du Design",
      objectif: " Représenter l'évolution du design graphique à travers les époques.",
      techno: " Illustrator, Figma.",
      apercu:  ` Une frise chronologique parcourant différents arts et artistes.`,
      img: "./src/assets/chrono.webp",
      proto: "https://www.figma.com/proto/OZL8PA5arZlEm6WVbKX4mM/FRISE---Culture-Artistique?page-id=0%3A1&node-id=1-2209&viewport=289%2C373%2C0.28&t=YVyY3v9cs79IT2yy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2209",
      site: "https://www.figma.com/design/OZL8PA5arZlEm6WVbKX4mM/FRISE---Culture-Artistique?node-id=0-1&t=KL6kSPYn9nJlXYTw-1",
      pdf: "",
    },
    {
      id: 4,
      title: "✈️ Analyse et refonte d'un site",
      objectif: " Analyser un site existant et le refaire en fonction.",
      techno: " Figma: User Stories, User Flow, Audit et Recommandation, Wireframing, Prototypage.",
      apercu:  ` Analyse et création de prototype pour le site de l'aéroport de Limoges`,
      img: "./src/assets/aeroport-limoges.webp",
      site: "https://www.figma.com/design/BGUQndywquqwiTWuntaqCa/SAVARY_MARIEN?node-id=93-1096&t=FrbkOrIBplrWSDHE-1",
    },
    
  ];

  return (
    <div>
      <NavBar />
      <Header />
      <Projects projects={projects} />
      <ProjectsC projects={projectsC} />
      <Contact />
    </div>
  );
};

export default App;