import {compare} from "bcryptjs";

export default async function(password, hashedPassword) {
  const isPasswordValid = await compare(password, hashedPassword);
  return isPasswordValid
}