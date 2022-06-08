import React from "react";
import "./footer.css";
import fbLogo from "../../../src/images/fb-logo.webp";
import instaLogo from "../../../src/images/insta-logo.webp";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="content-container">
          <div id="social-links">
            <a
              href="http://facebook.com/Plant-Path-Wellness"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbLogo} alt="Facebook logo" />
            </a>
            <a
              href="http://instagram.com/plantpathwellness"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaLogo} alt="Instagram logo" />
            </a>
          </div>
          <div id="textbox">
            <p>
              <span id="copyright">
                Copyright 2022. All RIghts Reserved | PlantPath Wellness
              </span>
            </p>
            <p>
              <span id="disclaimer">Disclaimer</span>
            </p>
            <p>
              *Patty DeMartino provides education, guidance and support, as well
              as information related to individual health and holistic goals and
              concerns. While holistic care and nutrition can be complementary
              to professional medical care, holistic health care is not a
              substitute for the diagnosis, treatment or care of a disease or
              condition by a medical provider. Patty is not a physician, health
              care professional or nutritionist. Holistic health care
              evaluation, consultation and coaching are not intended for the
              diagnosis of a disease or condition, and any assessment tools are
              intended solely as a guide to developing an appropriate health
              program, set goals, and to monitor progress.
            </p>
            <p className="otherInfo">
              * Bio-IINdividuality, Could One Conversation Change Your Life?,
              Integrative Nutrition and Institute for Integrative Nutrition are
              trademarks owned by Integrative Nutrition Inc.
            </p>
            <p className="otherInfo">
              † © 2005 Integrative Nutrition Inc. (used with permission) †† ©
              2007 Integrative Nutrition Inc. (used with permission)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
