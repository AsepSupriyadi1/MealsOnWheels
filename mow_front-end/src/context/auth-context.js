import React, { createContext, useEffect, useState } from "react";
import { context_user, user_type } from "./context-type";
import { getUserLoginAPI } from "../api/auth";

export const AuthContext = React.createContext(context_user);

export function retriveStoredToken() {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
}

export function AuthContextProvider(props) {
  const storedToken = retriveStoredToken();
  let initialToken;

  if (storedToken) {
    initialToken = storedToken.token;
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(user_type);
  const userIsLoggedIn = !!token;

  // GET USER LOGIN DATA
  useEffect(() => {
    if (token === null) {
      setUser(user_type);
    } else {
      getUserLoginAPI(token)
        .then((res) => setUser(res.data))
        .catch((err) => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        });
    }

    return () => {};
  }, [token]);

  function logoutHandler() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function loginHandler(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  let contextValue = {
    currentUser: {
      userId: user.userId,
      fullname: user.fullname,
      email: user.email,
      address: user.address,
      userRole: user.userRole,
      lan: user.lan,
      lng: user.lng,
    },
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}
