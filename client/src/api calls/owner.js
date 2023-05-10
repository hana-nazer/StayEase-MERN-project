import { ownerApi } from "./axios";

//register owner
export const RegisterOwner = async (payload) => {
    try {
      console.log(payload);
      const response = await ownerApi.post("/signup", payload);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };

  export const LoginOwner = async (payload) => {
    try {
      const response = await ownerApi.post("/login", payload);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };


  export const GetCurrentOwner=async()=>{
    try {
      const response =await ownerApi.get('/get-current-owner')
      return response.data
    } catch (error) {
      return error
    }
  }

  export const resortData = async(payload)=>{
    try {
      const response = await ownerApi.post('/resort_register',payload)
      return response.data
    } catch (error) {
      console.log(error);
    }
  }