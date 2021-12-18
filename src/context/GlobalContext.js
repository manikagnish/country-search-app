import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider value={{ dark: [darkMode, setDarkMode] }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
