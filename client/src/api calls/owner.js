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
    console.log(resortData);
    const response = await ownerApi.post("/register", payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred during the request" };
  }
};


// upload image
// export const uploadImg = async (images) => {
//   console.log(images);
//   const formData = new FormData();
//   console.log(formData,"formdata");
//   for (let i = 0; i < images.length; i++) {
//     formData.append("files", images[i]);
//   }
//   formData.append("upload_preset", "project2");
//   console.log(formData,"after");
//   try {
// console.log("enetr");
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/dvbclu2mg/image/upload`,
//       formData
//     );
// console.log(response,"---------");
//     const imageUrls = response.data?.secure_url;
//     console.log(imageUrls, "urls");

//     return imageUrls;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


export const uploadImg = async (images) => {
  console.log(images)
  const cloud_name = "dvbclu2mg";
  const upload_preset = "project2";

  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append("file", images[i]);
  }
  formData.append("upload_preset", upload_preset);
// console.log("apped");
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );
console.log(response,"response");
    const imageUrls = response.data?.secure_url;
    return imageUrls;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
