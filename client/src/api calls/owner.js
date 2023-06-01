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
    return error;
  }
};

// resort registration
export const resortData = async (payload) => {
  try {
    const response = await ownerApi.post("/register", payload);
    return response.data;
  } catch (error) {
    return { success: false, message: "An error occurred during the request" };
  }
};

// image upload
// export const uploadImg = async (images) => {
//   console.log(images,"owner");
//   const cloud_name = "dz8verrgd";
//   const upload_preset = "resortimg";
//   const formData = new FormData();
//   for (let i = 0; i < images.length; i++) {
//     console.log(images[i]);
//     formData.append("file", images[i]);
//   }
//   formData.append("upload_preset", upload_preset);
//   try {
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
//       formData
//     );
//   console.log(response);
//     console.log(formData,"formData");
//     const imageUrls = response.data?.secure_url;
//     return imageUrls;
//   } catch (error) {
//     throw error;
//   }
// };



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
