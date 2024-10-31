/* eslint-disable no-unused-vars */
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "RJS1-202309",
  },
});

export const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202409",
    },
    body: JSON.stringify(data),
  });
  return res.data;
};
export const register = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202409",
    },
  });
  return res.data;
};

export const queryAI = async (data, token) => {
  const res = await axios.post(`${API_URL}/query`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202409",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const logout = async (token) => {
  const res = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "RJS1-202409",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
