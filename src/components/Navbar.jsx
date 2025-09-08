import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    navigate,
    getCartCount,
    user,
    setUser,
    setShowUserLogin,
  } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpen(false); // close menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 xl:px-32 z-50 transition-all duration-200 ${
        isScrolled
          ? "py-1.5 shadow-md bg-white/80 backdrop-bluer-md"
          : "py-6 bg-primary"
      }`}
    >
      {/* Logo part */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={assets.logo} alt="logo" className="h-20 w-20" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-xl text-white">
        <button
          onClick={() => navigate("/seller")}
          className="text-white rounded-full px-4 py-1.5 bg-red-500 hover:shadow-md transition-all duration-100 hover:bg-red-600"
        >
          Dashboard
        </button>
        {navLinks.map((item, index) => (
          <NavLink
            className={`group ${isScrolled && "text-gray-600"}`}
            to={item.path}
            key={index}
          >
            {item.name}
            <div
              className={`group h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-500" : "bg-white"
              }`}
            ></div>
          </NavLink>
        ))}
        {user && <NavLink to="/my-orders">My Orders</NavLink>}
        <ScrollLink
          className={`group ${isScrolled && "text-gray-600"}`}
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
          <div
            className={`group h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
              isScrolled ? "bg-gray-500" : "bg-white"
            }`}
          ></div>
        </ScrollLink>
        <div className="group bg-yellow-50 hidden md:flex items-center text-sm border border-shadow px-5 rounded-full w-46 hover:w-80 transition-all duration-300">
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              navigate("/products");
            }}
            type="text"
            placeholder="search products"
            className="py-2 bg-transparent text-gray-900 outline-none w-full"
          />
          <img
            className="h-3.5 w-3.5 group-hover:scale-140 duration-300"
            src={assets.search_icon}
            alt="search-icon"
          />
        </div>
        <div
          onClick={() => {
            navigate("/cart");
            scrollTo(0, 0);
          }}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="cart-icon" />
          <button className="absolute -top-2 -right-3 rounded-full bg-red-500 text-xs w-[18px] h-[18px]">
            {getCartCount()}
          </button>
        </div>
        {user ? (
          <div className="relative group">
            <img
              className="h-10"
              src={assets.profile_icon}
              alt="profile-icon"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 rounded-lg bg-white shadow border border-gray-300 text-sm pt-2.5 w-30">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 pl-3 hover:bg-red-300/10 cursor-pointer text-gray-500"
              >
                My Orders
              </li>
              <li
                onClick={() => {
                  logout();
                  navigate("/");
                  scrollTo(0, 0);
                }}
                className="p-1.5 pl-3 hover:bg-red-300/10 cursor-pointer text-gray-500"
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-red-500 rounded-full text-white hover:bg-red-600 duration-200"
          >
            Login
          </button>
        )}
      </div>
      {/* Mobile Icons  */}
      <div className="sm:hidden flex items-center gap-6">
        <div
          onClick={() => {
            navigate("/cart");
            scrollTo(0, 0);
          }}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="cart-icon" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-red-500 rounded-full w-[18px] h-[18px]">
            {getCartCount()}
          </button>
        </div>
        <button onClick={() => (open ? setOpen(false) : setOpen(true))}>
          <img className="h-6 w-6" src={assets.menu_icon} alt="menu-icon" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[90px] left-[40px] w-130 bg-white shadow-lg rounded-lg py-6 flex-col items-start gap-3 px-6 text-base md:hidden z-50 transition-all duration-300`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        {user && (
          <NavLink to="/my-orders" onClick={() => setOpen(false)}>
            My Orders
          </NavLink>
        )}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
        >
          Contact
        </ScrollLink>
        {user ? (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-red-500 transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-red-500 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
