import { userApi } from "./axios";

//register a new user
export const RegisterUser = async (payload) => {
  try {
    console.log(payload);
    const response = await userApi.post("/signup", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// login
export const LoginUser = async (payload) => {
  try {
    const response = await userApi.post("/login", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// getResorts
export const getResorts = async () => {
  try {
    const response = await userApi.get("/resorts");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// booking
export const postBooking = async (payload, resortId) => {
  try {
    console.log("hello");
    const response = await userApi.post(`/book/${resortId}`, payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
