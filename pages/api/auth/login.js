import {MongoClient} from "mongodb";
import verifyPassword from "../../../utils/auth/verifyPassword";
import jsonwebtoken from "jsonwebtoken";
import {serialize} from "cookie"
require("dotenv").config();


export default async (req, res) => {
  const { username, password } = JSON.parse(req.body);
  let connection;
  try {
    connection = await MongoClient.connect(process.env.MONGODB_URI);
  } catch (error) {
    return res.status(500).json({message: "Internal Server Error"});
  }
  const db = connection.db();
  try {
    const user = await db.collection("users").findOne({
      username,
    });
    if (!user) {
      connection.close();
      return res.status(401).json({message: "Invalid Login Credentials"});
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      connection.close();
      return res.status(401).json({message: "Invalid Login Credentials"});
    }
    connection.close();
    const token = jsonwebtoken.sign({username}, process.env.JWT_SECRET, {expiresIn: "60s"})
    const cookieOptions = {
      maxAge: 60,
      httpOnly: true
    }
    res.setHeader("Set-Cookie", serialize("jwt", token, cookieOptions));
    res.json({message: "Success!", user: user.username});

  } catch (error) {
    connection.close();
    return res.status(500).json({message: "Internal Server Error"});
  }
};
