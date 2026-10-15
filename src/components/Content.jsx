import React from "react";

export default function Content() {
  const mainStyle = {
    width: "100%",
    background: "#fff",
    padding: "60px 0",
  };
  const containerStyle = {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    gap: "24px",
  };
  const featureStyle = {
    background: "#fff",
    flex: 1,
    padding: "24px",
  };
  const titleStyle = {
    fontSize: "1.25rem",
    margin: "0 0 12px",
    color: "#222",
    textAlign: "center",
  };
  const descStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    margin: 0,
    color: "#555",
    textAlign: "center",
  };

  const features = [
    {
      title: "Expert-Led Classes",
      description:
        "Learn from industry professionals with years of real-world experience.",
    },
    {
      title: "Hands-On Projects",
      description:
        "Build practical skills through engaging, project-based coursework.",
    },
    {
      title: "Flexible Schedule",
      description:
        "Access lessons anytime, anywhere, and learn at your own pace.",
    },
  ];

  return (
    <main style={mainStyle}>
      <div style={containerStyle}>
        {features.map((feature, idx) => (
          <div key={idx} style={featureStyle}>
            <h3 style={titleStyle}>{feature.title}</h3>
            <p style={descStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
