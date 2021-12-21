import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [response, setResponse] = useState([]);
  const [responseRegion, setResponseRegion] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [continent, setContinent] = useState('');
  const [detail, setDetail] = useState('india');
  const [countryDetail, setCountryDetail] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        dark: [darkMode, setDarkMode],
        res: [response, setResponse],
        resRegion: [responseRegion, setResponseRegion],
        country: [searchCountry, setSearchCountry],
        region: [continent, setContinent],
        details: [detail, setDetail],
        countryDetails: [countryDetail, setCountryDetail],
        searchShow: [showSearch, setShowSearch],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
