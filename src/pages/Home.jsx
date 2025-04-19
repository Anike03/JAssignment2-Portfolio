import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import './Home.css';

function Home() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { projects, skills } = await fetchProjects();
      setProjects(projects);
      setSkills(skills);
    };
    loadData();
  }, []);

  return (
    <div className="home">
      <header>
        <h1>Aniket Sharma</h1>
        <p className="subtitle">Web Developer 🚀</p>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((p, i) => (
              <div key={i} className="project">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <img src={p.imageUrl} alt={p.title} />
                <a href={p.githubLink} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        ) : (
          <p>No projects found.</p>
        )}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skills.length > 0 ? (
          <div className="skill-grid">
            {skills.map((s, i) => (
              <div key={i} className="skill">
                <h3>{s.name}</h3>
                <p>{s.proficiency}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No skills found.</p>
        )}
      </section>
    </div>
  );
}

export default Home;
