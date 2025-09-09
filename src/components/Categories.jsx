import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-15">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {categories.map((item, index) => (
          <div
            onClick={()=> {navigate(`/products/${item.path.toLocaleLowerCase()}`); scrollTo(0,0)}}
            style={{ backgroundColor: item.bgColor }}
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
          >
            <img className="group-hover:scale-120 transition max-w-30" src={item.image} alt={item.text} />
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories
