import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {MongoClient} from "mongodb";
require("dotenv").config();

import verifyPassword from "../../utils/auth/verifyPassword";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorise(credentials){
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
          return {user: user.username}
        } catch (error) {
          connection.close();
          throw new Error("Internal Server Error")
        }
      }
    })
  ]
})