import React from "react";
import SearchInput from "./SearchInput";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-4">
      <div className="flex gap-6">
        {/* Company logo */}
        <div className="text-white text-xl bg-purple-400 text-center px-3 py-1 rounded-sm">
          Logo
        </div>
        {/* heading */}
        <h1 className="text-white font-bold text-2xl">Product List</h1>
      </div>
      {/* Search input and dropdown */}
      <div className="flex items-center gap-10 text-white ">
        <SearchInput />
        <button>
          <FiUser className="inline" />
          <span>User</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
