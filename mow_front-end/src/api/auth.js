import axios from "axios";
import { BASE_URL } from "./constant";

// REGISTER
export const registerAPI = async (user) => {
  return await axios.post(`${BASE_URL}/auth/signup`, {
    email: user.name,
    password: user.password,
    fullname: user.fullname,
    address: user.address,
    userRole: user.role,
  });
};
