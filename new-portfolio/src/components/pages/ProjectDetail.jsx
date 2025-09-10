import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => String(p.id) === String(id))

  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
        <p>The project ID {id} does not exist.</p>
        <button onClick={() => navigate('/projects')}>Back to projects</button>
      </section>
    )
  }

  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <button onClick={() => navigate('/projects')}>Back to projects</button>
    </section>
  )
}
