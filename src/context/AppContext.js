import React, { useReducer, createContext } from "react";

const initialState = {
  title: "Yavar",
};

const stateContext = createContext(undefined);
const dispatchContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "setTitle":
      return { ...state, title: action.value };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
};

const Provider = ({ children }) => {
  const [state, dispatchState] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatchState}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
};

export { Provider, stateContext, dispatchContext };
