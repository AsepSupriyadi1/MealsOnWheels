import axios from "axios";
import { BASE_URL } from "./constant";

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllActivePartners = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-active-partner`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL NON ACTIVE PARTNERS REQUEST
export const getAllNonActivePartners = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-notactive-partner`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ACTIVATE USER
export const activateUser = async (token, userId) => {
  return await axios.get(`${BASE_URL}/admin/user/activate/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
