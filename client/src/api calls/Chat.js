import { userApi } from "./axios";
import { ownerApi } from "./axios";

export const getChats = async (id, role) => {
  try {
    if (role === "user") {
      const response = await userApi.get(`/contacts/${id}`);
      return response.data;
    }
    if (role === "owner") {
      const response = await ownerApi.get(`/contacts/${id}`);
      return response.data;
    }
  } catch (error) {}
};

export const getMessages = async (role, currentUser, chatUser) => {
  try {
    if (role === "user") {
      const response = await userApi.post(`/getMessage`, {
        from: currentUser,
        to: chatUser,
      });
      return response.data;
    }
    if (role === "owner") {
      const response = await ownerApi.post(`/getMessage`, {
        from: currentUser,
        to: chatUser,
      });
      return response.data;
    }
  } catch (error) {}
};

export const sendMessages = async (
  role,
  currentUser,
  chatUser,
  message,
  model
) => {
  try {
    let response;
    if (role === "user") {
      response = await userApi.post(`/addMessage`, {
        from: currentUser,
        to: chatUser,
        message: message,
        model: model,
      });
      return response.data;
    }

    if (role === "owner") {
      response = await ownerApi.post(`/addMessage`, {
        from: currentUser,
        to: chatUser,
        message: message,
        model: model,
      });
    }
  } catch (error) {}
};
