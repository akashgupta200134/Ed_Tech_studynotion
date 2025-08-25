import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../../assets/Logo/Logo-Full-Light.png";
import NavbarLinks from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../utils/costans";
import { ACCOUNT_TYPE } from "../../utils/costans";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  console.log("Printing base url: ", import.meta.env.VITE_BASE_URL);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setsublinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("printing catalog sublinks", result);
      setsublinks(result?.data?.data || []);
    } catch (error) {
      console.log(error);
      console.log("Couldnot able to fetch Catalog list");
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  const MatchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <div className="text-white h-14 items-center  justify-center border-b-[1px] border-richblack-200 mt-1 ">
      <div className="flex flex-row w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="StudyNotion"
            className="h-12 w-[150px] object-contain mt-1 ml-24"
          />
        </Link>

        {/* navlinks */}

        <nav className="">
          <ul className=" text-richblack-25 flex gap-5">
            {NavbarLinks.map((element, index) => (
              <li key={index}>
                {element.title === "Catalog" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1 text-richblack-25">
                    <p>{element.title}</p>
                    <IoIosArrowDown />

                    <div
                      className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] 
                            flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible 
                            group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[250px]"
                    >
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                      {subLinks.length ? (
                        subLinks.map((subLink, index) => (
                          <Link to={`catalog/${subLink.link}`} key={index}>
                            <p className="rounded-lg bg-transparent p-3 pl-4 hover:bg-richblack-50">
                              {subLink.Name}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={element?.path}>
                    <p
                      className={`${
                        MatchRoute(element?.path)
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

        <div className=" flex items-center  gap-x-4 ">
          {user && user?.accountType != ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart className="text-white" />

              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to={"/login"}>
              <button className=" text-richblack-5 border-richblack-700 bg-richblack-700 p-2 rounded">
                Log in
              </button>
            </Link>
          )}

          {token === null && (
            <Link to={"/signup"}>
              <button className=" text-richblack-25 border-richblack-700 bg-richblack-700 p-2 rounded">
                Sign Up
              </button>
            </Link>
          )}

          {!token === null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
