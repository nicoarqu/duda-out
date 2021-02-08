export const logIn = (accessToken, role, userId) => ({
    type: 'LOG_IN',
    payload: {
      accessToken,
      role,
      id: userId
    }
  });
  
  
  export const logOut = () => ({
    type: 'LOG_OUT',
    payload: null
  });