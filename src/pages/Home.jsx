import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row p-8 sm:p-12 justify-between">
        <SearchBar />
        <Dropdown />
      </div>

      <ul className="container grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <li>
          <CountryCard />
        </li>
      </ul>
    </div>
  );
}
