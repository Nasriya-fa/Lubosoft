import React, { useState, useEffect } from "react";
import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import ProductCard from "./componets/ProductCard";
import { products } from "./data/ProductList";
import { MdOutlineChevronRight } from "react-icons/md";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    let result = products;
    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);
  const addToCart = (product) => {
    console.log(`Add To Card:${product.title}`);
  };
  return (
    <>
      <div className="min-h-screen bg-blue-600">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <main className="flex-1 p-4 min-h-[calc(100vh-4rem)] ">
            <h1 className="text-2xl font-bold mb-6 text-white">
              Products{" "}
              <MdOutlineChevronRight className="lg:hidden inline"/>
              <span className=" font-medium text-xl lg:hidden">{selectedCategory}</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">No products found.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
