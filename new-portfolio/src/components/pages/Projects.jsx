import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../../data/projects'

export default function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <div className="projects-list">
        {projects.map(p => (
          <div key={p.id} className="project-card">
            <h3><Link to={`/projects/${p.id}`}>{p.title}</Link></h3>
            <p>{p.short}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
