import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import headshot from "../../src/images/PD_Headshot3_032022_297x297.jpg";

function About() {
  return (
    <div id="about-page">
      <div id="center-screen">
        <section id="process">
          <h1>About Plant Path Wellness</h1>
          <p>
            Each of us holds the power to impact our health daily. PlantPath
            Wellness’ mission is to help awaken that “can-do” in you. Motivation
            is needed to get started, but it's fleeting. Together we develop new
            habits that ultimately lead to your making different choices with no
            motivation required.
          </p>
          <h2>Approach</h2>
          <p>I meet you where you are now.</p>
          <p id="what-change">
            What is the one change that would make everything easier to
            accomplish?
          </p>
          <h2>Training</h2>
          <p>
            Certification in Plant Based Nutrition through eCornell's{" "}
            <b>T. Colin Campbell Center for Nutrition Studies</b> - A
            comprehensive program focused on food, the food system and its
            effects on human health, animal welfare, and our environment.
          </p>
          <p>
            January 2018 - a year-long Health Coach training program at the{" "}
            <b>Institute for Integrative Nutrition</b>. I am the proud recipient
            of IIN's Leadership in Health Coaching Award. October 2019 - IIN's
            Coaching Intensive Practicum in preparation for the NBHWC 2020
            Health &amp; Wellness Certifying Exam.
          </p>
          <p>
            <strong>WellStart Health Wellness Coach</strong> - In 2018 I
            completed a five-month health coach training with{" "}
            <b>WellStart Health, Inc.</b>
            under the direction of <em>Howard Jacobson, PhD</em>. This
            small-group interactive program focused on behavior change and habit
            formation. Introducing these strategies has proven to be a game
            changer for clients and for my practice. Not a therapeutic model,
            but an outcome-oriented approach to making change.
          </p>
          <p>
            <strong>
              National Board Certified Health and Wellness Coach (NBC-HWC)
            </strong>
            - March 2020 I achieved NBHWC Board Certification status, exam
            administered by the National Board of Medical Examiners (NBME).
          </p>
        </section>
        <section id="schedule">
          <h1>Schedule Your Call To Action</h1>
          <p>
            Is the support of a coach what you need?
            <br />
            Contact me today.
          </p>
          <p id="contact">
            <Link to="/contact" id="link">
              <button id="btn">Explore what's possible!</button>
            </Link>
          </p>
          <img src={headshot} alt="Patty DeMartino headshot"></img>
          <p id="name">Patty DeMartino</p>
          <p id="nbc-hwc">NBC-HWC</p>
        </section>
      </div>
    </div>
  );
}

export default About;
