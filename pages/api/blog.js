import {MongoClient} from "mongodb";
require("dotenv").config()

const postHandler = async (blogPost) => {
  const {title, base64Img, text} = blogPost;
  const newPost = {
    title,
    base64Img,
    text,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "2-digit"
    })
  }

  let connection;

  try {
    connection = await MongoClient.connect(process.env.MONGODB_URI)
  } catch (error) {
    throw new Error("Internal Server Error")
  }
  const db = connection.db()
  try {
    const result = await db.collection("blog-posts").insertOne(newPost);
    connection.close();
    return result
  } catch (error) {
    connection.close();
    throw new Error("Internal Server Error")
  }

}

export default async (req, res) => {
  if (req.method === "POST"){
    const {title, base64Img, text} = req.body;
    if (!title.trim() || !base64Img.trim() || !text.trim()){
      return res.status(400).json({message: "Invalid Post"})
    }
    try {
      const result = await postHandler({title, base64Img, text});
      return res.status(201).json({message: "Success!"})
    } catch (error) {
      return res.status(500).json({message: "Internal Server Error"})
    }
  }
}