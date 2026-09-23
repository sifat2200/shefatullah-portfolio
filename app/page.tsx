"use client";

import { useState } from "react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Leadership",
  "Education",
  "Contact",
];

const projects = [
  {
    number: "01",
    title: "PCOS Detection & Suggestion System",
    category: "AI / ML / NLP",
    description:
      "A research-oriented machine learning system exploring PCOS risk prediction, class-imbalance handling, NLP-based representations, LLM-assisted augmentation, model evaluation, and suggestion generation.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "LLMs",
      "Scikit-learn",
      "PyTorch",
      "Hugging Face",
    ],
    github:
      "https://github.com/sifat2200/PCOS-Detection-and-Suggestion-System",
  },
  {
    number: "02",
    title: "MedHelp — AI Medical Chatbot",
    category: "AI / NLP / LLM",
    description:
      "An AI-powered medical question-answering application using retrieval-based context and Llama 2, with LangChain, Pinecone and Flask.",
    technologies: [
      "Python",
      "Llama 2",
      "LangChain",
      "Pinecone",
      "Flask",
      "NLP",
    ],
    github: "https://github.com/sifat2200/Med_Help_Chatbot",
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Python", "C", "C++", "Java"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "NLP",
      "LLMs",
      "Deep Learning",
      "Data Analysis",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "LangChain",
      "Flask",
      "Git & GitHub",
    ],
  },
  {
    title: "Other",
    items: [
      "Computer Networks",
      "SQL",
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Project Management",
    ],
  },
];

const experiences = [
  {
    year: "2023 – 2024",
    title: "Logistics & Event Manager / Junior Academic Content Creator",
    company: "Phoenix Admission Care",
    points: [
      "Managed logistics and event-related activities.",
      "Contributed as a Junior Academic Content Creator for the Phoenix Admission Book.",
      "Worked as a social media moderator for NSU and BRAC University admission tests.",
    ],
  },
  {
    year: "Contractual",
    title: "Event Manager",
    company: "Innovate International Limited",
    points: [
      "Coordinated event activities.",
      "Supported operational execution and event logistics.",
    ],
  },
  {
    year: "Contractual",
    title: "Event Coordinator",
    company: "Glovance Group",
    points: [
      "Supported event coordination.",
      "Assisted with on-ground event execution.",
    ],
  },
];

