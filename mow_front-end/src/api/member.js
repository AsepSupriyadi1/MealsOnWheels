import axios from "axios";
import { BASE_URL } from "./constant";

const MEMBER_URL = BASE_URL + "/member";

// GET ALL ACTIVE PARTNERS REQUEST
export const getAllActiveMeals = async (token) => {
  return await axios.get(`${MEMBER_URL}/all-active-meals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
