// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import {MongoClient} from "mongodb";
// require("dotenv").config();

// import verifyPassword from "../../../utils/auth/verifyPassword";
// import { session } from "next-auth/client";

// const options = {
//   database: process.env.MONGODB_URI,
//   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//   session: {
//     jwt: true,
//     maxAge: 60//60 seconds
//   },
//   pages: {
//     signIn: "/admin"
//   },
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials){
//         let connection;
//         try {
//           connection = await MongoClient.connect(process.env.MONGODB_URI)
//         } catch (error) {
//           throw new Error("Internal Server Error")
//         }
//         const db = connection.db()
//         try {
//           const user = await db.collection("users").findOne({
//             username: credentials.username
//           });
//           if (!user) {
//             connection.close();
//             throw new Error('Invalid Login Credentials');
//           }
//           const isPasswordValid = await verifyPassword(credentials.password, user.password)
//           if (!isPasswordValid){
//             connection.close();
//             throw new Error("Invalid Login Credentials")
//           }
//           connection.close();
//           return user.username
            
//         } catch (error) {
//           connection.close();
//           throw new Error("Internal Server Error")
//         }
//       }
//     })
//   ],
//   callbacks: {
//     jwt: async (token, user, account, profile, isNewUser) => {
//       console.log('user inside jwt', user)
//       token.user = user;
//       console.log('token inside jwt', token)
//       return Promise.resolve(token)
//     },
//     session: async (session, token) => {
//       console.log('session inside session', session);
//       console.log('token inside session', token);
//       return session
//     }
//   }

  
// };

// export default (req, res) =>  {
//   return NextAuth(req, res, options)
// }