export default function SearchBar({ searchCountry, setSearchCountry }) {
  return (
    <form>
      <input
        type="text"
        placeholder="&#128269; Search for a country..."
        className="block p-4 text-gray shadow-md rounded-sm dark:bg-blue w-full sm:w-80 lg:w-96 mb-8 sm:mb-0"
        onChange={e => {
          setSearchCountry(e.target.value);
        }}
      />
    </form>
  );
}
