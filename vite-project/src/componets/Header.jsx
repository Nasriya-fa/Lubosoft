import React from "react";
import SearchInput from "./SearchInput";
import { FiList, FiMoon, FiSun, FiUser } from "react-icons/fi";
import userDarkMode from "../../../hooks/userDarkMode";
const Header = ({ searchValue, setSearchValue, toggleMenu }) => {
  const [isDarkMode, toggleDarkMode] = userDarkMode()
  return (
    <header className="bg-blue-500 dark:bg-gray-800 flex justify-between items-center p-4">
      <div className="flex gap-6">
        {/* Company logo */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <FiList size={30} className="text-white text-center" />
          </button>
        </div>
        <div className="text-white hidden lg:block font-bold text-xl bg-purple-400 dark:bg-green-600 text-center px-3 py-1 rounded-sm">
          Logo
        </div>
        {/* heading */}
        <h1 className="text-white font-medium text-2xl">Product List</h1>
      </div>
      {/* Search input and dropdown */}
      <div className="flex items-center gap-10 text-white ">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-blue-600 dark:hover:bg-gray-700"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <button>
          <FiUser className="inline" />
          <span className="hidden lg:inline p-3" size={25}>User</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
