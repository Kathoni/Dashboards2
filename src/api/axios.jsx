import axios from "axios";

const ACCOUNTS_URL = "";

export default axios.create({
  baseURL: ACCOUNTS_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const accountsAPI = axios.create({
  baseURL: ACCOUNTS_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});