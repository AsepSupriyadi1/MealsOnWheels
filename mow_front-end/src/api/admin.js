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
    headers: { Authorization: `Bearer ${token}` },
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
