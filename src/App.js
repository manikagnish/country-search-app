import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const { dark } = useContext(GlobalContext);
  const [darkMode] = dark;

  return (
    <div
      className={
        darkMode
          ? 'dark font-nunito bg-darkBlue text-white min-h-screen'
          : 'font-nunito bg-lightGray text-darkBlueLightMode min-h-screen'
      }
    >
      <Navbar />
      <Details />
      <Home />
    </div>
  );
}

export default App;
