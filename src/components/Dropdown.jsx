import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const { region } = useContext(GlobalContext);
  const [_, setContinent] = region;

  return (
    <details className="relative">
      <summary className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm cursor-pointer shadow-md">
        Filter by Region
      </summary>
      <ul className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm mt-1 shadow-md absolute">
        <Link to="/country-search-app/regions">
          <li
            className="p-1 hover:text-cyan-500 transition cursor-pointer"
            onClick={() => {
              setContinent('africa');
            }}
          >
            Africa
          </li>
        </Link>

        <Link to="/country-search-app/regions">
          <li
            className="p-1 hover:text-cyan-500 transition cursor-pointer"
            onClick={() => {
              setContinent('america');
            }}
          >
            America
          </li>
        </Link>
        <Link to="/country-search-app/regions">
          <li
            className="p-1 hover:text-cyan-500 transition cursor-pointer"
            onClick={() => {
              setContinent('asia');
            }}
          >
            Asia
          </li>
        </Link>
        <Link to="/country-search-app/regions">
          <li
            className="p-1 hover:text-cyan-500 transition cursor-pointer"
            onClick={() => {
              setContinent('europe');
            }}
          >
            Europe
          </li>
        </Link>
        <Link to="/country-search-app/regions">
          <li
            className="p-1 hover:text-cyan-500 transition cursor-pointer"
            onClick={() => {
              setContinent('oceania');
            }}
          >
            Oceania
          </li>
        </Link>
      </ul>
    </details>
  );
}
