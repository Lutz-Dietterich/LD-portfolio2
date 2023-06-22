import React, { useState } from "react";

export default function NodemailerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("../api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("E-Mail gesendet");
        // Hier kannst du bei Bedarf den Zustand der Komponente zurücksetzen
      } else {
        console.log("E-Mail konnte nicht gesendet werden");
      }
    } catch (error) {
      console.log("Fehler beim Senden der E-Mail");
    }

    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Nachricht:</label>
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Senden</button>
    </form>
  );
}
