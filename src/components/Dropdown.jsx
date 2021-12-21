import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Dropdown() {
  const { region } = useContext(GlobalContext);
  const [_, setContinent] = region;

  return (
    <details className="relative">
      <summary className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm cursor-pointer shadow-md">
        Filter by Region
      </summary>
      <ul className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm mt-1 shadow-md absolute">
        <li
          className="p-1 hover:text-cyan-500 transition cursor-pointer"
          onClick={() => {
            setContinent('africa');
          }}
        >
          Africa
        </li>
        <li
          className="p-1 hover:text-cyan-500 transition cursor-pointer"
          onClick={() => {
            setContinent('america');
          }}
        >
          America
        </li>
        <li
          className="p-1 hover:text-cyan-500 transition cursor-pointer"
          onClick={() => {
            setContinent('asia');
          }}
        >
          Asia
        </li>
        <li
          className="p-1 hover:text-cyan-500 transition cursor-pointer"
          onClick={() => {
            setContinent('europe');
          }}
        >
          Europe
        </li>
        <li
          className="p-1 hover:text-cyan-500 transition cursor-pointer"
          onClick={() => {
            setContinent('oceania');
          }}
        >
          Oceania
        </li>
      </ul>
    </details>
  );
}
