import api from "./api";

export const loginUser = (data) => {
  return api.post("/login", data);
};

export const registerUser = (data) => {
  return api.post("/register", data);
};