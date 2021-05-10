import jsonwebtoken from "jsonwebtoken";

export default async (req, res) => {
  if (req.method === "GET"){
    console.log('inside the get')
    console.log(req.cookies)
    try {
      const decoded = jsonwebtoken.verify(req.cookies.jwt, process.env.JWT_SECRET);
      console.log("*********************************************************************")
      console.log(decoded)
      return res.json({username: decoded.username})
    } catch (error) {
      return res.json({message: "User is not logged in"})
    }
  } else {
    return res.status(400)
  }
}