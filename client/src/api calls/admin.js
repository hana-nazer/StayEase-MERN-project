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
export const getPendingResortData = async (resortId) => {
  try {
    const response = await adminApi.get(`/view_resort/${resortId}`);
    return response.data;
  } catch (error) {
    return { success: false, message: "Failed to retrieve resort details" };
  }
};
