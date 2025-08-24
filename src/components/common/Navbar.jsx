import React from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../../assets/Logo/Logo-Full-Light.png";
import NavbarLinks from "../../data/navbar-links";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const  location = useLocation();
      
    const MatchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
     }






  return (
    <div className="text-white h-14 items-center  justify-center border-b-[1px] border-richblack-200 ">
      <div className="flex flex-row w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="StudyNotion"
            className="h-12 w-[150px] object-contain mt-1 ml-24"
          />
        </Link>

        <nav className="">
          <ul className=" text-richblack-25 flex gap-5">
            { NavbarLinks.map((element, index) => (
               

                <li key={index}>
                  {element.title === "Catalog" ? (
                    <div></div>
                  ) : (
                    <Link to={element?.path}>
                      <p className= { `${MatchRoute(element?.path) ? "text-yellow-25" : "text-richblack-25"}`}>{element.title}</p>
                    </Link>
                  )}
                </li>





              
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
