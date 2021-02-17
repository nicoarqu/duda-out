const initialState = {
  currentUserRole: null,
  currentToken: null,
  currentUserId: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        currentToken: action.payload.accessToken,
        currentUserRole: action.payload.role,
        currentUserId: action.payload.uid,
      };
    case "LOG_OUT":
      return {
        currentUserRole: null,
        currentToken: null,
        currentUserId: null,
      };
    default:
      return state;
  }
}
