import { MongoClient } from "mongodb";
import jsonwebtoken from "jsonwebtoken";
import { sendImage } from "../../utils/cloudinary";
require("dotenv").config();

const stopWords = ["of", "is", "a", "the"];

const createSlug = title => {
  const words = title.split(" ");
  const filteredWords = words.filter(word => !stopWords.includes(word));
  return filteredWords.join("-");
}

const postHandler = async (blogPost) => {
  const { title, base64Img, text } = blogPost;
  let imageUrl;
  if (base64Img === "placeholder" || base64Img.length === 0) {
    imageUrl = "https://res.cloudinary.com/reduce-waste/image/upload/v1621350306/psxiyjschqdvtfgtpmqj.jpg";
  } else {
    try {
      imageUrl = await sendImage(base64Img);
    } catch (error) {
      throw new Error(error);
    }
  }

  const newPost = {
    title,
    imageUrl,
    text,
    date: Date(),
    slug: createSlug(title)
  };

  let connection;

  try {
    connection = await MongoClient.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Internal Server Error");
  }
  const db = connection.db();
  try {
    const result = await db.collection("blogPosts").insertOne(newPost);
    connection.close();
    return result;
  } catch (error) {
    connection.close();
    throw new Error("Internal Server Error");
  }
};

const getHandler = async () => {
  let connection;

  try {
    connection = await MongoClient.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Internal Server Error");
  }
  const db = connection.db();

  try {
    const blogPostsCollection = db.collection("blogPosts");
    const blogPosts = await blogPostsCollection
      .find({})
      .sort({ date: -1 })
      .toArray();
    connection.close();
    return blogPosts;
  } catch (error) {
    connection.close();
    throw new Error("Internal Server Error");
  }
};

const checkIfValidUser = (jwtCookie) => {
  try {
    const decoded = jsonwebtoken.verify(jwtCookie, process.env.JWT_SECRET);
    return decoded.username ? true : false;
  } catch (error) {
    return false;
  }
};

export default async (req, res) => {
  if (req.method === "POST") {
    const isValidUser = checkIfValidUser(req.cookies.jwt);
    if (!isValidUser) {
      return res.status(401).json({ message: "Not authorised" });
    }

    const { title, base64Img, text } = req.body;
    if (!title.trim() || !base64Img.trim() || !text.trim()) {
      return res.status(400).json({ message: "Invalid Post" });
    }
    try {
      const result = await postHandler({ title, base64Img, text });
      return res.status(201).json({ message: "Success!" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const blogPosts = await getHandler();
      return res.status(200).json({ blogPosts });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Invalid method" });
  }
};
