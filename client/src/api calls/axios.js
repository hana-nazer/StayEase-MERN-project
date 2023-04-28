import axios from "axios";

export const userApi = axios.create({
    baseURL: 'http://localhost:5000',
});

userApi.interceptors.request.use((req) => {
    if (localStorage.getItem("userToken")) {
        req.headers.Authorization = "Bearer " + localStorage.getItem("userToken");
    }
    return req;
});

