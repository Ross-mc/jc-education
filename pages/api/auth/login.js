import { MongoClient } from "mongodb";
import verifyPassword from "../../../utils/auth/verifyPassword";
import jsonwebtoken from "jsonwebtoken";
import { serialize } from "cookie";
require("dotenv").config();

const JWT_EXPIRY = parseInt(process.env.JWT_EXPIRY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = JSON.parse(req.body);
    let connection;
    try {
      connection = await MongoClient.connect(process.env.MONGODB_URI);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    const db = connection.db();
    try {
      const user = await db.collection("users").findOne({
        username,
      });
      if (!user) {
        connection.close();
        return res.status(401).json({ message: "Invalid Login Credentials" });
      }
      const isPasswordValid = await verifyPassword(password, user.password);
      if (!isPasswordValid) {
        connection.close();
        return res.status(401).json({ message: "Invalid Login Credentials" });
      }
      connection.close();
      const token = jsonwebtoken.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: JWT_EXPIRY + "s",
      });
      const cookieOptions = {
        maxAge: JWT_EXPIRY,
        httpOnly: true,
        path: "/"
      };
      res.setHeader("Set-Cookie", serialize("jwt", token, cookieOptions));
      res.json({ message: "Success!", user: user.username });
    } catch (error) {
      connection.close();
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({message: "Method not allowed"})
  }
};
