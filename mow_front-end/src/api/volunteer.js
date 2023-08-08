import axios from "axios";
import { BASE_URL } from "./constant";

// DELIVERY
export const getAllDelieryVolunteerTask = async (token) => {
  return await axios.get(`${BASE_URL}/volunteer/all-driver-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const countDeliveryTaskAPI = async (token) => {
  return await axios.get(`${BASE_URL}/volunteer/count-driver-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDeliveryDetailsByID = async (token, orderId) => {
  return await axios.get(`${BASE_URL}/volunteer/delivery-details/` + orderId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateDeliveryTask = async (token, data) => {
  return await axios.post(`${BASE_URL}/volunteer/delivery/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getVolunteerProfileAPI = async (token) => {
  return await axios.get(`${BASE_URL}/volunteer/driver-profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// MEAL REQUEST
export const getAllVolunteerTaskAPI = async (token) => {
  return await axios.get(`${BASE_URL}/volunteer/all-partner-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const countMealTaskAPI = async (token) => {
  return await axios.get(`${BASE_URL}/volunteer/count-partner-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateMealsStatusAPI = async (token, data) => {
  return await axios.post(`${BASE_URL}/volunteer/order/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
