import axios from "axios";
import { BASE_URL } from "./constant";

const PARTNER_URL = BASE_URL + "/partner";

export const countPartnerTaskAPI = async (token) => {
  return await axios.get(`${PARTNER_URL}/count-partner-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const countMealsAPI = async (token) => {
  return await axios.get(`${PARTNER_URL}/count-meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllMealsAPI = async (token) => {
  return await axios.get(`${PARTNER_URL}/all-meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllPartnerTaskAPI = async (token) => {
  return await axios.get(`${PARTNER_URL}/all-partner-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateMealsStatusAPI = async (token, data) => {
  return await axios.post(`${PARTNER_URL}/order/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
