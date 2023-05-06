import axios from "axios";
const api = axios.create({
  baseURL: 'http://167.172.98.30/api/v1',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${ token }`;
  } else {
    config.headers.Authorization = null;
  }
  return config;
});

export default api;
