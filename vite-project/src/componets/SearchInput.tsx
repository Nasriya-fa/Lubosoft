import React from "react";
import { FiSearch } from "react-icons/fi"; // Using react-icons for the search icon

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    // <div className="relative">
    <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<FiSearch className="text-gray-800"/>
        </div>
        <input 
        type='text'
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        placeholder="Search Here..."
        className="pl-10 pr-4 py-2 bg-gray-100 w-full focus:outline-none rounded-md border focus:ring-2 focus:ring-blue-500 border-gray-300 focus:border-transparent text-gray-800 placeholder-gray-800"/>
    </div>
  );
};

export default SearchInput;