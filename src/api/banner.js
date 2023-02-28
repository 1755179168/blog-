import axios from "./";
/**
 * banner
 * @param {String} method
 * @param {String} url
 * @returns
 */
export default async function () {
  return await axios({
    method: "get",
    url: "/api/banner",
  });
}
