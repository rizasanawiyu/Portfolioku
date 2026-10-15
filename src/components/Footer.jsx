export default function Footer() {
  const footerStyle = {
    width: "100%",
    background: "#222",
    color: "#ddd",
    padding: "20px 0",
  };
  const containerStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 20px",
    textAlign: "center",
    fontSize: "0.875rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        © {new Date().getFullYear()} WEBKU. All rights reserved.
      </div>
    </footer>
  );
}
