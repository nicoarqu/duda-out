export const logIn = (accessToken, role, uid) => ({
  type: "LOG_IN",
  payload: {
    accessToken,
    role,
    uid,
  },
});

export const logOut = () => ({
  type: "LOG_OUT",
  payload: null,
});
