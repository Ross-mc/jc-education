import htmlTemplate from "../../utils/htmlTemplates"
import { validateEnquiry } from "../../utils/htmlTemplates/validateEnquiry";
import sendEmail from "../../utils/mail";


export default async (req, res) => {
  if (req.method !== "POST"){
    return res.status(405).json({message: "Invalid method"});
  }

  const customerName = req.body.customerName.trim();
  const customerEmail = req.body.customerEmail.trim();
  const customerPhone = req.body.customerPhone.trim();
  const comments = req.body.comments.trim();
  const courseTitle = req.body.courseTitle.trim();
  
  if (!validateEnquiry(customerName, customerEmail, customerPhone, courseTitle || comments.length > 1000)){
    return res.status(400).json({message: "Invalid Request"})
  }

  //Nodemailer uses error first callbacks. I need to await the email call so that I can send to the business (concurrent connection issue)
  //Therefore I have wrapped the sendEmail func in a Promise Wrapper.
  //The promise ALWAYS resolves, even if the email failed. However, it resolves to false if it wasnt successful.
  //Therefore there is no need to try catch as the promise is never rejected.
  //but we can check the result and return a 500 if the emails didnt send
  const customerTemplate = htmlTemplate.toCustomer(customerName, courseTitle);
  const wasSuccessfulToCustomer = await sendEmail(customerEmail, `Your Enquiry for ${courseTitle}`, customerTemplate);
  const businessTemplate = htmlTemplate.toBusiness(customerName, customerEmail, customerPhone, comments, courseTitle);
  const wasSuccessfulToBusiness = await sendEmail(process.env.GMAIL_ADDRESS, `New Enquiry for ${courseTitle}`, businessTemplate);

  if (!wasSuccessfulToBusiness || !wasSuccessfulToCustomer){
    return res.status(500).json({message: "Internal Server Error"})
  }

  return res.json({message: "Emails sent"});


}