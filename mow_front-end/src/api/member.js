import axios from "axios";
import { BASE_URL } from "./constant";

const MEMBER_URL = BASE_URL + "/member";

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllActiveMeals = async (token) => {
  return await axios.get(`${MEMBER_URL}/all-active-meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET Details MEals
export const findMealsById = async (token, mealsId) => {
  return await axios.get(`${MEMBER_URL}/meals/` + mealsId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const requestMeals = async (token, mealId) => {
  return await axios.get(`${MEMBER_URL}/order/` + mealId, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllMemberOrder = async (token) => {
  return await axios.get(`${MEMBER_URL}/all-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
