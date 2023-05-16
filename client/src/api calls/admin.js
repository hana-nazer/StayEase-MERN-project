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


  export const getPendingResorts = async()=>{
    try {
      const response = await adminApi.get('/pending')
      return response.data
    } catch (error) {
      console.log(error.response);
      return error.response
    }
  }