import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import wonton from "../../src/images/wonton.jpg";
import waterGlass from "../../src/images/water-glass.png";
import spoons from "../../src/images/spoons.jpg";

function Home() {
  const sliderSettings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="homepage">
        <div id="div1">
          <div className="content-container">
            <p id="approach"> a behavior-based approach to creating change</p>
            <p id="habits">
              [small] HABITS + CONSISTENCY = MEANINGFUL OUTCOMES
            </p>
            <Link to="/info" id="link">
              <button className="myButton" id="btn">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div id="div2">
          <div className="content-container">
            <div className="wrapper">
              <div>stress tolerance</div>
              <div>mood</div>
              <div>bingeing</div>
              <div>energy</div>
              <div>sleep</div>
              <div>emotional eating</div>
            </div>
            <span id="coaching">REAL-WORLD COACHING</span>
          </div>
        </div>
        <div id="div3">
          <div className="content-container">
            <span style={{ fontSize: "1.5em" }}>
              Ready to create a health <em>shift</em>?{" "}
            </span>
            <br />
            Women 40+...this is for you! Love to end your day with energy to
            spare, release unwanted pounds, sleep well and manage stress
            effectively? Yes, it's possible. A coach can help when change feels
            hard.
          </div>
        </div>
        <div id="div4"></div>
        <div id="div5">
          <div className="content-container">
            <div className="wrapper">
              <div>
                <img src={wonton} alt="wontons" />
                <br />
                LIFESTYLE
              </div>
              <div>
                <img src={waterGlass} alt="glass of water" />
                <br />
                BALANCE
              </div>
              <div>
                <img src={spoons} alt="spoons" />
                <br />
                MEAL PREP
              </div>
            </div>
          </div>
        </div>
        <div id="div6">
          <div className="content-container">
            <p>
              Here's what clients say about{" "}
              <span style={{ color: "green" }}>Plant</span>
              <span style={{ color: "greenyellow" }}>Path</span>{" "}
              <span style={{ color: "rgb(200, 200, 200)" }}>Wellness</span>
            </p>
            <Slider {...sliderSettings}>
              <div>
                <h2>"You have truly inspired me, Patty!"</h2>
              </div>
              <div>
                <h2>"I'm LOVING it! And I am so grateful to you."</h2>
              </div>
              <div>
                <h2>
                  "The more you eat this way, the more you want to eat this
                  way."
                </h2>
              </div>
            </Slider>
          </div>
        </div>
        <div id="div7">
          <div className="content-container">
            <div className="wrapper">
              <div>
                <img
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/plantpathwellness/eCornell_Grad_badge/eCornell_Grad_badge_260x95.png"
                  alt="Plant-Based Nutrition Certification Program graduate"
                />
              </div>
              <div>
                <img
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/plantpathwellness/NBC-HWC-logo-PMS3035-300x300/NBC-HWC-logo-PMS3035-300x300_300x300.png"
                  alt="National Board Certified Wellness Coach"
                />
              </div>
              <div>
                <img
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/plantpathwellness/IIN_HealthCoach_badge-small_copy3.png"
                  alt="Institute for Integrative Nutrition"
                />
              </div>
              <div>
                <img
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/plantpathwellness/WellStart_Digital_Badge-small_copy10.jpeg"
                  alt="Wellstart Coach"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
