"use client";

import { useState } from "react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Leadership",
  "Community",
  "Education",
  "Contact",
];

const skills = [
  { name: "C", level: 85 },
  { name: "C++", level: 82 },
  { name: "Java", level: 75 },
  { name: "Python", level: 85 },
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
  {
    period: "2021 – 2022",
    role: "Committee Member",
    organization: "NSU Computer & Engineering Club",
    items: [],
  },
  {
    period: "2019 – Present",
    role: "President",
    organization: "Hrid Organisation",
    items: [],
  },
];

const community = [
  "Australian Education Expo — 2023",
  "North South University Convocation — 2023, 2024 & 2025",
  "North South University Admission Test — 2023, 2024 & 2025",
  "North South University Fresher Orientation — 2023, 2024 & 2025",
  "NSU Bit Arena — 2022",
  "NSU HERC — 2024",
  "BD Clean Bangladesh",
  "Volunteer for Bangladesh",
  "Bangladesh Scouts",
  "Participated in national Soccer Bot competitions",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main>
      {/* Background decoration */}
      <div className="background-effects">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="glow glow-three"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <button className="logo" onClick={() => scrollTo("home")}>
            MD. Shefatullah Bin Sadik<span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
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
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">
              CSE Undergraduate <span>•</span> Developer{" "}
              <span>•</span> ML Enthusiast
            </p>

            <h1>
              Md. Shefatullah
              <br />
              <span>Bin Sadik</span>
            </h1>

            <p className="hero-description">
              Computer Science & Engineering undergraduate at North South
              University with experience in technology, event management,
              academic content creation, student leadership and community
              activities.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                Explore My Journey
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
                href="https://www.linkedin.com/in/md-shefatullah-bin-sadik-6711ba274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>

              <a href="tel:+8801610460095">☎ Call</a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="photo-glow"></div>

            <img
              src="/profile.jpg"
              alt="Md. Shefatullah Bin Sadik"
              className="hero-photo"
            />
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>Turning curiosity into <span>impact.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-main glass-card">
            <p>
              I am an enthusiastic Computer Science & Engineering undergraduate
              at North South University. I enjoy exploring technology,
              connecting with people, organizing meaningful activities and
              transforming ideas into practical outcomes.
            </p>

            <p>
              My experience combines programming, networking, event management,
              academic content creation, social media moderation and student
              leadership.
            </p>

            <div className="stats">
              <div>
                <strong>4+</strong>
                <span>Programming Languages</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Professional Roles</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Leadership Roles</span>
              </div>
            </div>
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
              <span>💻</span>
              <div>
                <strong>Technical Focus</strong>
                <p>C, C++, Java, Python & Networking</p>
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
          <h2>Tools I use to <span>build.</span></h2>
        </div>

        <div className="skills-grid">
          <div className="glass-card programming-card">
            <p className="card-label">PROGRAMMING</p>

            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-title">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card">
            <p className="card-label">NETWORKING</p>

            <div className="certificate">
              <span>01</span>
              <div>
                <h3>CCNA: Introduction to Networks</h3>
                <p>Cisco Networking Academy</p>
              </div>
            </div>

            <div className="certificate">
              <span>02</span>
              <div>
                <h3>CCNA: Switching, Routing and Wireless Essentials</h3>
                <p>Cisco Networking Academy</p>
              </div>
            </div>
          </div>

          <div className="glass-card competencies">
            <p className="card-label">CORE COMPETENCIES</p>

            {[
              "Critical Thinking",
              "Teamwork",
              "Communication",
              "Project Management",
              "Event Planning",
              "Decision Making",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p className="section-label">03 — EXPERIENCE</p>
          <h2>Where I've <span>worked.</span></h2>
        </div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={index}>
              <div className="timeline-marker"></div>

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
          <p className="section-label">04 — LEADERSHIP</p>
          <h2>Leading, organizing & <span>creating.</span></h2>
        </div>

        <div className="leadership-grid">
          {leadership.map((item, index) => (
            <article className="leadership-card glass-card" key={index}>
              <div className="leadership-top">
                <span className="period">{item.period}</span>
                <span className="number">0{index + 1}</span>
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

      {/* COMMUNITY */}
      <section id="community" className="section">
        <div className="section-heading">
          <p className="section-label">05 — COMMUNITY</p>
          <h2>Beyond the <span>classroom.</span></h2>
        </div>

        <div className="community-grid">
          {community.map((item, index) => (
            <div className="community-item glass-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <p className="section-label">06 — EDUCATION</p>
          <h2>My academic <span>journey.</span></h2>
        </div>

        <div className="education-grid">
          <div className="education-card glass-card featured">
            <span className="education-year">CURRENT</span>
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <h4>North South University, Dhaka</h4>
            <p>Major: Computer Science & Engineering</p>
            <strong>10th Semester</strong>
          </div>

          <div className="education-card glass-card">
            <span className="education-year">2020</span>
            <h3>Higher Secondary Certificate</h3>
            <h4>Khulna Public College, Khulna</h4>
            <strong>GPA 5.00</strong>
          </div>

          <div className="education-card glass-card">
            <span className="education-year">2018</span>
            <h3>Secondary School Certificate</h3>
            <h4>Govt. Laboratory High School, Khulna</h4>
            <strong>GPA 5.00</strong>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-box">
          <div>
            <p className="section-label">07 — CONTACT</p>

            <h2>
              Let's build something
              <br />
              <span>meaningful.</span>
            </h2>

            <p className="contact-description">
              Whether it is technology, event management, collaboration or a
              new opportunity, feel free to reach out.
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
              href="https://shorturl.at/dkqsU"
              target="_blank"
              rel="noreferrer"
            >
              <span>LINKEDIN</span>
              View LinkedIn Profile ↗
            </a>

            <p>
              <span>LOCATION</span>
              Basundhara Residential Area, Dhaka
            </p>
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
          <strong>Md. Shefatullah Bin Sadik<span>.</span></strong>
          <p>Md. Shefatullah Bin Sadik</p>
        </div>

        <p>© {new Date().getFullYear()} — Built with Next.js</p>
      </footer>
    </main>
  );
}