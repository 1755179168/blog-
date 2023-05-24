import axios from "./index.js";
export default async function () {
  return await axios.get("/api/category");
}
