import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function Home() {
  const { res, country, region, details } = useContext(GlobalContext);

  const [response, setResponse] = res;
  const [searchCountry, setSearchCountry] = country;
  const [continent, setContinent] = region;
  const [detail, setDetail] = details;

  useEffect(() => {
    async function byContinent() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/region/${continent}`
        );
        setResponse(response);
      } catch (error) {
        console.error(error);
      }
    }
    byContinent();
  }, [continent]);

  return (
    <div className="pb-10">
      <ul className="container grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 padding-x mx-auto">
        {response.data
          ? response.data
              .filter(val => {
                if (searchCountry === '') {
                  return val;
                } else {
                  return val.name.common
                    .toLowerCase()
                    .includes(searchCountry.toLowerCase());
                }
              })
              .slice(0, 8)
              .map(country => (
                <li key={country.name.common}>
                  <CountryCard
                    data={country}
                    setDetail={setDetail}
                    continent={continent}
                  />
                </li>
              ))
          : ''}
      </ul>
    </div>
  );
}
