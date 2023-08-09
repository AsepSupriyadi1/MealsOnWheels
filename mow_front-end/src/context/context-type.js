export const user_type = {
  userId: "",
  email: "",
  fullname: "",
  address: "",
  userRole: "",
  pictureData: null,
  phoneNumber: "",
  lan: 0,
  lng: 0,
};

// USER CONTEXT
export const context_user = {
  currentUser: user_type,
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
};
