import axios from "axios";
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

// login
export const LoginOwner = async (payload) => {
  try {
    const response = await ownerApi.post("/login", payload);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const GetCurrentOwner = async () => {
  try {
    const response = await ownerApi.get("/get-current-owner");
    return response.data;
  } catch (error) {
    return error;
  }
};

// resort registration
export const resortData = async (payload) => {
  try {
    const response = await ownerApi.post("/resort_register", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// upload image
export const uploadImg = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "project2");
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dvbclu2mg/image/upload`,
    formData
  );

  let imageUrl = data?.secure_url;

  console.log(imageUrl, "url");
  return imageUrl;
};
