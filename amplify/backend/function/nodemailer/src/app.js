const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const aws = require("aws-sdk");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-west-1",
  defaultProvider,
});

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Create OAuth client with refresh token to dynamically create access token
const createTransporter = async () => {
  // get secrets
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: [
        "OAUTH2_CLIENT_ID",
        "OAUTH2_CLIENT_SECRET",
        "OAUTH2_REFRESH_TOKEN",
      ].map(secretName => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();

  const mySecrets = {};
  Parameters.forEach(secret => {
    mySecrets[secret.Name] = secret.Value;
  });

  const OAUTH2_CLIENT_ID = mySecrets[process.env.OAUTH2_CLIENT_ID];
  const OAUTH2_CLIENT_SECRET = mySecrets[process.env.OAUTH2_CLIENT_SECRET];
  const OAUTH2_REFRESH_TOKEN = mySecrets[process.env.OAUTH2_REFRESH_TOKEN];

  const oauth2Client = new OAuth2({
    clientId: OAUTH2_CLIENT_ID,
    clientSecret: OAUTH2_CLIENT_SECRET,
    redirectUri: "https://plantpathwellness.com/contact",
  });

  oauth2Client.setCredentials({
    refresh_token: OAUTH2_REFRESH_TOKEN,
  });

  // Get access token
  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.log(err);
        reject("Failed to create access token");
      }
      resolve(token);
    });
  });

  // Create transporter object
  const transporter = nodemailer.createTransport({
    SES: { ses, aws },
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.PPW_BACKEND_EMAIL,
      accessToken,
      clientId: OAUTH2_CLIENT_ID,
      clientSecret: OAUTH2_CLIENT_SECRET,
      refresh_token: OAUTH2_REFRESH_TOKEN,
    },
  });

  return transporter;
};

// emailOptions - who sends what to whom
const sendEmail = async (emailOptions, err = null) => {
  let emailTransporter = await createTransporter();
  emailTransporter.sendMail(emailOptions, err);
};

app.post("/express", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const emailOptions = {
    from: process.env.PPW_BACKEND_EMAIL,
    to: process.env.PPW_EMAIL,
    subject: "Contact Form Submission".concat(" - ", name),
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  sendEmail(emailOptions, err => {
    if (err) {
      console.log(err);
      res.json({ status: "SERVER ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.post("/express/*", function (req, res) {
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.get("/express", function (req, res) {
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/express/*", function (req, res) {
  res.json({ success: "get call succeed!", url: req.url });
});

app.put("/express", function (req, res) {
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/express/*", function (req, res) {
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.delete("/express", function (req, res) {
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/express/*", function (req, res) {
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(5000, function () {
  console.log("App started");
});

module.exports = app;
