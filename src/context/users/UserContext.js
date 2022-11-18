import { createContext, useReducer } from "react";
import Reducer from "./UserReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    sessions: [],
    records: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
