import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>Try returning <Link to="/">home</Link>.</p>
    </section>
  )
}
