import {adminApi} from './axios'

// Admin login
export const adminLogin = async (payload) => {
    try {
      const response = await adminApi.post("/login", payload);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };