import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../../public/Images/Logo/Logo-Full-Light.png";
import NavbarLinks from "../../data/navbar-links";
import { ACCOUNT_TYPE } from "../../utils/costans";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropDown from "../core/Auth/ProfileDropdown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";

const Navbar = () => {
  console.log("Printing base url: ", import.meta.env.VITE_BASE_URL);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch categories (Catalog links)
  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Printing catalog sublinks", result);
      setSubLinks(result?.data?.data || []);
    } catch (error) {
      console.error("Could not fetch Catalog list", error);
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  const matchRoute = (route) =>
    matchPath({ path: route }, location.pathname);

  return (
    <div className="text-white h-14 flex items-center justify-center border-b border-richblack-200 mt-1">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between relative">

        {/* Logo */}
        <Link to={"/"}>
          <img
            src={Logo}
            alt="StudyNotion"
            className="h-12 w-[150px] object-contain mt-1 ml-0 md:ml-10"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-14 left-0 w-full flex-col  gap-2 bg-richblack-900 p-4 md:static md:flex md:flex-row md:gap-5 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:ml-72 md:gap-5">
            {NavbarLinks.map((element, index) => (
              <li key={index} className="relative">
                {element.title === "Catalog" ? (
                  <div className="group flex cursor-pointer items-center gap-1 text-richblack-25">
                    <p>{element.title}</p>
                    <IoIosArrowDown />

                    {/* Dropdown */}
                    <div
                      className="invisible absolute left-0 top-full z-[1000] mt-2 flex w-[200px] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 md:w-[250px]"
                    >
                      <div className="absolute left-1/2 top-0 -z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-richblack-5"></div>

                      {subLinks.length > 0 ? (
                        subLinks.map((subLink, i) => (
                          <Link to={`catalog/${subLink.link}`} key={i}>
                            <p className="rounded-lg p-3 pl-4 hover:bg-richblack-50">
                              {subLink.Name}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <p className="p-2 text-sm">Loading...</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={element?.path}>
                    <p
                      className={`${
                        matchRoute(element?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {element.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-x-4">
          {/* Cart */}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart className="text-2xl text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-25 text-black text-xs rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Login / Signup */}
          {token === null && (
            <>
              <Link to={"/login"}>
                <button className="text-richblack-5 border border-richblack-700 bg-richblack-700 px-4 py-2 rounded">
                  Log in
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="text-richblack-25 border border-richblack-700 bg-richblack-700 px-4 py-2 rounded">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {/* Profile Dropdown */}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
