import { adminApi } from "./axios";

// Admin login
export const adminLogin = async (payload) => {
  try {
    const response = await adminApi.post("/login", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// pending resort list
export const getPendingResorts = async () => {
  try {
    const response = await adminApi.get("/pending");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// pending resort data
// export const getResortData = async (resortId) => {
//   try {
//     const response = await adminApi.get(`/view_resort/${resortId}`);
//     return response.data;
//   } catch (error) {
//     return { success: false, message: "Failed to retrieve resort details" };
//   }
// };

// resort status
export const resortStatus = async (resortId, action) => {
  try {
    const response = await adminApi.post(`/update_status`, {
      resortId,
      action,
    });
    console.log("api", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update resort status");
  }
};

// resort list
export const resortList = async () => {
  try {
    const response = await adminApi.get("/resorts");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

//get resort data - approved
export const resortInfo =async(resortId)=>{
  try {
    const response = await adminApi.get(`/resortData/${resortId}`)
    return response.data
  } catch (error) {
    return error.response
  }
}


//add location
export const addLocation = async(payload)=>{
  try {
    const response = await adminApi.post('/add_location',payload)
    console.log(payload);
    return response.data
  } catch (error) {
    return error.response
  }
}
