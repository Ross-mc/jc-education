const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

const sendImage = async base64Img => {
  try {
    const result = await cloudinary.uploader.upload(base64Img, { tags: "receiptUpload" });
    return result.url
  } catch (error) {
    throw new Error("No response from Cloudinary")
  }
  
}

module.exports = {
  sendImage
}