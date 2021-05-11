import jsonwebtoken from "jsonwebtoken";

export default async (req, res) => {
  if (req.method === "GET"){
    try {
      const decoded = jsonwebtoken.verify(req.cookies.jwt, process.env.JWT_SECRET);
      return res.json({username: decoded.username})
    } catch (error) {
      return res.json({message: "User is not logged in"})
    }
  } else {
    return res.status(405).json({message: "Method not allowed"})
  }
}