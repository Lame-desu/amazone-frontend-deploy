import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazone-api-deployment-v3q6.onrender.com",
});

export { axiosInstance };
