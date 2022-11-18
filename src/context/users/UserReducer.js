const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "UNSET_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "CREATE_RECORD":
      return {
        ...state,
        isLoading: false,
        records: [...state.records, action.payload],
      };
    case "GET_RECORDS":
      return {
        ...state,
        isLoading: false,
        records: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isLoading: false,
        user: {},
        slots: [],
        camps: [],
      };
    case "GET_SESSIONS":
      return {
        ...state,
        isLoading: false,
        sessions: action.payload,
      };
    case "TERMINATE_SESSIONS":
      return {
        ...state,
        isLoading: false,
        sessions: [],
      };
    case "TERMINATE_SESSION":
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        sessions: state.sessions.filter((session) => {
          return session.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default appReducer;
