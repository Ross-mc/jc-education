export default {
  toCustomer: (customerName, courseTitle) => {
    return `<style>
    body{
      margin: 0 auto;
      padding: 0;
    }
    .banner, .email {
      font-family: Arial, Helvetica, sans-serif;
    }
    .banner {
      text-align: center;
      height: 8vh;
      line-height: 8vh;
      color: hsl(334, 82%, 50%);
      background-color: hsl(265, 50%, 95%);
    }
    .email{
      width: 80%;
      margin: 0 auto;
      max-width: 600px;
    }
  </style>
  <div class="banner">
    <h1>Jacki Clarke Education</h1>
  </div>
  <div class="email">
    <h1>Hi ${customerName},</h1>
    <p>Thank you for your enquiry regarding ${courseTitle}.</p>
    <p>I'll be in touch shortly with more information.</p>
    <p><strong>Jacki</strong></p>
    <p><small>This is an automated email, please do not reply</small></p>
  </div>
  `
  },
  toBusiness: (customerName, customerEmail, customerPhone, comments, courseTitle, ) => {
    return `<style>
    body{
      margin: 0 auto;
      padding: 0;
    }
    .banner, .email {
      font-family: Arial, Helvetica, sans-serif;
    }
    .banner {
      text-align: center;
      height: 8vh;
      line-height: 8vh;
      color: hsl(334, 82%, 50%);
      background-color: hsl(265, 50%, 95%);
    }
    .email{
      width: 80%;
      margin: 0 auto;
      max-width: 600px;
    }
  </style>
  <div class="banner">
    <h1>Jacki Clarke Education</h1>
  </div>
  <div class="email">
    <h1>Hi Jacki,</h1>
    <p>You have had a new inquiry regarding ${courseTitle}.</p>
    <p>The customer details are as follows:</p>
    <h3>Name: </h3>
    <p>${customerName}</p>
    <h3>Email: </h3>
    <p>${customerEmail}</p>
    <h3>Phone Number: </h3>
    <p>${customerPhone}</p>
    <h3>Further comments: </h3>
    <p>${comments.length > 0 ? comments : "No comments provided"}</p>
  </div>
  `
  }
}