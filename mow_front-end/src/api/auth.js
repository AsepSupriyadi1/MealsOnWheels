import axios from "axios";
import { BASE_URL } from "./constant";
import { errorAlert, successConfAlert } from "../alert/sweetAlert";

// REGISTER
export const registerAPI = async (user) => {
  axios
    .post(`${BASE_URL}/auth/register`, user)
    .then((response) => {
      successConfAlert("Success", `${response.data.messages}`, "/login");
    })
    .catch((err) => {
      errorAlert("Error Occured", err.response.data.messages);
    });
};

// REGISTER
export const loginAPI = async (user, userCtx, navigate) => {
  await axios
    .post(`${BASE_URL}/auth/authenticate`, user)
    .then((response) => {
      let token = response.data.token;
      let redirectUrl;
      userCtx(token);

      switch (response.data.role) {
        case "MEMBER":
          redirectUrl = "/member";
          break;
        case "PARTNER":
          redirectUrl = "/partner";
          break;
        case "DRIVER":
          redirectUrl = "/driver";
          break;
        case "ADMIN":
          redirectUrl = "/admin";
          break;

        default:
          navigate("/");
          break;
      }
      successConfAlert("Success", "Login Successfull", navigate(redirectUrl));
      console.log(token);
    })
    .catch((err) => {
      errorAlert("Error Occured", "User not found");
    });
};

// GET USER FROM TOKEN
export const getUserLoginAPI = async (token) => {
  return await axios.get(`${BASE_URL}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
