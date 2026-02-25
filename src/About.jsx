import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease", background: "#f9f0eb", minHeight: "100vh" }}>
      {/* Header strip */}
      <div style={{ background: "#2d3a2e", padding: "5rem 2rem 3.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.18em", color: "#86b98b", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            About Me
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#f9f0eb", margin: 0 }}>
            Hi, I'm Christina
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>

        {/* Intro */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.15rem", color: "#3d4d3e", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            I'm a Computer Science &amp; Statistics student at the University of Victoria, graduating in 2027. I'm drawn to software that actually makes a difference — whether that's building academic tools used by hundreds of students, designing databases that last, or shipping an AI system in 19 hours at a hackathon.
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.15rem", color: "#3d4d3e", lineHeight: 1.8 }}>
            I care about writing clean, thoughtful code and collaborating with people who take their craft seriously. I'm currently looking for a Software Development co-op from May–December 2026.
          </p>
        </div>

        {/* Skills areas */}
        <div style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#2d3a2e", borderBottom: "2px solid #f0c1a8", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
            What I Work With
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                area: "Languages",
                items: "Python, TypeScript, JavaScript, Java, C, SQL, C#"
              },
              {
                area: "Frameworks & Tools",
                items: "React, Vue, Nuxt, REST APIs, HTML/CSS, Docker, Linux"
              },
              {
                area: "Practices",
                items: "TDD, Agile/Scrum, CI/CD, Git, Code Review, Debugging"
              },
              {
                area: "AI & Data",
                items: "OpenAI API, Prompt Engineering, ML Models, GIS Systems"
              }
            ].map((s) => (
              <div key={s.area} style={{
                background: "#fff",
                borderRadius: "4px",
                padding: "1.5rem",
                borderTop: "3px solid #86b98b"
              }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.12em", color: "#86b98b", textTransform: "uppercase", marginBottom: "0.6rem" }}>{s.area}</p>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#5a6a5b", lineHeight: 1.7, margin: 0 }}>{s.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond code */}
        <div style={{ background: "#edf4ee", borderRadius: "4px", padding: "2rem 2.5rem", borderLeft: "4px solid #86b98b" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#2d3a2e", margin: "0 0 1rem 0" }}>Beyond the Code</h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1rem", color: "#3d4d3e", lineHeight: 1.8, margin: 0 }}>
            Outside of software, I'm the website manager for WECS (Women in Engineering and Computer Science) at UVic and help organize hackathons. I enjoy bouldering, slow Sunday mornings, and taking care of my two senior cats.
          </p>
        </div>
      </div>
    </div>
  );
}
