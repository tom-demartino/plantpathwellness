import React from "react";
import "./contact.css";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <div id="contact-page">
      <div class="bar" id="top"></div>
      <div id="content">
        <h2>Could a partner help you get there?</h2>
        <p>
          <i>Let's schedule a 30-minute call to find out</i>
          <br />
          Fill out the form below to contact me at{" "}
          <span id="email-addr">plantpathwellness@gmail.com</span>
        </p>
        <div id="form">
          <ContactForm backgroundColor="transparent" />
        </div>
        <p>
          <em id="quote">
            "You'll never change your life until you change something you do
            daily.""
          </em>
          <br />
          <b>-John Maxwell</b>
        </p>
      </div>
      <div class="bar"></div>
    </div>
  );
}

export default Contact;
