import { ownerApi } from "./axios";
import { userApi } from "./axios";
import { adminApi } from "./axios";

// Get resort details
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
      throw new Error("Invalid role entry");
    }
  } catch (error) {
    return { success: false, message: "Failed to retrieve resort details" };
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
    }
  } catch (error) {
    return { success: false, message: "Failed to fetch location" };
  }
};

// Get category
export const getCategory = async (role) => {
  try {
    if (role === "owner") {
      const response = await ownerApi.get("/fetch-category");
      return response.data;
    }
    if (role === "admin") {
      const response = await adminApi.get("/fetch-category");
      return response.data;
    }
  } catch (error) {
    return { success: false, message: "Failed to fetch category" };
  }
};
