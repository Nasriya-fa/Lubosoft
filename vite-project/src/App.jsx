import React, { useState, useEffect } from "react";
import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import ProductCard from "./componets/ProductCard";
import { products } from "./data/ProductList";
import { MdOutlineChevronRight } from "react-icons/md";
import { PiEmptyThin } from "react-icons/pi";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)
  
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  //SEARCH INPUT FILTER
  useEffect(() => {
    let result = products;
    if (searchValue) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    //SEARCH CATEGORY FOR NAVBAR
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }
    setFilteredProducts(result);
  }, [searchValue, selectedCategory]);
  // TOGGLE MENU FUNCTION
  const toggleMenu = () => {
    setMobileNavbarOpen(!mobileNavbarOpen)
  }

  return (
    <>
      <div className="min-h-screen bg-blue-600 dark:bg-gray-700 text-white">
        {/* Header */}
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          toggleMenu={toggleMenu}
        />
        <div className="flex">
          {/* sidebar */}
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            mobileNavbarOpen={mobileNavbarOpen}
            setMobileNavbarOpen={setMobileNavbarOpen}

          />
          {/* mainsection */}
          <main className="flex-1 p-5 min-h-[calc(100vh-4rem)] ">
            <h1 className="text-2xl font-bold mb-6 text-white">
              categories
              <MdOutlineChevronRight className="lg:hidden inline" />
              <span className=" font-medium text-xl lg:hidden">{selectedCategory}</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}

                />
              ))}
            </div>
            {/* For empty page */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-10 flex justify-center gap-5">
                <PiEmptyThin size={40} className="inline text-white font-extrabold" />
                <p className="text-gray-100 text-3xl">No products found.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
