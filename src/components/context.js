import React, { createContext } from "react";

export const TodoProvider = createContext();

export const TodoContext = ({ children }) => {
  <TodoProvider>{children}</TodoProvider>;
};
