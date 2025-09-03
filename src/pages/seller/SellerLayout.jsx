import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'



const SellerLayout = () => {

    const sidebarLinks = [
        {name: "Add Product", path: "/seller", icon: assets.add_icon },
        {name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon},
        {name: "Orders", path: "/seller/orders", icon: assets.order_icon}
    ]
    const {setIsSeller} = useAppContext();
    const logout = async () =>{
        setIsSeller(false);
    }
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo-icon"
            className="cursor-pointer h-15 w-15"
          />
        </Link>
        <div className="flex items-center gap-5">
          <p className="text-gray-500">Hi! Admin</p>
          <button
            className="border rounded-full text-sm px-4 py-1 text-white bg-primary"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-brimary text-brimary"
                    : "hover:bg-gray-100/90 border-white"
                }`
              }
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
            >
              <img className="w-7 h-7" src={item.icon} alt="" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default SellerLayout
