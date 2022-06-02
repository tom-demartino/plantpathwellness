import React from "react";
import { Link } from "react-router-dom";
import headshot from "../../src/images/PD_Headshot3_032022_297x297.jpg";

function About() {
  return (
    <body class="about">
      <section class="process">
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
        <p class="what-change">
          What is the one change that would make everything easier to
          accomplish?
        </p>
        <h2>Training</h2>
        <p>
          Certification in Plant Based Nutrition through eCornell's{" "}
          <b>T. Colin Campbell Center for Nutrition Studies</b> - A
          comprehensive program focused on food, the food system and its effects
          on human health, animal welfare, and our environment.
        </p>
        <p>
          January 2018 - a year-long Health Coach training program at the{" "}
          <b>Institute for Integrative Nutrition</b>. I am the proud recipient
          of IIN's Leadership in Health Coaching Award. October 2019 - IIN's
          Coaching Intensive Practicum in preparation for the NBHWC 2020 Health
          &amp; Wellness Certifying Exam.
        </p>
        <p>
          <b>WellStart Health Wellness Coach</b> - In 2018 I completed a
          five-month health coach training with <b>WellStart Health, Inc.</b>{" "}
          under the direction of <i>Howard Jacobson, PhD</i>. This small-group
          interactive program focused on behavior change and habit formation.
          Introducing these strategies has proven to be a game changer for
          clients and for my practice. Not a therapeutic model, but an
          outcome-oriented approach to making change.
        </p>
        <p>
          <b>National Board Certified Health and Wellness Coach (NBC-HWC)</b> -
          March 2020 I achieved NBHWC Board Certification status, exam
          administered by the National Board of Medical Examiners (NBME).
        </p>
      </section>

      <section class="schedule">
        <h1>Schedule Your Call To Action</h1>
        <p>
          Is the support of a coach what you need?
          <br />
          Contact me today.
        </p>
        <Link to="/contact" class="link.contact">
          <button class="btn.contact">Explore what's possible!</button>
        </Link>
        <img src={headshot} alt="Patty DeMartino headshot"></img>
        <p class="name">Patty DeMartino</p>
        <p class="nbc-hwc">NBC-HWC</p>
      </section>
    </body>
  );
}

export default About;
