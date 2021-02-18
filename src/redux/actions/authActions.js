export const logIn = (username, role, uid) => ({
  type: "LOG_IN",
  payload: {
    role,
    uid,
    username,
  },
});

export const logOut = () => ({
  type: "LOG_OUT",
  payload: null,
});
