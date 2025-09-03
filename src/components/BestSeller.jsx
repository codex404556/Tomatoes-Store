import React from 'react'
import Card from './Card'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-15">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((item) => item.inStock)
          .slice(0,5)
          .map((item, index) => (
            <Card key={index} product={item} />
          ))}
        
      </div>
    </div>
  );
}

export default BestSeller
