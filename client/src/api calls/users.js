import { userApi } from "./axios";

//register a new user
export const RegisterUser = async (payload) => {
  try {
    console.log(payload);
    const response = await userApi.post("/signup", payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// login
export const LoginUser = async (payload) => {
  try {
    const response = await userApi.post("/login", payload);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
