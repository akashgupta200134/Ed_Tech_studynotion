import React from "react";
import { BsPencilSquare } from "react-icons/bs";

const IconBtn = ({
  text,
  onClick,
  children,
  disabled,
  outline = false,
  customClasses = "",
  type = "button",
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-x-2 rounded-lg px-5 py-2 
        font-semibold transition-all duration-300 focus:outline-none 
        ${
          outline
            ? "border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400/10"
            : "bg-yellow-400 text-richblack-900 hover:bg-yellow-300"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"}
        ${customClasses}
      `}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {/* Text + Custom Children */}
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        <span>{text}</span>
      )}

      {/* Special case: Edit Button shows pencil icon */}
      {text === "Edit" && <BsPencilSquare className="text-lg" />}
    </button>
  );
};

export default IconBtn;
