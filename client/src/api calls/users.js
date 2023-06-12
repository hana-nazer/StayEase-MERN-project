import { userApi } from "./axios";

//register a new user
export const RegisterUser = async (payload) => {
  try {
    const response = await userApi.post("/signup", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// login
export const LoginUser = async (payload) => {
  try {
    const response = await userApi.post("/login", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// getResorts
export const getResorts = async (category) => {
  try {
    const params = {};
    if (category) {
      params.category = category;
    }
    const response = await userApi.get("/resorts", { params });
console.log(response);
    if (category) {
      return { data: response.data, category };
    } else {
      return response.data;
    }
  } catch (error) {
    return error.response;
  }
};


// booking
export const postBooking = async (payload, resortId) => {
  try {
    const response = await userApi.post(`/book/${resortId}`, payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// disabled dates
export const disabledDateList = async (resortId) => {
  try {
    const response = await userApi.get(`/resorts/${resortId}/disableddates`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const response = await userApi.get("/get-current-user");
    return response.data;
  } catch (error) {
    return error.response;
  }
};
