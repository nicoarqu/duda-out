const initialState = {
  currentUserRole: null,
  currentUserId: null,
  currentUserName: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        currentUserRole: action.payload.role,
        currentUserId: action.payload.uid,
        currentUserName: action.payload.username,
      };
    case "LOG_OUT":
      return {
        currentUserRole: null,
        currentUserId: null,
        currentUserName: null,
      };
    default:
      return state;
  }
}
