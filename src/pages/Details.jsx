import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import axios from 'axios';

export default function Details() {
  const { details, countryDetails } = useContext(GlobalContext);
  const [detail, setDetail] = details;
  const [countryDetail, setCountryDetail] = countryDetails;

  useEffect(() => {
    async function getCountryDetails() {
      const res = await axios.get(`https://restcountries.com/v2/name/belgium`);
      setCountryDetail(res.data[0]);
      console.log(res.data[0]);
    }
    getCountryDetails();
  }, [detail]);

  return (
    <>
      <div className="padding-x mt-8">
        <button className="rounded shadow-md mx-2 bg-white dark:bg-blue py-1 px-8 opacity-80 font-normal">
          &#8592; Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:flex w-full padding-x my-10 items-center justify-items-center">
        {countryDetail ? (
          <>
            <img
              src={countryDetail.flags.png}
              alt={countryDetail.name}
              className="w-full md:w-1/3 px-10vw md:px-0"
            />
            <div className="py-12 px-10vw md:p-12 md:pl-20 w-full md:w-2/3 grid grid-rows-2 grid-cols-1 md:grid-cols-2 items-center">
              <div className="">
                <h2 className="font-bold text-4xl mb-6">
                  {countryDetail.name}
                </h2>
                <ul className="font-semibold">
                  <li>
                    Native Name:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.nativeName}
                    </span>
                  </li>
                  <li>
                    Population:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.population}
                    </span>
                  </li>
                  <li>
                    Region:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.region}
                    </span>
                  </li>
                  <li>
                    Sub Region:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.subregion}
                    </span>
                  </li>
                  <li>
                    Capital:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.capital}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="">
                <ul className="font-semibold">
                  <li>
                    Top Level Domian:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.topLevelDomain[0]}
                    </span>
                  </li>
                  <li>
                    Currencies:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.currencies.map((currency, index) => {
                        if (index === countryDetail.currencies.length - 1) {
                          return currency.name;
                        } else {
                          return `${currency.name}, `;
                        }
                      })}
                    </span>
                  </li>
                  <li>
                    Languages:{' '}
                    <span className="opacity-80 font-normal">
                      {countryDetail.languages.map((language, index) => {
                        if (index === countryDetail.languages.length - 1) {
                          return language.name;
                        } else {
                          return `${language.name}, `;
                        }
                      })}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="font-semibold  md:col-span-2">
                <div>
                  Border Countries:{' '}
                  {countryDetail.borders.map(border => (
                    <button className="rounded shadow-md m-2 bg-white dark:bg-blue py-1 px-8">
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
