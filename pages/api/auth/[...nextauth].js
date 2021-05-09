import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {MongoClient} from "mongodb";
require("dotenv").config();

import verifyPassword from "../../../utils/auth/verifyPassword";

const options = {
  database: process.env.MONGODB_URI,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  session: {
    jwt: true
  },
  pages: {
    signIn: "/admin"
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials){
        let connection;
        try {
          connection = await MongoClient.connect(process.env.MONGODB_URI)
        } catch (error) {
          throw new Error("Internal Server Error")
        }
        const db = connection.db()
        try {
          const user = await db.collection("users").findOne({
            username: credentials.username
          });
          if (!user) {
            connection.close();
            throw new Error('Invalid Login Credentials');
          }
          const isPasswordValid = await verifyPassword(credentials.password, user.password)
          if (!isPasswordValid){
            connection.close();
            throw new Error("Invalid Login Credentials")
          }
          connection.close();
          console.log(user);
          return {user: user.username}
        } catch (error) {
          connection.close();
          throw new Error("Internal Server Error")
        }
      }
    })
  ]

  
};

export default (req, res) =>  {
  return NextAuth(req, res, options)
}