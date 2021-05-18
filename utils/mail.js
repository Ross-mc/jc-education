const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.OUTLOOK_ADDRESS,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

export default function sendEmail(recipient, subject, html) {
  const mailOptions = {
    from: process.env.OUTLOOK_ADDRESS,
    to: recipient,
    subject,
    generateTextFromHTML: true,
    html
  };

  transport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
}
