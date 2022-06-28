// From https://w3collective.com/react-contact-form/

import React, { useState } from "react";
import "./contactForm.css";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "../../../src/aws-exports";

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

function ContactForm(prop) {
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

    await fetch(
      "https://vh5b1jnhyc.execute-api.us-west-1.amazonaws.com/dev/express",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      }
    )
      .then(response => response.json())
      .then(json => alert(json.status))
      .catch(err => alert(err))
      .finally(() => setStatus("Send"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="box"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          className="box"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <textarea className="box" id="message" placeholder="Message" required />
      </div>
      <button type="submit" className="myButton">
        {status}
      </button>
    </form>
  );
}

export default ContactForm;
