import axios from "axios";

const API = axios.create({
  baseURL: "https://people-part-auditor-mixing.trycloudflare.com/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
