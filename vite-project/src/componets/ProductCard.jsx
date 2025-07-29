import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
const ProductCard = ({product}) => {

  const addToCart = (product) => {
    console.log(`Add To Card:${product.title}`);
  };
  return (
    <div className=" rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-gray-100 dark:bg-gray-800 transition-shadow p-3">
      <img
        src={product.image}
        className="w-full h-48 p-5 object-cover bg-gray-400"
      />
      <div className="flex justify-between p-2">
        <div>
        <h1 className="font-semibold text-xl text-gray-600 dark:text-gray-300">{product.title}</h1>
        <p className=" mt-1 font-semibold text-2xl text-gray-900 dark:text-gray-200">$ {product.price}</p>
        </div>
        <div>
        <button className="mt-3 w-full bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white py-2 rounded hover:bg-green-900 transition-colors px-3 text-center" onClick={()=>addToCart(product)}>
          <MdAddShoppingCart size={30} className="inline "/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
