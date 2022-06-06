// From https://w3collective.com/react-contact-form/

import React, { useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [status, setStatus] = useState("Send");
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })
      .then(response => response.json())
      .then(json => alert(json.status))
      .catch(err => alert(err))
      .finally(() => setStatus("Send"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="name">Name:</label><br /> */}
        <input type="text" class="box" id="name" placeholder="Name" required />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label><br /> */}
        <input
          type="email"
          class="box"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label><br /> */}
        <textarea class="box" id="message" placeholder="Message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
}

export default ContactForm;
