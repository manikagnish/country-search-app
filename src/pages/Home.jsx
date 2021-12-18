import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function Home() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setResponse(response);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  console.log(response);

  return (
    <div>
      <div className="flex flex-col sm:flex-row p-8 sm:p-12 justify-between">
        <SearchBar />
        <Dropdown />
      </div>

      <p>{response.data ? response.data[0].name : ''}</p>

      <ul className="container grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {response.data
          ? response.data.slice(0, 9).map(country => (
              <li key={country.numericCode}>
                <CountryCard data={country} />
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
}
