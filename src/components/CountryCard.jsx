import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function CountryCard({ data }) {
  const { details, region, searchShow } = useContext(GlobalContext);
  const [_, setDetail] = details;
  const [continent, setContinent] = region;
  const [showSearch, setShowSearch] = searchShow;

  return (
    <Link to="/details">
      <div
        className="rounded-md overflow-hidden shadow-md mx-10vw sm:mx-0 cursor-pointer"
        onClick={() => {
          if (continent === '') {
            setDetail(data.name);
            setShowSearch(false);
          } else {
            setDetail(data.name.common);
            setShowSearch(false);
          }
        }}
      >
        <img
          className="w-full object-fill h-48"
          src={data.flags.png}
          alt={data.name.common}
        />
        <div className="p-6">
          <h2 className="font-bold text-xl mb-4">
            {continent === '' ? data.name : data.name.common}
          </h2>
          <p className="">
            Population: <span className="opacity-70">{data.population}</span>
          </p>
          <p className="">
            Region: <span className="opacity-70">{data.region}</span>
          </p>
          <p className="">
            Capital: <span className="opacity-70">{data.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
