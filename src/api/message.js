import axios from "./";
export async function getMessage(page = 1, limit = 10) {
  return await axios.get("/api/message", {
    params: {
      limit,
      page,
    },
  });
}
export async function postMessage(info) {
  return await axios.post("/api/message", {
    ...info,
  });
}
