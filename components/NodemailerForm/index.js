import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NodemailerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

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
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 4000);
      } else {
        console.log("E-Mail konnte nicht gesendet werden");
      }
    } catch (error) {
      console.log("Fehler beim Senden der E-Mail");
    }
  };

  return (
    <div>
      {isSent && (
        <div>
          <Image
            src="/img/techny-receiving-a-letter-or-email.gif"
            width={500}
            height={500}
            alt="Checkmark"
          />
          <p>E-Mail wurde gesendet!</p>
        </div>
      )}

      {!isSent && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
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
      )}
    </div>
  );
}
