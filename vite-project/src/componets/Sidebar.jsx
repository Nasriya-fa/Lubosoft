import React from "react";

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="hidden md:block w-54 bg-blue-600 h-[calc(100vh-4rem)]] shadow-2xl pt-4">
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2 px-6 py-2">
            <button 
            onClick={() => setSelectedCategory(category)}
            className={`w-full px-2 py-3 text-xl font-bold rounded  ${selectedCategory=== category ? 'bg-gray-100 text-blue-600':"hover-bg-blue-200 text-white"}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
