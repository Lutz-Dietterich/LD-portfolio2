import React from "react";

export default function EmailTemplate({ firstName, message }) {
  const containerStyles = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#e2e6f2",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyles = {
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px 8px 0 0",
  };

  const contentStyles = {
    padding: "20px",
    fontSize: "20px",
    color: "#252326",
  };

  const footerStyles = {
    color: "#252326",
    fontSize: "14px",
    padding: "20px",
    textAlign: "center",
    borderRadius: "0 0 8px 8px",
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <img
          src="https://res.cloudinary.com/dnojoo4vt/image/upload/v1690464407/logo_large_hnfzkf.png"
          alt="Lutz Dietterich - WEB DEVELOPER"
        />
      </div>
      <div style={contentStyles}>
        <p>Hallo {firstName},</p>
        <p>
          Vielen Dank für deine Nachricht!
          <br />
          Ich werde mich so schnell wie möglich bei dir melden.
        </p>
        <p>
          Viele Grüße
          <br />
          Lutz
        </p>
      </div>
      <div style={footerStyles}>
        <p>&copy; 2023 Lutz Dietterich. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  );
}
