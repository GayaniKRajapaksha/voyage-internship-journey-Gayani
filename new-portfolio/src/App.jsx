import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import ProjectDetail from './components/pages/ProjectDetail'
import NotFound from './components/pages/NotFound'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
