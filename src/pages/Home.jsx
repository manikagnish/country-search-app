import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function Home() {
  const { res, country, region } = useContext(GlobalContext);

  const [response, setResponse] = res;
  const [searchCountry, setSearchCountry] = country;

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setResponse(response);
      } catch (error) {
        console.error(error);
      }
    }
    getCountry();
  }, []);

  return (
    <div className="pb-10">
      <ul className="container grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 padding-x mx-auto">
        {response.data
          ? response.data
              .filter(val => {
                if (searchCountry === '') {
                  return val;
                } else {
                  return val.name
                    .toLowerCase()
                    .includes(searchCountry.toLowerCase());
                }
              })
              .slice(0, 8)
              .map(country => {
                return (
                  <li key={country.name}>
                    <CountryCard data={country} />
                  </li>
                );
              })
          : ''}
      </ul>
    </div>
  );
}
