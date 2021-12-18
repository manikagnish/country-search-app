export default function Dropdown() {
  return (
    <details>
      <summary className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm cursor-pointer shadow-md">
        Filter by Region
      </summary>
      <ul className="bg-white text-darkBlueLightMode dark:bg-blue dark:text-white w-40 p-4 rounded-sm mt-1 shadow-md">
        <li className="p-1">
          <a href="/">Africa</a>
        </li>
        <li className="p-1">
          <a href="/">America</a>
        </li>
        <li className="p-1">
          <a href="/">Asia</a>
        </li>
        <li className="p-1">
          <a href="/">Europe</a>
        </li>
        <li className="p-1">
          <a href="/">Oceania</a>
        </li>
      </ul>
    </details>
  );
}
