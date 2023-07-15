import { ownerApi } from "./axios";
import { userApi } from "./axios";
import { adminApi } from "./axios";

// Get resort details
export const getResortData = async (resortId, role) => {
  try {
    if (role === "admin") {
      const response = await adminApi.get(`/view_resort/${resortId}`);
      return response.data;
    }
    if (role === "owner") {
      const response = await ownerApi.get(`/resortInfo/${resortId}`);
      return response.data;
    }
    if (role === "user") {
      const response = await userApi.get(`/resortInfo/${resortId}`);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// Get locations
export const getLocation = async (role) => {
  try {
    if (role === "owner") {
      const response = await ownerApi.get("/fetch-location");
      return response.data;
    }
    if (role === "admin") {
      const response = await adminApi.get("/fetch-location");
      return response.data;
    } else {
      const response = await userApi.get("/fetch-location");
      return response.data;
    }
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// Get category
export const getCategory = async (role) => {
  try {
    if (role === "owner") {
      const response = await ownerApi.get("/fetch-category");
      return response.data;
    } else if (role === "admin") {
      const response = await adminApi.get("/fetch-category");
      return response.data;
    } else {
      const response = await userApi.get("fetch-category");
      return response.data;
    }
  } catch (error) {
    throw new Error(error.response.status);
  }
};
