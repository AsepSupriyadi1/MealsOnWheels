import axios from "axios";
import { BASE_URL } from "./constant";
import { errorAlert, successConfAlert, successReloadAlert } from "../alert/sweetAlert";

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllActivePartners = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-active-partner`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllActiveVolunteer = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-active-volunteer`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL NON ACTIVE PARTNERS REQUEST
export const getAllPartnersRequest = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-partner-request`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL ACTIVE DRIVERS REQUEST
export const getAllActiveDrivers = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-active-driver`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL ACTIVE DRIVERS REQUEST
export const getAllActiveMembers = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-active-member`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL NON ACTIVE DRIVERS REQUEST
export const getAllDriversRequest = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-driver-request`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ACTIVATE USER
export const activateUser = async (token, userId) => {
  return await axios.get(`${BASE_URL}/admin/user/activate/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= MEALS -=-=-=-=-=
export const getAllMealsAPI = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= ADD MEALS -=-=-=-=-=
export const addMealsAPI = async (meals, token) => {
  // mengembalikan alert success / alert gagal untuk prosess registrasi

  return await axios.post(`${BASE_URL}/admin/add-meals`, meals, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllUsers = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-inactive-users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL ACTIVE PARTNERS REQUEST
export const getUserDetails = async (token, userId) => {
  return await axios.get(`${BASE_URL}/admin/users-details/` + userId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET ALL ACTIVE DRIVERS REQUEST
export const getAllOrders = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= MEALS -=-=-=-=-=
export const getAllAvalailableDriver = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-available-driver`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// REGISTER
export const assignPartnerAndDriver = async (token, data) => {
  // mengembalikan alert success / alert gagal untuk prosess registrasi
  return axios.post(`${BASE_URL}/admin/order/assign`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const countAllActiveUserRole = async (token) => {
  return await axios.get(`${BASE_URL}/admin/count-active-role`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= ASSIGN -=-=-=-=-=
export const allDrivers = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-drivers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const allKitchens = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-kitchens`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= FUNDS -=-=-=-=-=
export const allDonations = async (token) => {
  return await axios.get(`${BASE_URL}/admin/all-donations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const totalDonations = async (token) => {
  return await axios.get(`${BASE_URL}/admin/total-donations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// -=-=-=-=-= ORDER -=-=-=-=-=
export const getOrderDetails = async (token, orderId) => {
  return await axios.get(`${BASE_URL}/admin/order/feedback/` + orderId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
