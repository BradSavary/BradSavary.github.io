import "./Projects.css";
import React, { useState } from "react";

const ProjectsC = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Mes Projets de Création Numérique</h2>
      <section className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project ${selectedProject === project.id ? "bg-blue" : ""}`}
          onClick={() => handleProjectClick(project.id)}
        >
          <div className="project__content">
            <h3 className={`project__title ${selectedProject === project.id ? "color-white" : ""}`}>{project.title}</h3>
            {selectedProject === project.id ? (
              <ul className="project__extra-info">
                {project.proto && (
                  <li>
                   <a href={project.proto} target="_blank" rel="noopener noreferrer">
                    <span className="project__li__span">Prototype</span>
                    </a>
                  </li>
                )}
                {project.site && (
                  <li>
                  <a href={project.site} target="_blank" rel="noopener noreferrer">
                    <span className="project__li__span">Lien Figma</span>
                    </a>
                  </li>
                )}
                {project.pdf && (
                  <li>
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                    <span className="project__li__span">PDF :</span>
                      {project.title}
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <ul className="project__ul">
                {project.objectif && (
                  <li className="project__li">
                    <span className="project__li__span">Objectif :</span>
                    {project.objectif}
                  </li>
                )}
                {project.techno && (
                  <li className="project__li">
                    <span className="project__li__span">Techno utilisées :</span>
                    {project.techno}
                  </li>
                )}
                {project.apercu && (
                  <li className="project__li">
                    <span className="project__li__span">Aperçu :</span>
                    {project.apercu}
                  </li>
                )}
              </ul>
            )}
          </div>
          <img src={project.img} alt={project.title} className="project__img" draggable="false" />
        </div>
      ))}
      </section>
    </section>
  );
};

export default ProjectsC;