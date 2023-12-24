import { createContext, useState } from "react";

export const CalContext = createContext();

const CalProvider = ({ children }) => {
  const [cal, setCal] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    cal,
    setCal,
  };

  return (
    <CalContext.Provider value={providerValue}>{children}</CalContext.Provider>
  );
};

export default CalProvider;
