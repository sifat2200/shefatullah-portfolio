"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "contact" },
];

const skills = [
  {
    number: "01",
    title: "Programming",
    description: "Languages I use for academic and software development work.",
    tags: ["Python", "C", "C++", "Java"],
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, machine learning, NLP and modern AI applications.",
    tags: [
      "Machine Learning",
      "Artificial Intelligence",
      "NLP",
      "LLMs",
      "Generative AI",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building practical applications and experimenting with modern development workflows.",
    tags: [
      "Software Development",
      "Web Development",
      "Git",
      "GitHub",
    ],
  },
  {
    number: "04",
    title: "Networking",
    description:
      "Networking knowledge supported by Cisco Networking Academy coursework.",
    tags: [
      "Computer Networking",
      "CCNA",
      "Routing",
      "Switching",
      "Wireless Networking",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "AI / ML • NLP • Healthcare",
    title: "PCOS Detection & Suggestion System",
    description:
      "A machine-learning and NLP-based project exploring PCOS risk prediction, data preprocessing, class imbalance, model evaluation, language-model-based augmentation and suggestion generation.",
    tech: [
      "Python",
      "Machine Learning",
      "NLP",
      "BERT",
      "MiniLM",
      "ClinicalBERT",
      "LLMs",
      "Scikit-learn",
    ],
    link: "https://github.com/sifat2200/PCOS-Detection-and-Suggestion-System",
  },
  {
    number: "02",
    category: "AI • NLP • Generative AI",
    title: "MedHelp — AI Medical Chatbot",
    description:
      "An AI-powered medical question-answering application built around Llama 2, LangChain and Pinecone, with a Flask-based web interface for interacting with the system.",
    tech: [
      "Python",
      "Llama 2",
      "LangChain",
      "Pinecone",
      "Flask",
      "NLP",
    ],
    link: "https://github.com/sifat2200/Med_Help_Chatbot",
  },
];

const experiences = [
  {
    date: "2023 — 2024",
    role: "Logistics & Event Manager / Junior Academic Content Creator",
    company: "Phoenix Admission Care",
    points: [
      "Managed logistics and event-related activities.",
      "Contributed as a Junior Academic Content Creator for the Phoenix Admission Book.",
      "Worked as a social media moderator for NSU and BRAC University admission tests.",
    ],
  },
  {
    date: "Contractual",
    role: "Event Manager",
    company: "Innovate International Limited",
    points: [
      "Coordinated event activities.",
      "Supported operational execution and event logistics.",
    ],
  },
  {
    date: "Contractual",
    role: "Event Coordinator",
    company: "Glovance Group",
    points: [
      "Supported event coordination.",
      "Assisted with on-ground event execution.",
    ],
  },
];

const leadership = [
  {
    date: "2025 — 2026",
    role: "Vice President",
    organization: "NSU Computer & Engineering Club (NSUCEC)",
    points: [
      "Organized NSU GAMEWAVE 2.0 — National Event.",
      "Organized Cyber Sec Launchpad 2026.",
      "Organized Intra-NSUCEC Chess Tournament 2025.",
      "Organized AI Chatbot Workshop 2025.",
      "Organized Cybernauts 2026 — National Event.",
    ],
  },
  {
    date: "2025 — 2026",
    role: "Director, Robotics Wing",
    organization: "NSU Computer & Engineering Club (NSUCEC)",
    points: [
      "Organized NSUCEC Robotics Workshop 2026.",
      "Organized NSUCEC Drone Workshop 2026.",
      "Organized NSUCEC Robotics Workshop 2025.",
      "Organized NSUCEC Mars Rover Workshop 2025.",
    ],
  },
  {
    date: "2024 — 2025",
    role: "Sub Executive Body, Admin & HR",
    organization: "NSU Computer & Engineering Club (NSUCEC)",
    points: [
      "Organized NSU TECH FEST 2025 — National Event.",
      "Organized NSU CEC GAMEWAVE 1.0 — Intra Event.",
      "Organized App Development Workshop 2025.",
    ],
  },
  {
    date: "2023 — 2024",
    role: "In-Charge, Admin & HR",
    organization: "NSU Computer & Engineering Club (NSUCEC)",
    points: [
      "Organized NSUCEC Robotics Workshop 2024.",
      "Supported administration and HR activities.",
    ],
  },
  {
    date: "2019 — Present",
    role: "President",
    organization: "Hrid Organisation",
    points: [
      "Leading and coordinating organizational activities.",
      "Developing leadership, communication and team-management experience.",
    ],
  },
  {
    date: "2021 — 2022",
    role: "Committee Member",
    organization: "Volunteer For Bangladesh",
    points: [
      "Participated in volunteer and community-oriented activities.",
    ],
  },
];

const events = [
  "NSU GAMEWAVE 2.0",
  "Cyber Sec Launchpad 2026",
  "Cybernauts 2026",
  "NSUCEC Robotics Workshop 2026",
  "NSUCEC Drone Workshop 2026",
  "NSUCEC Mars Rover Workshop 2025",
  "NSU TECH FEST 2025",
  "AI Chatbot Workshop 2025",
  "App Development Workshop 2025",
  "Intra-NSUCEC Chess Tournament 2025",
  "NSUCEC Robotics Workshop 2025",
  "NSUCEC Robotics Workshop 2024",
];

const activities = [
  "Australian Education Expo — 2023",
  "North South University Convocation — 2023, 2024 & 2025",
  "North South University Admission Test — 2023, 2024 & 2025",
  "North South University Fresher Orientation — 2023, 2024 & 2025",
  "NSU Bit Arena — 2022",
  "NSU HERC — 2024",
  "BD Clean Bangladesh",
  "Volunteer for Bangladesh",
  "Bangladesh Scouts",
  "National Soccer Bot competitions",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "leadership",
        "activities",
        "education",
        "contact",
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="grid-background" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <button className="logo" onClick={() => scrollTo("home")}>
            SB<span>.</span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="availability">
              <span className="status-dot" />
              <span>OPEN TO LEARNING & COLLABORATION</span>
            </div>

            <p className="eyebrow">
              Computer Science & Engineering <span>•</span> North South
              University
            </p>

            <h1>
              Md. Shefatullah
              <br />
              <span>Bin Sadik.</span>
            </h1>

            <p className="hero-role">
              CSE Undergraduate <span>/</span> AI & ML Enthusiast
            </p>

            <p className="hero-description">
              I&apos;m a Computer Science and Engineering undergraduate at
              North South University interested in Artificial Intelligence,
              Machine Learning, Natural Language Processing, Large Language
              Models and software development. I enjoy turning ideas into
              practical projects while continuously learning, experimenting
              and building.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                Explore My Work
                <span>↗</span>
              </button>

              <a
                className="secondary-button"
                href="/Md-Shefatullah-Bin-Sadik-CV.pdf"
                target="_blank"
              >
                View CV
              </a>
            </div>

            <div className="quick-links">
              <a
                href="https://github.com/sifat2200"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/md-shefatullah-bin-sadik-6711ba274"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:shefatullah16@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="photo-glow" />

            <div className="photo-frame">
              <img
                src="/profile.jpg"
                alt="Md. Shefatullah Bin Sadik"
                className="hero-photo"
              />

              <div className="floating-card card-top">
                <span className="floating-icon">⌘</span>
                <div>
                  <strong>AI / ML</strong>
                  <small>Building & Learning</small>
                </div>
              </div>

              <div className="floating-card card-bottom">
                <span className="floating-icon">◈</span>
                <div>
                  <strong>NSUCEC</strong>
                  <small>Leadership & Events</small>
                </div>
              </div>
            </div>

            <div className="hero-code">
              <span>01</span>
              <span>AI</span>
              <span>ML</span>
              <span>NLP</span>
              <span>LLM</span>
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollTo("about")}
        >
          <span className="scroll-line" />
          SCROLL TO EXPLORE
          <span className="scroll-arrow">↓</span>
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>
        </div>

        <div className="about-grid">
          <article className="glass-card about-main">
            <div className="card-label">PROFILE</div>

            <p>
              I&apos;m Md. Shefatullah Bin Sadik, a Computer Science and
              Engineering undergraduate at North South University. My
              interests are centered around Artificial Intelligence, Machine
              Learning, Natural Language Processing, Large Language Models and
              software development.
            </p>

            <p>
              I enjoy exploring how technology can be transformed into
              practical solutions. My project work includes machine-learning
              and NLP-based systems, AI-powered applications and data-driven
              experimentation.
            </p>

            <p>
              Alongside my technical interests, I have developed substantial
              experience in leadership, event management, administration,
              communication, teamwork and student-community activities through
              university organizations and professional engagements.
            </p>

            <p>
              My journey has also included robotics activities, workshops,
              national events, academic content creation, social-media
              moderation and volunteering. These experiences have helped me
              develop both technical curiosity and practical organizational
              skills.
            </p>

            <p>
              Currently, I am focused on strengthening my knowledge in AI/ML,
              NLP, LLMs and software development while building projects that
              demonstrate practical problem-solving and continuous learning.
            </p>
          </article>

          <div className="about-side">
            <div className="mini-card glass-card">
              <div className="mini-icon">⌬</div>
              <div>
                <strong>AI / ML</strong>
                <p>Exploring intelligent and data-driven systems.</p>
              </div>
            </div>

            <div className="mini-card glass-card">
              <div className="mini-icon">◉</div>
              <div>
                <strong>Leadership</strong>
                <p>Experience leading teams, projects and events.</p>
              </div>
            </div>

            <div className="mini-card glass-card">
              <div className="mini-icon">⚡</div>
              <div>
                <strong>Building</strong>
                <p>Turning ideas into practical technology projects.</p>
              </div>
            </div>

            <div className="mini-card glass-card">
              <div className="mini-icon">◎</div>
              <div>
                <strong>Learning</strong>
                <p>Continuously expanding technical and professional skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p className="section-label">02 / SKILLS</p>
          <h2>
            Tools I use.
            <br />
            <span>Things I explore.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.number} className="skill-card glass-card">
              <div className="card-number">{skill.number}</div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading split-heading">
          <div>
            <p className="section-label">03 / FEATURED WORK</p>
            <h2>
              Selected
              <br />
              <span>projects.</span>
            </h2>
          </div>

          <p className="heading-description">
            A selection of projects where I explore AI, machine learning, NLP,
            LLMs and practical software development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card glass-card">
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-icon">
                {project.number === "01" ? "⌁" : "✦"}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project on GitHub
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p className="section-label">04 / EXPERIENCE</p>
          <h2>
            Professional
            <br />
            <span>journey.</span>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.company}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="timeline-content glass-card">
                <p className="timeline-date">{experience.date}</p>

                <h3>{experience.role}</h3>

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
        <div className="section-heading split-heading">
          <div>
            <p className="section-label">05 / LEADERSHIP</p>
            <h2>
              Leading,
              <br />
              <span>organizing.</span>
            </h2>
          </div>

          <p className="heading-description">
            Leadership experiences through NSUCEC, Hrid Organisation and
            volunteering activities have been an important part of my
            university journey.
          </p>
        </div>

        <div className="leadership-grid">
          {leadership.map((item, index) => (
            <article key={`${item.role}-${item.organization}`} className="leadership-card glass-card">
              <div className="leadership-top">
                <span className="period">{item.date}</span>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{item.role}</h3>

              <p className="organization">{item.organization}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="activities" className="section">
        <div className="section-heading">
          <p className="section-label">06 / EVENTS & ACTIVITIES</p>
          <h2>
            Building
            <br />
            <span>experiences.</span>
          </h2>
        </div>

        <div className="events-layout">
          <div className="events-main glass-card">
            <div className="card-label">EVENTS I&apos;VE WORKED ON</div>

            <div className="event-cloud">
              {events.map((event, index) => (
                <div className="event-pill" key={event}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {event}
                </div>
              ))}
            </div>
          </div>

          <div className="activities-card glass-card">
            <div className="card-label">VOLUNTEERING & ACTIVITIES</div>

            <div className="activity-list">
              {activities.map((activity) => (
                <div className="activity-item" key={activity}>
                  <span>↳</span>
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <p className="section-label">07 / EDUCATION</p>
          <h2>
            Academic
            <br />
            <span>foundation.</span>
          </h2>
        </div>

        <div className="education-grid">
          <article className="education-card glass-card education-main">
            <span className="education-year">CURRENT</span>

            <div className="education-icon">∑</div>

            <h3>
              B.Sc. in Computer Science & Engineering
            </h3>

            <h4>North South University · Dhaka</h4>

            <p>10th Semester</p>

            <div className="education-badge">
              Computer Science & Engineering
            </div>
          </article>

          <article className="education-card glass-card">
            <span className="education-year">2020</span>

            <div className="education-icon">01</div>

            <h3>Higher Secondary Certificate</h3>

            <h4>Khulna Public College · Khulna</h4>

            <p>GPA 5.00</p>
          </article>

          <article className="education-card glass-card">
            <span className="education-year">2018</span>

            <div className="education-icon">02</div>

            <h3>Secondary School Certificate</h3>

            <h4>Govt. Laboratory High School · Khulna</h4>

            <p>GPA 5.00</p>
          </article>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section certification-section">
        <div className="certification-box glass-card">
          <div>
            <p className="section-label">08 / CERTIFICATION</p>

            <h2>
              Cisco
              <br />
              <span>Networking.</span>
            </h2>
          </div>

          <div className="certification-list">
            <div>
              <span>CCNA 01</span>
              <strong>Introduction to Networks</strong>
              <small>Cisco Networking Academy</small>
            </div>

            <div>
              <span>CCNA 02</span>
              <strong>Switching, Routing and Wireless Essentials</strong>
              <small>Cisco Networking Academy</small>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-box">
          <div className="contact-main">
            <p className="section-label">09 / CONTACT</p>

            <h2>
              Let&apos;s build
              <br />
              something <span>meaningful.</span>
            </h2>

            <p className="contact-description">
              Whether it&apos;s a technology project, collaboration, research
              idea, event, or simply a conversation about technology, I&apos;m
              always interested in connecting with people who enjoy learning
              and building.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:shefatullah16@gmail.com"
                className="primary-button"
              >
                Send me an email ↗
              </a>

              <a
                href="/Md-Shefatullah-Bin-Sadik-CV.pdf"
                className="secondary-button"
                target="_blank"
              >
                Open my CV
              </a>
            </div>
          </div>

          <div className="contact-details">
            <a href="mailto:shefatullah16@gmail.com">
              <span>EMAIL</span>
              shefatullah16@gmail.com
            </a>

            <a
              href="https://github.com/sifat2200"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              github.com/sifat2200
            </a>

            <a
              href="https://www.linkedin.com/in/md-shefatullah-bin-sadik-6711ba274"
              target="_blank"
              rel="noreferrer"
            >
              <span>LINKEDIN</span>
              Connect with me on LinkedIn ↗
            </a>

            <div className="contact-location">
              <span>LOCATION</span>
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>
            SB<span>.</span>
          </strong>

          <p>
            Md. Shefatullah Bin Sadik · CSE Undergraduate
          </p>
        </div>

        <div className="footer-right">
          <span>AI / ML</span>
          <span>NLP</span>
          <span>LLMs</span>
          <span>SOFTWARE</span>
        </div>

        <p>© {new Date().getFullYear()} Md. Shefatullah Bin Sadik</p>
      </footer>
    </main>
  );
}