const leadership = [
  {
    period: "2025 – 2026",
    role: "Vice President",
    organization: "NSU Computer & Engineering Club",
    items: [
      "NSU GAMEWAVE 2.0 – National Event",
      "Cyber Sec Launchpad 2026",
      "Intra-NSUCEC Chess Tournament 2025",
      "AI Chatbot Workshop 2025",
      "Cybernauts 2026 – National Event",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Director, Robotics Wing",
    organization: "NSU Computer & Engineering Club",
    items: [
      "NSUCEC Robotics Workshop 2026",
      "NSUCEC Drone Workshop 2026",
      "NSUCEC Robotics Workshop 2025",
      "NSUCEC Mars Rover Workshop 2025",
    ],
  },
  {
    period: "2024 – 2025",
    role: "Sub Executive Body, Admin & HR",
    organization: "NSU Computer & Engineering Club",
    items: [
      "NSU TECH FEST 2025 – National Event",
      "NSU CEC GAMEWAVE 1.0 – Intra Event",
      "App Development Workshop 2025",
    ],
  },
  {
    period: "2023 – 2024",
    role: "In-Charge, Admin & HR",
    organization: "NSU Computer & Engineering Club",
    items: ["NSUCEC Robotics Workshop 2024"],
  },
];

const education = [
  {
    year: "CURRENT",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University, Dhaka",
    detail: "Computer Science & Engineering",
  },
  {
    year: "2020",
    degree: "Higher Secondary Certificate",
    institution: "Khulna Public College, Khulna",
    detail: "GPA 5.00",
  },
  {
    year: "2018",
    degree: "Secondary School Certificate",
    institution: "Govt. Laboratory High School, Khulna",
    detail: "GPA 5.00",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main>
      {/* Background */}
      <div className="background-effects">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            SHEFATULLAH<span>.</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="availability">
              <span className="status-dot" />
              Open to learning & collaboration
            </div>

            <p className="eyebrow">
              CSE Undergraduate <span>•</span> AI/ML Enthusiast{" "}
              <span>•</span> Developer
            </p>

            <h1>
              Md. Shefatullah
              <br />
              <span>Bin Sadik</span>
            </h1>

            <p className="hero-description">
              Computer Science & Engineering undergraduate at North South
              University with interests in Artificial Intelligence, Machine
              Learning, NLP, Large Language Models and software development.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                View My Projects
                <span>↗</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="quick-links">
              <a href="mailto:shefatullah16@gmail.com">
                ✉ Email
              </a>

              <a
                href="https://www.linkedin.com/in/md-shefatullah-bin-sadik-6711ba274"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>

              <a
                href="https://github.com/sifat2200"
                target="_blank"
                rel="noreferrer"
              >
                ◇ GitHub
              </a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="photo-glow" />

            <img
              src="/profile.jpg"
              alt="Md. Shefatullah Bin Sadik"
              className="hero-photo"
            />
          </div>
        </div>

        <div className="scroll-indicator">
          <span />
          Scroll to explore
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>
            Building skills,
            <br />
            <span>creating solutions.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main glass-card">
            <p>
              I am a Computer Science & Engineering undergraduate at North
              South University with a strong interest in Artificial
              Intelligence, Machine Learning, Natural Language Processing,
              Large Language Models and software development.
            </p>

            <p>
              I enjoy turning ideas into practical projects and exploring how
              modern technologies can be applied to real-world problems.
            </p>

            <p>
              Alongside technical work, I have developed experience in
              leadership, teamwork, event management, administration,
              communication and student-community activities.
            </p>
          </div>

          <div className="about-side">
            <div className="mini-card">
              <span>🎓</span>
              <div>
                <strong>Education</strong>
                <p>North South University</p>
              </div>
            </div>

            <div className="mini-card">
              <span>🤖</span>
              <div>
                <strong>Technical Focus</strong>
                <p>AI/ML • NLP • LLMs • Software Development</p>
              </div>
            </div>

            <div className="mini-card">
              <span>🚀</span>
              <div>
                <strong>Leadership</strong>
                <p>NSU Computer & Engineering Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p className="section-label">02 — SKILLS</p>
          <h2>
            Technologies I
            <br />
            <span>work with.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="glass-card skill-card" key={skill.title}>
              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="card-label">{skill.title}</p>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p className="section-label">03 — FEATURED PROJECTS</p>
          <h2>
            Turning ideas into
            <br />
            <span>working projects.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card glass-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p className="section-label">04 — EXPERIENCE</p>
          <h2>
            Where I have
            <br />
            <span>worked.</span>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={index}>
              <div className="timeline-marker" />

              <div className="timeline-content glass-card">
                <div className="timeline-date">{experience.year}</div>

                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="section">
        <div className="section-heading">
          <p className="section-label">05 — LEADERSHIP</p>
          <h2>
            Leading, organizing
            <br />
            & <span>creating.</span>
          </h2>
        </div>

        <div className="leadership-grid">
          {leadership.map((item, index) => (
            <article
              className="leadership-card glass-card"
              key={`${item.role}-${item.period}`}
            >
              <div className="leadership-top">
                <span className="period">{item.period}</span>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{item.role}</h3>
              <p className="organization">{item.organization}</p>

              {item.items.length > 0 && (
                <ul>
                  {item.items.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <p className="section-label">06 — EDUCATION</p>
          <h2>
            My academic
            <br />
            <span>journey.</span>
          </h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <div
              className="education-card glass-card"
              key={`${item.degree}-${item.year}`}
            >
              <span className="education-year">{item.year}</span>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-box">
          <div>
            <p className="section-label">07 — CONTACT</p>

            <h2>
              Let&apos;s build
              <br />
              something <span>meaningful.</span>
            </h2>

            <p className="contact-description">
              I&apos;m open to learning opportunities, collaboration,
              research, internships and meaningful technology projects.
            </p>
          </div>

          <div className="contact-details">
            <a href="mailto:shefatullah16@gmail.com">
              <span>EMAIL</span>
              shefatullah16@gmail.com
            </a>

            <a href="tel:+8801610460095">
              <span>PHONE</span>
              01610460095
            </a>

            <a
              href="https://www.linkedin.com/in/md-shefatullah-bin-sadik-6711ba274"
              target="_blank"
              rel="noreferrer"
            >
              <span>LINKEDIN</span>
              View LinkedIn Profile ↗
            </a>

            <a
              href="https://github.com/sifat2200"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              View GitHub Profile ↗
            </a>
          </div>
        </div>

        <div className="cv-download">
          <a
            href="/Md-Shefatullah-Bin-Sadik-CV.pdf"
            download
            className="download-button"
          >
            ↓ Download My CV
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>
            Md. Shefatullah Bin Sadik<span>.</span>
          </strong>
          <p>CSE Undergraduate • AI/ML • NLP • LLMs</p>
        </div>

        <p>© {new Date().getFullYear()} — Built with Next.js</p>
      </footer>
    </main>
  );
}
