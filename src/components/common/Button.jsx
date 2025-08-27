import { Link } from "react-router-dom"


const Button = ({ children , linkto , active , className}) => {
  return (
    <Link to={linkto}>
       <div
      className={`mx-auto py-[9px] px-5 font-inter shadow-sm hover:scale-95 ${className} transition-all duration-200 shadow-gray-400 font-semibold text-normal rounded text-center ${active ? "bg-yellow-25 text-richblack-900":"bg-richblack-900 text-richblack-25"}`}>
        {children}
    </div>
    </Link>
 
  );
};

export default Button;
