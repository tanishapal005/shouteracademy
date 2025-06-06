// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // API base
});

export default axiosInstance;

