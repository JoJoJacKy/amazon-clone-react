import { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wraps our app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// {children} This is just letting the StateContext know that there will be children

// Allows us to pull information from the data layer
// Also allows us to dispatch the information back up to the reducer
export const useStateValue = () => useContext(StateContext);
