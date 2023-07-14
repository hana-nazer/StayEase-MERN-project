import axios from "axios";
import { ownerApi } from "./axios";

//register owner
export const RegisterOwner = async (payload) => {
  try {
    const response = await ownerApi.post("/signup", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// login
export const LoginOwner = async (payload) => {
  try {
    const response = await ownerApi.post("/login", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get current owner
export const GetCurrentOwner = async () => {
  try {
    const response = await ownerApi.get("/get-current-owner");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// resort registration
export const resortData = async (payload) => {
  try {
    const response = await ownerApi.post("/register", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// image upload
export const uploadImg = async (images) => {
  const cloud_name = "dz8verrgd";
  const upload_preset = "resortimg";
  const uploaders = images.map((image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);
    return axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );
  });

  try {
    const responses = await axios.all(uploaders);
    const imageUrls = responses.map((response) => response.data.secure_url);
    return imageUrls;
  } catch (error) {
    throw error;
  }
};

// get resort list
export const getResorts = async () => {
  try {
    const response = await ownerApi.get("/resorts");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// bookings list
export const Bookings = async () => {
  try {
    const response = await ownerApi.get("/bookings");
    return response.data;
  } catch (error) {
    return error;
  }
};

// edit resortData
export const editResort = async (payload,id) => {
  try {
    console.log(payload);
    console.log(id);
    const response = await ownerApi.put(`/edit/${id}`, payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// dashboardInfo
export const dashboardInfo = async () => {
  const response = await ownerApi.get("/dashboard");
  return response.data;
};
