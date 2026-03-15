import api from "./api";

export const sendRequest = (data) => {
  return api.post("/requests", data);
};

export const getRequests = () => {
  return api.get("/requests");
};