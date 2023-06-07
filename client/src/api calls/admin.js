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

// resort status
export const resortStatus = async (resortId, action) => {
  try {
    const response = await adminApi.post(`/update_status`, {
      resortId,
      action,
    });
    return response.data;
  } catch (error) {
    return error.response;
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
export const resortInfo = async (resortId) => {
  try {
    const response = await adminApi.get(`/resortData/${resortId}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

//add location
export const addLocation = async (payload) => {
  try {
    const response = await adminApi.post("/add_location", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get admin
export const GetCurrentAdmin = async () => {
  try {
    const response = await adminApi.get("/get-current-admin");
    return response.data;
  } catch (error) {
    return error;
  }
};
