import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function Home() {
  const { resRegion, country, region, details } = useContext(GlobalContext);

  const [responseRegion, setResponseRegion] = resRegion;
  const [searchCountry, setSearchCountry] = country;
  const [continent, setContinent] = region;
  const [detail, setDetail] = details;

  useEffect(() => {
    async function byContinent() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/region/${continent}`
        );
        setResponseRegion(response);
      } catch (error) {
        console.error(error);
      }
    }
    byContinent();
  }, [continent]);

  return (
    <div className="pb-10">
      <ul className="container grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 padding-x mx-auto">
        {responseRegion.data
          ? responseRegion.data
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
              .map(country => {
                return (
                  <li key={country.name.common}>
                    <CountryCard
                      data={country}
                      setDetail={setDetail}
                      continent={continent}
                    />
                  </li>
                );
              })
          : ''}
      </ul>
    </div>
  );
}
