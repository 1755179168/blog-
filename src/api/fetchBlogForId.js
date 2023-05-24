import axios from "./";
export default async function (id) {
  return axios.get("api/blogForId", { params: { id } });
}
