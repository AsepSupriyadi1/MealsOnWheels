import axios from "axios";
import { BASE_URL } from "./constant";

const DRIVER_URL = BASE_URL + "/driver";

export const countDriverTaskAPI = async (token) => {
  return await axios.get(`${DRIVER_URL}/count-driver-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDriverProfileAPI = async (token) => {
  return await axios.get(`${DRIVER_URL}/driver-profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllDriverTask = async (token) => {
  return await axios.get(`${DRIVER_URL}/all-driver-task`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDeliveryDetailsByID = async (token, orderId) => {
  return await axios.get(`${DRIVER_URL}/delivery-details/` + orderId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateDeliveryTask = async (token, orderId, status) => {
  return await axios.get(`${DRIVER_URL}/order/` + orderId + `/update?deliveryStatus=` + status, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
