import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const adminApi = axios.create({
  baseURL: "http://localhost:5000/admin",
});

export const ownerApi = axios.create({
  baseURL: "http://localhost:5000/owner",
});

userApi.interceptors.request.use((req) => {
  if (localStorage.getItem("user_token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("user_token");
  }
  return req;
});

adminApi.interceptors.request.use((req) => {
  if (localStorage.getItem("admin_token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("admin_token");
  }
  return req;
});

ownerApi.interceptors.request.use((req) => {
  if (localStorage.getItem("owner_token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("owner_token");
  }
  return req;
});
