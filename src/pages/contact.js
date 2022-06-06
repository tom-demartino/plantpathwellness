import React from "react";
import "./contact.css";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT PAGE</h1>
      <div id="form-box">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
