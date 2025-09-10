import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <section>
      <h1>Welcome</h1>
      <p>Hi — I build web apps. Browse my <Link to="/projects">projects</Link>.</p>
    </section>
  )
}
