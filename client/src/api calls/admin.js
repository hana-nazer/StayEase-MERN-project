import { adminApi } from "./axios";
import axios from "axios";

// Admin login
export const adminLogin = async (payload) => {
  try {
    const response = await adminApi.post("/login", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// pending resort list
export const getPendingResorts = async () => {
  try {
    const response = await adminApi.get("/pending");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
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
    throw new Error(error.response.status);
  }
};

// resort list
export const resortList = async () => {
  try {
    const response = await adminApi.get("/resorts");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

//get resort data - approved
export const resortInfo = async (resortId) => {
  try {
    const response = await adminApi.get(`/resortData/${resortId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

//add location
export const addLocation = async (payload) => {
  try {
    const response = await adminApi.post("/add_location", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// add category
export const addCategory = async (payload) => {
  try {
    const response = await adminApi.post("/add_category", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// get admin
export const GetCurrentAdmin = async () => {
  try {
    const response = await adminApi.get("/get-current-admin");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// to uplaod category icon
export const uploadImg = async (image) => {
  const cloud_name = "dz8verrgd";
  const upload_preset = "category_icon";

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", upload_preset);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );

    // The uploaded image URL can be accessed from the response
    const imageURL = response.data.secure_url;
    return imageURL;
  } catch (error) {
    throw error;
  }
};

// bookings list
export const Bookings = async () => {
  try {
    const response = await adminApi.get("/bookings");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

export const dashboardDetails = async () => {
  try {
    const response = await adminApi.get("/dashboard");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// get users list
export const usersList = async () => {
  try {
    const response = await adminApi.get("/users");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};
