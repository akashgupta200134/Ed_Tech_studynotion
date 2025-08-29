import * as Icons from "react-icons/vsc";
import { matchPath, NavLink, useLocation } from "react-router-dom";

const SidebarLinks = ({ element, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    if (!route) return false;
    return matchPath({ path: route }, location.pathname);
  };

  const isActive = matchRoute(element.path);

  return (
    <div>
      <NavLink
        to={element.path}
        className={`group relative flex items-center gap-x-3 px-6 py-3 rounded-lg
          transition-all duration-300 font-medium select-none
          ${
            isActive
              ? "bg-yellow-400 text-richblack-900 shadow-md"
              : "text-gray-300 hover:bg-richblack-700 hover:text-yellow-300"
          }`}
      >
        {/* Active indicator bar */}
        <span
          className={`absolute left-0 top-0 h-full w-[3px] rounded-r-md bg-yellow-400 
            transition-all duration-300
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
        ></span>

        {/* Icon */}
        {Icon && (
          <Icon
            className={`text-xl transition-transform duration-300
              ${isActive ? "scale-110 text-richblack-900" : "group-hover:scale-110"}`}
          />
        )}

        {/* Label */}
        <span
          className={`transition-colors duration-300 ${
            isActive ? "font-semibold" : "font-normal"
          }`}
        >
          {element.name}
        </span>
      </NavLink>
    </div>
  );
};

export default SidebarLinks;
