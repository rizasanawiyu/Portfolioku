export default function Hero() {
  const heroStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1024px",
    margin: "auto",
    padding: "72px 16px",
  };
  const leftStyle = {
    flex: 1,
    // paddingRight: "40px",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    margin: "0 0 20px",
    color: "#222",
    textAlign: "center",
  };
  const descStyle = {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    margin: "0 0 30px",
    color: "#555",
  };
  const exploreBtnStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    background: "#00A8FF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  const rightStyle = {
    flex: 1,
    textAlign: "right",
  };
  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    width: 380,
    borderRadius: "50%",
  };

  return (
    <section style={heroStyle}>
      <div style={leftStyle}>
        <h1 style={titleStyle}>Rifqi Aqila Zaidan</h1>
        <p style={descStyle}>
          I have an interest in programming and 3D. In programming I like to build logic, solving problems, and develop efficient systems. I am a Junior IT with 1 year of experience as an IT Support, specializing in desktop installation, system implementation, and troubleshooting.
        </p>
        <p>
          In the 3D field, I develop simple 3D assets and enjoy animating 3D characters. I have also participated in Animatik Jabar (Animation Contest) as a 3D Asset Artist and 3D Animator. Currently, I am working on a short animation project with my team.
        </p>
        <button style={exploreBtnStyle}>Explore Class</button>
      </div>
      <div style={rightStyle}>
        <img src="home.jpg" alt="Course preview" style={imgStyle} />
      </div>
    </section>
  );
}
