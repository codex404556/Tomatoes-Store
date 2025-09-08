import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="mt-45 flex flex-col">
      <div className="flex flex-col items-end w-max pb-4">
        <p className="group text-2xl font-medium uppercase cursor-pointer inline-block">
          All Products
          <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-300"></div>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {filteredProducts
          .filter((products) => products.inStock)
          .map((item, index) => (
            <Card key={index} product={item} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
