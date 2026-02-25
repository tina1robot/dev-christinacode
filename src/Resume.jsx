import { useEffect, useState } from "react";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "3rem" }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.4rem",
      color: "#2d3a2e",
      borderBottom: "2px solid #f0c1a8",
      paddingBottom: "0.5rem",
      marginBottom: "1.75rem"
    }}>{title}</h2>
    {children}
  </div>
);

const Entry = ({ title, subtitle, date, bullets }) => (
  <div style={{ marginBottom: "2rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.2rem" }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#2d3a2e", margin: 0 }}>{title}</p>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "#86b98b", margin: 0 }}>{date}</p>
    </div>
    {subtitle && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#f0c1a8", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{subtitle}</p>}
    {bullets && bullets.map((b, i) => (
      <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <span style={{ color: "#86b98b", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
        <p style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#5a6a5b", lineHeight: 1.7, margin: 0 }}>{b}</p>
      </div>
    ))}
  </div>
);

export default function Resume() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease", background: "#f9f0eb", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#2d3a2e", padding: "5rem 2rem 3.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.18em", color: "#86b98b", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Resume
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#f9f0eb", margin: "0 0 1rem 0" }}>
            Christina McNeice
          </h1>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", color: "#8fa08f", margin: "0 0 1.5rem 0" }}>
            mcneicechristina@gmail.com &nbsp;·&nbsp; Victoria, BC &nbsp;·&nbsp; Available May 2026
          </p>
          <a href="#" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            background: "#f0c1a8",
            color: "#2d3a2e",
            padding: "0.6rem 1.4rem",
            borderRadius: "2px",
            textDecoration: "none",
            display: "inline-block"
          }}>Download PDF</a>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>

        {/* Achievements */}
        <Section title="Key Achievements">
          {[
            { label: "Hackathon — 1st Place (2025)", desc: "Led 4-person team to architect and deliver a full-stack AI application using TypeScript, OpenAI API, and Vite in 19 hours." },
            { label: "Production Impact", desc: "Developed and deployed features serving 200+ students using TypeScript, Vue, and CI/CD pipelines." },
            { label: "Database Design", desc: "Architected database for 500+ land segments with long-term scalability planning." },
          ].map((a) => (
            <div key={a.label} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <span style={{ color: "#f0c1a8", fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>*</span>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", color: "#3d4d3e", lineHeight: 1.75, margin: 0 }}>
                <strong style={{ color: "#2d3a2e" }}>{a.label}:</strong> {a.desc}
              </p>
            </div>
          ))}
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Entry
            title="Software Engineering Co-op"
            subtitle="Inspire Research Lab · Victoria, BC"
            date="Sep – Dec 2025"
            bullets={[
              "Developed 3 production features for Mathine academic plugin using TypeScript and Vue in a 7-person Agile team, deployed to 200+ students.",
              "Implemented research-backed todo list with subtasks and time-blocking, collaborating with student success experts.",
              "Built calendar auto-generation feature with deadline integration via CI/CD pipeline.",
              "Debugged legacy codebase, identified performance bottlenecks, and maintained code quality.",
              "Participated in sprint planning, stand-ups, and retrospectives following Agile methodologies."
            ]}
          />
          <Entry
            title="Research Assistant"
            subtitle="Restoration Futures Lab · Victoria, BC"
            date="Sep 2022 – Jan 2023"
            bullets={[
              "Designed database architecture for 500+ land segments with schemas for long-term scalable data management.",
              "Consolidated data storage from multiple Excel spreadsheets, improving accessibility and consistency.",
              "Updated GIS mapping systems for improved research site visibility and geographic marking.",
              "Produced technical documentation for database design to support future development."
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Entry
            title="Auto-Grade Feedback System"
            subtitle="Hackathon Winner"
            date="2025"
            bullets={[
              "Won first place leading a 4-person team to build a full-stack AI-powered application in 19 hours.",
              "Built with TypeScript, OpenAI API, and Vite — delivered immediate personalized feedback on student assignments."
            ]}
          />
          <Entry
            title="Predictive Credit Risk Assessment"
            subtitle="Data Mining Course Project"
            date="2025"
            bullets={[
              "Compared three ML models (k-NN, neural networks, logistic regression) on 16,000+ credit records.",
              "Achieved 76.6% accuracy with k-NN via feature engineering and hyperparameter tuning — 4.75% over baseline."
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <Entry
            title="University of Victoria"
            subtitle="Combined Major: Computer Science & Statistics"
            date="Expected 2027"
            bullets={[
              "Relevant coursework: Software Testing, Requirements Engineering, Databases, Data Mining, Data Structures & Algorithms, Web Development, UI Design, System Architecture."
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Languages", val: "Python, TypeScript, JavaScript, Java, C, SQL, C#" },
              { label: "Frameworks", val: "React, Vue, Nuxt, REST APIs, HTML/CSS" },
              { label: "Tools", val: "Git/GitLab, Docker, Linux, Jira, CI/CD, Virtual Machines" },
              { label: "AI & Data", val: "OpenAI API, LLM Apps, k-NN, Neural Nets, GIS Systems" },
              { label: "Testing", val: "Unit & Integration Testing, Pytest, JUnit, Test Automation" },
              { label: "Practices", val: "TDD, Agile/Scrum, Code Review, Debugging & Analysis" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", borderRadius: "4px", padding: "1rem 1.25rem", borderLeft: "3px solid #86b98b" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#86b98b", textTransform: "uppercase", margin: "0 0 0.35rem 0" }}>{s.label}</p>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.85rem", color: "#5a6a5b", margin: 0, lineHeight: 1.6 }}>{s.val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Leadership & Certs */}
        <Section title="Leadership & Certifications">
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ color: "#86b98b", fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", color: "#3d4d3e", lineHeight: 1.7, margin: 0 }}>
              Website Manager, WECS (Women in Engineering and Computer Science), UVic
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ color: "#86b98b", fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", color: "#3d4d3e", lineHeight: 1.7, margin: 0 }}>
              Co-organized 3-event hackathon series with 60+ participants
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ color: "#86b98b", fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", color: "#3d4d3e", lineHeight: 1.7, margin: 0 }}>
              TCPS 2 CORE Certificate — Panel on Research Ethics (Oct 2025)
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span style={{ color: "#86b98b", fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", color: "#3d4d3e", lineHeight: 1.7, margin: 0 }}>
              IBM DevOps & Software Engineering · Google IT Support Professional (In Progress)
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}
