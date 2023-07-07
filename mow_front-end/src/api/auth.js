import axios from "axios";
import { BASE_URL } from "./constant";
import { errorAlert, successConfAlert } from "../alert/sweetAlert";

// REGISTER
export const registerAPI = async (user, navigate) => {
  // mengembalikan alert success / alert gagal untuk prosess registrasi
  axios
    .post(`${BASE_URL}/auth/register`, user)
    .then((response) => {
      successConfAlert("Success", `${response.data.messages}`);
      navigate("/login");
    })
    .catch((err) => {
      errorAlert("Error Occured", err.response.data.messages);
    });
};

// REGISTER
export const loginAPI = async (user, userCtx, navigate, setError, setModalShow) => {
  // CALL LOGIN API
  await axios
    .post(`${BASE_URL}/auth/authenticate`, user)
    .then((response) => {
      // IF SUCCESS, TAKE THE TOKEN
      let token = response.data.token;
      let redirectUrl;
      userCtx(token);

      // REDIRECT TO SPECIFIC PAGES
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

      // SHOW SUCCESS ALERT
      successConfAlert("Success", "Login Successfull", navigate(redirectUrl));
    })
    .catch((err) => {
      // Return Error Status
      let errorType = err.response.data.errorType;
      let errorMessage = err.response.data.errorMessage;

      if (errorType === "NOT_FOUND") {
        setError({
          status: true,
          message: errorMessage,
        });
      } else if (errorType === "NOT_ACTIVE") {
        setModalShow({
          status: true,
          message: errorMessage,
        });
      }
    });
};

// GET USER FROM TOKEN
export const getUserLoginAPI = async (token) => {
  // Mengembalikan hasil user hasil extract dari token
  // CALL GET USER FROM TOKEN API
  return await axios.get(`${BASE_URL}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
