const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.OUTLOOK_ADDRESS,
    pass: process.env.OUTLOOK_PASSWORD,
  },
  from: process.env.OUTLOOK_ADDRESS,
});

export default async function sendEmail(recipient, subject, html) {
  return new Promise((resolve, reject) => {
  const mailOptions = {
    from: process.env.OUTLOOK_ADDRESS,
    to: recipient,
    subject,
    generateTextFromHTML: true,
    html,
  };

  transport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
      transport.close();
      resolve(false)
    } else {
      console.log(res);
      transport.close();
      resolve(true)
    }
  });
  })

}
