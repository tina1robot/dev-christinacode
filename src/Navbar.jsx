export default function Navbar() {
  const path = window.location.pathname;

  const linkStyle = (href) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.82rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textDecoration: "none",
    color: path === href ? "#86b98b" : "#f9f0eb",
    borderBottom: path === href ? "1.5px solid #86b98b" : "1.5px solid transparent",
    paddingBottom: "2px",
    transition: "color 0.2s"
  });

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: "rgba(45, 58, 46, 0.96)",
      backdropFilter: "blur(8px)",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <a href="/" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.1rem",
        color: "#f9f0eb",
        textDecoration: "none"
      }}>
        CM
      </a>
      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#/" style={linkStyle("/")}>Home</a>
        <a href="#/about" style={linkStyle("/about")}>About</a>
        <a href="#/resume" style={linkStyle("/resume")}>Resume</a>
      </div>
    </nav>
  );
}
