import axios from "axios";
import { BASE_URL } from "./constant";

export const saveFunds = async (token, data) => {
  return await axios.post(`${BASE_URL}/donor/fund`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
