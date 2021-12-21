import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [response, setResponse] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [continent, setContinent] = useState('');
  const [detail, setDetail] = useState('hello');

  return (
    <GlobalContext.Provider
      value={{
        dark: [darkMode, setDarkMode],
        res: [response, setResponse],
        country: [searchCountry, setSearchCountry],
        region: [continent, setContinent],
        details: [detail, setDetail],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
