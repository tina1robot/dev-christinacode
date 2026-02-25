import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9f0eb 0%, #edf4ee 100%)",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background accent */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(134,185,139,0.18) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "40px", left: "5%",
          width: "250px", height: "250px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,193,168,0.22) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            color: "#86b98b",
            textTransform: "uppercase",
            marginBottom: "1.2rem"
          }}>
            Software Developer
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            color: "#2d3a2e",
            lineHeight: 1.05,
            margin: "0 0 1.5rem 0"
          }}>
            Christina<br />
            <span style={{ color: "#86b98b" }}>McNeice</span>
          </h1>

          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "1.15rem",
            color: "#5a6a5b",
            maxWidth: "520px",
            lineHeight: 1.75,
            marginBottom: "2.5rem"
          }}>
            CS &amp; Statistics student at UVic building thoughtful software — 
            from AI-powered tools to production academic platforms.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/about" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "#86b98b",
              color: "#fff",
              padding: "0.75rem 1.75rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background 0.2s"
            }}>About Me</a>
            <a href="/resume" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "transparent",
              color: "#86b98b",
              padding: "0.75rem 1.75rem",
              borderRadius: "2px",
              border: "1.5px solid #86b98b",
              textDecoration: "none",
              transition: "all 0.2s"
            }}>View Resume</a>
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section style={{
        background: "#2d3a2e",
        padding: "4rem 2rem"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {[
            { label: "Hackathon", value: "1st Place", sub: "AI auto-grading system, 19 hrs" },
            { label: "Production", value: "200+", sub: "Students using Mathine" },
            { label: "Database", value: "500+", sub: "Land segments architected" },
          ].map((item) => (
            <div key={item.label} style={{ borderLeft: "3px solid #f0c1a8", paddingLeft: "1.25rem" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#86b98b", textTransform: "uppercase", margin: "0 0 0.3rem 0" }}>{item.label}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#f9f0eb", margin: "0 0 0.25rem 0" }}>{item.value}</p>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "0.85rem", color: "#8fa08f", margin: 0 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
