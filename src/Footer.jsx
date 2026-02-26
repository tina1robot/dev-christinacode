export default function Footer() {
  return (
    <footer style={{
      background: "#2d3a2e",
      padding: "4rem 2rem",
      marginTop: "4rem"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            color: "#86b98b",
            textTransform: "uppercase",
            marginBottom: "0.75rem"
          }}>
            Let's Connect
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: "#f9f0eb",
            margin: "0 0 1rem 0"
          }}>
            Available May 2026
          </h2>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: "1rem",
            color: "#8fa08f",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.75
          }}>
          
          Happy to bring my unique blend of technical skills, enviromental passion and collaborative spirit to a meaningful project. 
          Lets chat about how i can contribute to our team!
          </p>
        </div>

        {/* Contact cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem"
        }}>
          {[
            {
              label: "Email",
              value: "mcneicechristina@gmail.com",
              href: "mailto:mcneicechristina@gmail.com"
            },
              
            {
              label: "LinkedIn",
              value: "linkedin.com/in/christina-mcneice",
              href: "https://linkedin.com/in/christina-mcneice"
            },
            {
              label: "GitHub",
              value: "github.com/tina1robot",
              href: "https://github.com/tina1robot"
            }
          ].map((item) => (
            <div key={item.label} style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "4px",
              padding: "1.25rem",
              borderTop: "2px solid #f0c1a8"
            }}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: "#86b98b",
                textTransform: "uppercase",
                margin: "0 0 0.4rem 0"
              }}>{item.label}</p>
              {item.href ? (
                <a href={item.href} style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "0.85rem",
                  color: "#f9f0eb",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  wordBreak: "break-all"
                }}>{item.value}</a>
              ) : (
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "0.85rem",
                  color: "#f9f0eb",
                  margin: 0,
                  lineHeight: 1.5
                }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.75rem",
          color: "#8fa08f",
          textAlign: "center",
          margin: 0,
          letterSpacing: "0.05em"
        }}>
          Christina McNeice — {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}
