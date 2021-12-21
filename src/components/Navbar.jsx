import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { dark } = useContext(GlobalContext);
  const [darkMode, setDarkMode] = dark;
  return (
    <nav
      className="flex justify-between items-center w-screen py-6 padding-x
    bg-white dark:bg-blue shadow-md"
    >
      <Link to="/">
        <h1 className="font-bold text-lg md:text-xl">Where in the world?</h1>
      </Link>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="flex justify-between items-center"
      >
        {darkMode ? (
          <HiOutlineSun className="mr-1" />
        ) : (
          <HiOutlineMoon className="mr-1" />
        )}{' '}
        Toggle Theme
      </button>
    </nav>
  );
}
