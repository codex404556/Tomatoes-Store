import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Card = ({product}) => {
  const { currency, cartItems, addToCart, navigate, removeFromCart } = useAppContext();
  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full"
      >
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-120 transition max-w-26 md:max-w-36"
            src={product.image[0]}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <img
                  className="w-4 h-4"
                  src={index < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star-icon"
                />
              ))}
            <p>(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-primary ">
              {product.offerPrice}{" "}
              {currency}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {product.price}{" "}{currency}
              </span>
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=""
            >
              {cartItems[product._id] ? (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-orange-400/20 rounded select-none">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-md px-2"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="flex items-center justify-center cursor-pointer gap-2 bg-gray-100 border border-orange-300/40 md:w-[80px] w-[64px] h-[34px] rounded text-orange-400 font-medium"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart-icon" />
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Card
