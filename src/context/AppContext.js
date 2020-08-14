import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  title: "Yavar",
};

const State = createContext(undefined);
const Dispatch = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "setTitle":
      return { ...state, title: action.value };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
};

const Provider = (props) => {
  const [state, dispatchState] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatchState}>
        {props.children}
      </Dispatch.Provider>
    </State.Provider>
  );
};

const CustomState = () => {
  const context = useContext(State);
  if (context === undefined) {
    throw new Error("CustomState must be used within a Provider");
  }
  return context;
};

const CustomDispatch = () => {
  const context = useContext(Dispatch);
  if (context === undefined) {
    throw new Error("CustomDispatch must be used within a Provider");
  }
  return context;
};

export { Provider, CustomState, CustomDispatch, initialState };
