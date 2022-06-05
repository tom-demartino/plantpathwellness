import React from "react";
import { Link } from "react-router-dom";
import "./info.css";

function Info() {
  return (
    <div id="info">
      <div id="window">
        <h1>HEALTH COACHING</h1>
        <div id="bar">
          <p>
            <em>
              <span style={{ fontSize: "larger" }}>
                "A few rewards I've enjoyed thanks to a more mindful
                lifestyle...emerging from the holiday season feeling as well as
                I did before it began, no need for a New Year's resolution to
                lose weight and improve my health. Knowing that last year's
                summer clothes will fit once the weather gets warmer. Feeling
                content with my body. Being free of self-flagellation over food
                and weight. Peace of mind."
              </span>
            </em>
            <br />
            <br />
            <b>- Patty DeMartino</b>
            <br />
            <br />
          </p>
          <p>
            Ready to heal your relationship with food?
            <br />
            <i>
              Learn to <b>love</b> the food that loves you back.
            </i>
          </p>
          <p>
            Want to adopt healthier habits?
            <br />
            <i>
              Create an environment that supports your <b>goals</b>.
            </i>
          </p>
          <p>
            Sugar cravings?
            <br />
            <i>
              Choose treats that <b>satisfy</b>, not sabotage.
            </i>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <span style={{ fontSize: "larger" }}>
                    <b>Your program includes:</b>
                  </span>
                  <ul>
                    <li>One 40-minute session each week</li>
                    <li>Resources specific to your needs and goals</li>
                  </ul>
                </td>
                <td>
                  Is partnering with a health coach for you? I invite you to
                  schedule a{" "}
                  <span class="highlight">FREE 30-minute discovery call</span>{" "}
                  to answer your questions.
                  <br />
                  <br />
                  Ready for a <em>shift</em>?{" "}
                  <Link to="/contact">
                    <span class="highlight" style={{ cursor: "pointer" }}>
                      Let's go!
                    </span>
                  </Link>
                </td>
                <td>
                  <span style={{ fontSize: "larger" }}>
                    <b>Additional services (local clients only):</b>
                  </span>
                  <ul>
                    <li>90-minute supermarket tour</li>
                    <li>2-hour pantry &amp; fridge clean out</li>
                    <li>2-hour hands-on meal prep session</li>
                    <li>Full-day (6 hours) customized support</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Info;
