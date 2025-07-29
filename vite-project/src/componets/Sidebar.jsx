import React from "react";

const Sidebar = ({ categories, selectedCategory, setSelectedCategory, mobileNavbarOpen, setMobileNavbarOpen }) => {
  return (
    <>
   {/* Sidebar overlay for mobile */}
      {mobileNavbarOpen && (
        <div className="fixed inset-0 bg-gray bg-opacity-10 z-20 lg:hidden"
          onClick={() =>
            setMobileNavbarOpen(false)
          }
        ></div>
      )}
      {/* sidebar for both mobile & desktop */}
      <aside
        className={`fixed lg:relative z-30 w-64 bg-blue-600 dark:bg-gray-800 h-[calc(100vh-4rem)] shadow-2xl pt-4 transition-all duration-300 ease-in-out
  ${mobileNavbarOpen ? 'left-0' : '-left-64'} lg:left-0`}      >
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2 px-6 py-2">
              <button
                onClick={() => {
                  setSelectedCategory(category)
                  setMobileNavbarOpen(false)
                }}
                className={`w-full px-2 py-3 text-xl font-bold rounded  ${selectedCategory === category ? 'bg-gray-100 text-blue-600 dark:text-green-600' : "hover-bg-blue-200 text-white"}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
