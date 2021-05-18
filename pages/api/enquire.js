import htmlTemplate from "../../utils/htmlTemplates"
import sendEmail from "../../utils/mail";

const validate = (...items) => {
  return items.every(item => item.length > 0 && item.length < 80)
}

export default async (req, res) => {
  if (req.method !== "POST"){
    return res.status(405).json({message: "Invalid method"});
  }

  const customerName = req.body.customerName.trim();
  const customerEmail = req.body.customerEmail.trim();
  const customerPhone = req.body.customerPhone.trim();
  const comments = req.body.comments.trim();
  const courseTitle = req.body.courseTitle.trim();
  
  if (!validate(customerName, customerEmail, customerPhone, courseTitle || comments.length > 1000)){
    return res.status(400).json({message: "Invalid Request"})
  }

  const customerTemplate = htmlTemplate.toCustomer(customerName, courseTitle);
  sendEmail(customerEmail, `Your Enquiry for ${courseTitle}`, customerTemplate);
  const businessTemplate = htmlTemplate.toBusiness(customerName, customerEmail, customerPhone, comments, courseTitle);
  sendEmail(process.env.OUTLOOK_ADDRESS, `New Enquiry for ${courseTitle}`, businessTemplate);

  return res.json({message: "Emails sent"});


}