import axios from "axios";
import { getToken } from "./getToken";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    // Add authorization header with token if available
    ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
  },
});

export default instance;
