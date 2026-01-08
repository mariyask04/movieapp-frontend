import axios from "axios";

const API = axios.create({
  baseURL: "https://2bbat3sxpl.execute-api.eu-north-1.amazonaws.com/prod/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
