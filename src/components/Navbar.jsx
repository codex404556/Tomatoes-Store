import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const NavBar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "contact" },
    ]
    const [open, setOpen] = React.useState(false);
    const {user, setUser, setShowUserLogin, navigate, searchQuery, setSearchQuery, getCartCount} = useAppContext();
    
    // Debug: Log user state
    console.log("Navbar - User state:", user);
    console.log("Navbar - !user value:", !user);
    
    const logout = async () => {
        setUser(null);
        navigate("/");
    }

    useEffect(() => {
      if (searchQuery.length > 0) {
        navigate("/products");
      }

    }, [searchQuery])
    
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 shadow-md xl:px-32 py-4 border-b border-gray-300 bg-blur-lg bg-primary-gradient relative">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-20" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-white text-xl">
        {navLinks.map((item, index) => (
          <NavLink className="group" to={item.path} key={index}>
            {item.name}
            <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
          </NavLink>
        ))}

        <div className="bg-yellow-50 hidden lg:flex items-center text-sm gap-5 border border-shadow px-5 rounded-full group w-64 hover:w-80 transition-all duration-300 ease-in-out">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 bg-transparent text-gray-900 outline-none placeholder-gray-400 w-full"
            type="text"
            placeholder="Search products"
          />
          <img
            src={assets.search_icon}
            alt="search-icon"
            className="h-5 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="cart" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-red-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-red-500 hover:bg-red-400 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              className="h-10"
              src={assets.profile_icon}
              alt="profile-icon"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 pt-2.5 w-30 rounded-md text-sm">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 pl-3 hover:bg-red-300/10 cursor-pointer text-gray-500"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-red-300/10 cursor-pointer text-gray-500"
              >
                logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="cart" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-red-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className=""
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="menu-icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Products
        </NavLink>
        {user && (
          <NavLink to="/products" onClick={() => setOpen(false)}>
            Orders
          </NavLink>
        )}
        <NavLink to="/" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-red-500 hover:bg-indigo-400 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-red-500 hover:bg-indigo-400 transition text-white rounded-md cursor-pointer text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar
