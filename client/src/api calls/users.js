import { userApi } from "./axios";

//register a new user
export const RegisterUser = async (payload) => {
  try {
    const response = await userApi.post("/signup", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// login
export const LoginUser = async (payload) => {
  try {
    const response = await userApi.post("/login", payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// getResorts
export const getResorts = async (location, category) => {
  try {
    let url = "/resorts";
    if (location && category) {
      url = `/resorts?location=${location}&category=${category}`;
    } else if (location) {
      url = `/resorts?location=${location}`;
    } else if (category) {
      url = `/resorts?category=${category}`;
    }
    const response = await userApi.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// reset password email
export const forgotPassword = async (email) => {
  try {
    const response = await userApi.post("/forgotPassword", { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// reset password
export const resetPassword = async (password, id, token) => {
  const response = await userApi.post(`/resetPassword/${id}/${token}`, {
    password,
  });
  return response.data;
};

// disabled dates
export const disabledDateList = async (resortId) => {
  try {
    const response = await userApi.get(`/resorts/${resortId}/disableddates`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// bookings list
export const Bookings = async () => {
  try {
    const response = await userApi.get("/bookings");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const response = await userApi.get("/get-current-user");
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};




