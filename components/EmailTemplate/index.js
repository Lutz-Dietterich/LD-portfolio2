import React from "react";

export default function EmailTemplate({ firstName, message }) {
  const containerStyles = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#000000",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px 8px 0 0",
  };

  const contentStyles = {
    padding: "20px",
    color: "#fff",
  };

  const footerStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "0 0 8px 8px",
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1>Willkommen!</h1>
      </div>
      <div style={contentStyles}>
        <p>Hallo {firstName},</p>
        <p>Vielen Dank für deine Nachricht:</p>
        <p>{message}</p>
        <p>Viele Grüße</p>
      </div>
      <div style={footerStyles}>
        <p>&copy; 2023 Mein Unternehmen. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  );
}
