import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Regions from "./pages/Regions";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";

function App() {
  const { dark, searchShow } = useContext(GlobalContext);
  const [darkMode] = dark;
  const [showSearch, setShowSearch] = searchShow;

  return (
    <div
      className={
        darkMode
          ? "dark font-nunito bg-darkBlue text-white min-h-screen"
          : "font-nunito bg-lightGray text-darkBlueLightMode min-h-screen"
      }
    >
      <Router>
        <Navbar />
        {showSearch && (
          <div className="flex flex-col sm:flex-row py-8 sm:py-12 padding-x justify-between mx-auto">
            <SearchBar />
            <Dropdown />
          </div>
        )}
        <Routes>
          <Route path="/country-search-app" element={<Home />} />
          <Route path="/country-search-app/regions" element={<Regions />} />
          <Route path="/country-search-app/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
