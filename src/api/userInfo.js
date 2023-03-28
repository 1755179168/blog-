import axios from "./";
export default async function getUserInfo() {
  return await axios.get("/api/userInfo");
}
