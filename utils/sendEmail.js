// const nodeMailer = require("nodemailer");
// const {OAuth2Client} = require("google-auth-library");
// // import { OAuth2Client } from "google-auth-library";



// const sendEmail = async (options) => {

//   const APP_PORT = 3000
//   const APP_HOST = 'localhost'

//   const myOAuth2Client = new OAuth2Client(
//     process.env.GOOGLE_MAILER_CLIENT_ID,
//     process.env.GOOGLE_MAILER_CLIENT_SECRET
//   )

//   // Set Refresh Token vào OAuth2Client Credentials
//   myOAuth2Client.setCredentials({
//     refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN
//   })

//   const myAccessTokenObject = await myOAuth2Client.getAccessToken();
//   const myAccessToken = myAccessTokenObject?.token

//   const transporter = nodeMailer.createTransport({

//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: process.env.ADMIN_EMAIL_ADDRESS,
//       clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
//       refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
//       accessToken: myAccessToken}

//     // host: process.env.SMTP_HOST,
//     // port: process.env.SMTP_PORT,
//     // service: process.env.SMTP_SERVICE,
//     // auth: {
//     //   user: process.env.SMTP_MAIL,
//     //   pass: process.env.SMTP_PASSWORD,
//     // },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;

const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;