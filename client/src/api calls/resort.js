import { ownerApi } from "./axios";
import { userApi } from "./axios";
import { adminApi } from "./axios";

export const getResortData = async (resortId, role) => {
  try {
    if (role === "admin") {
      const response = await adminApi.get(`/view_resort/${resortId}`);
      return response.data;
    } else if (role === "owner") {
      const response = await ownerApi.get(`/resortInfo/${resortId}`);
      return response.data;
    } else if (role === "user") {
      const response = await userApi.get(`/resortInfo/${resortId}`);
      return response.data;
    } else {
      console.log("invalid entry");
    } 
  } catch (error) {
    return { success: false, message: "Failed to retrieve resort details" };
  }
};

export const getLocation = async(role)=>{
  try {
    if(role==="owner"){
      const response = await ownerApi.get('/fetch-location');
      return response.data;
    }
    if(role==="admin"){
      const response = await adminApi.get('/fetch-location');
      console.log("hello");
      console.log("geLocation",response);
      return response.data;
    }
  } catch (error) {
    return error.message
  }
}
