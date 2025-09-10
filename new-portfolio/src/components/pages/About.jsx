import React from 'react'

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Gayani Rajapaksha</strong>, a Software Engineering student passionate about 
        <strong> web development, AI applications</strong>. I enjoy creating modern, 
        user-friendly applications that solve real-world problems.
      </p>

      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <strong>Languages:</strong><br />
          Java, Python, PHP, JavaScript, C#
        </div>
        <div className="skill-category">
          <strong>Web Development:</strong><br />
          React, HTML, CSS, Bootstrap, Flask
        </div>
        <div className="skill-category">
          <strong>Databases:</strong><br />
          MySQL, PostgreSQL, MongoDB
        </div>
        <div className="skill-category">
          <strong>Tools:</strong><br />
          Git/GitHub, NetBeans, VS Code, phpMyAdmin
        </div>
      </div>

      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          📧 <a href="mailto:gayanirajapaksha6@gmail.com">gayanirajapaksha6@gmail.com</a>
        </div>
        <div className="contact-item">
          🔗 <a href="https://www.linkedin.com/in/gayanirajapaksha" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          📍 Sri Lanka
        </div>
      </div>
    </section>
  )
}
