// From https://w3collective.com/react-contact-form/
// also https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a

require("dotenv").config({ path: "../.env.local" });
// Load required dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// Use express() to setup server that will run on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Create OAuth client with refresh token to dynamically create access token
const createTransporter = async () => {
  const oauth2Client = new OAuth2({
    clientId: process.env.REACT_APP_OAUTH2_CLIENT_ID,
    clientSecret: process.env.REACT_APP_OAUTH2_CLIENT_SECRET,
    redirectUri: "https://developers.google.com/oauthplayground",
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.REACT_APP_OAUTH2_REFRESH_TOKEN,
  });

  // Get access token
  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token");
      }
      resolve(token);
    });
  });

  // Create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.REACT_APP_PPW_EMAIL,
      accessToken,
      clientId: process.env.REACT_APP_OAUTH2_CLIENT_ID,
      clientSecret: process.env.REACT_APP_OAUTH2_CLIENT_SECRET,
      refresh_token: process.env.REACT_APP_OAUTH2_REFRESH_TOKEN,
    },
  });

  return transporter;
};

// emailOptions - who sends what to whom
const sendEmail = async (emailOptions, err = null) => {
  let emailTransporter = await createTransporter();
  emailTransporter.sendMail(emailOptions, err);
};

// Setup and send the email
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const emailOptions = {
    from: name,
    to: process.env.REACT_APP_PPW_EMAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  sendEmail(emailOptions, err => {
    if (err) {
      res.json({ status: "SERVER ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
