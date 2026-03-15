import api from "./api";

export const sendMessage = (data) => {
  return api.post("/messages", data);
};

export const getMessages = (chatId) => {
  return api.get(`/messages/${chatId}`);
};