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
// export const resortData = async (payload) => {
//   try {
//     console.log("resortdata");
//     const response = await ownerApi.post("/resort_register", payload);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };


export const resortData = async (payload) => {
  try {
    const response = await ownerApi.post("/resort_register", payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred during the request" };
  }
};


// upload image
export const uploadImg = async (images) => {
  console.log(images);
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append("files", images[i]);
  }
  formData.append("upload_preset", "project2");
  try {
console.log("enetr");
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dvbclu2mg/image/upload`,
      formData
    );
console.log(response,"---------");
    const imageUrls = response.data?.secure_url;
    console.log(imageUrls, "urls");

    return imageUrls;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
