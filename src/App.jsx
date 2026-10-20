import About from "./components/About";
import { useState } from "react";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description: "A responsive portfolio showcasing my projects.",
    tech: ["React", "CSS", "JavaScript"],
    status: "In progress",
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "Student Management System",
    description:
      "A full-stack application for managing student records with CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Planned",
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Expense Tracker",
    description:
      "An application for tracking income, expenses, and financial summaries.",
    tech: ["MERN", "Charts", "Authentication"],
    status: "Planned",
    github: "",
    demo: "",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu}>
            Aman<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's Connect
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                <span className="status-dot" />
                OPEN TO OPPORTUNITIES
              </p>

              <h1>
                Hi, I'm <span>Aman Prajapati</span>
              </h1>

              <h2>Software Development Engineer</h2>

              <p className="hero-description">
                I build responsive web experiences and am developing my
                full-stack skills with the MERN stack. I enjoy turning ideas
                into useful, well-designed applications.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Projects ↗
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="hero-meta">
                <span>📍 India</span>
                <span>⚡ Learning by building</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer illustration">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="code-card">
                <div className="code-card-top">
                  <span />
                  <span />
                  <span />
                  <small>developer.js</small>
                </div>
                <pre>
                  <code>
                    <span className="code-purple">const</span> developer = {"{"}
                    {"\n"}  name: <span className="code-green">"Aman"</span>,
                    {"\n"}  role: <span className="code-green">"SDE"</span>,
                    {"\n"}  stack: <span className="code-green">"MERN"</span>,
                    {"\n"}  learning: <span className="code-purple">true</span>
                    {"\n"}{"}"};
                    {"\n\n"}
                    <span className="code-blue">developer</span>.build();
                  </code>
                </pre>
              </div>
              <div className="floating-tag tag-top">{"</>" } React</div>
              <div className="floating-tag tag-bottom">✦ Full Stack Journey</div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2 className="section-title">
              About <span>Me</span>
            </h2>
            <div className="about-card">
              <p>
                I'm Aman Prajapati, a Software Development Engineer focused
                on growing my skills in full-stack web development. My
                current learning path includes React, Node.js, Express.js,
                MongoDB, responsive UI development, REST APIs, and Git.
              </p>
              <p>
                Through hands-on projects, I aim to write clean code,
                solve practical problems, and create applications that
                are useful and easy to navigate.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2 className="section-title">
              Skills & <span>Technologies</span>
            </h2>
            <p className="section-description">
              Technologies I'm learning and using in my development journey.
            </p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-icon">✦</span>
                  {skill}
                </div>
              ))}
            </div>
            <p className="note">
              Update this list to reflect your actual proficiency.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="eyebrow">WHAT I'M BUILDING</p>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-description">
              My portfolio and full-stack learning projects.
            </p>
            
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

            <p className="note">
              Replace planned projects with real demos and repository links
              as you complete them. Don't claim unfinished work is complete.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container contact-card">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2 className="section-title">
              Let's build something <span>great.</span>
            </h2>
            <p className="section-description">
              I'm interested in learning, collaborating, and exploring
              software development opportunities.
            </p>
            <a
              className="button button-secondary"
              href="/Aman_Prajapati_Resume.pdf"
              download="Aman_Prajapati_Resume.pdf"
            >
              Download Resume ↓
            </a>
            
            <a
              className="button button-primary"
              href="mailto:amanprajapati0777553@gmail.com?subject=Portfolio%20Inquiry"
            >
              Email Me ↗
            </a>

            <div className="social-links">
              <a
                href="https://github.com/amanprajapati0777553"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/aman-prajapati-401734289/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.leetcode.com/u/amanprajapati0777553/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode ↗
              </a>
              <a
                href="https://www.hackerrank.com/amanprajapati071/"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#home">
            Aman Prajapati<span>.</span>
          </a>
          <p>Designed and built by Aman Prajapati.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
