import React from "react";
import SearchInput from "./SearchInput";
import { FiList, FiUser } from "react-icons/fi";

const Header = ({ searchValue, setSearchValue, toggleMenu }) => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-4">
      <div className="flex gap-6">
        {/* Company logo */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <FiList size={30} className="text-white text-center" />
          </button>
        </div>
        <div className="text-white hidden lg:block font-bold text-xl bg-purple-400 text-center px-3 py-1 rounded-sm">
          Logo
        </div>
        {/* heading */}
        <h1 className="text-white font-medium text-2xl">Product List</h1>
        </div>
      {/* Search input and dropdown */}
       <div className="flex items-center gap-10 text-white ">

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
