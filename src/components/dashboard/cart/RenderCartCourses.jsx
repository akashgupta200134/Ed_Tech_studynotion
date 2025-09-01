import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { removeFromCart } from "../../../slices/cartSlice";

const RenderCartCourses = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="space-y-4">
      {cart.map((course, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
        >
          {/* Left: Thumbnail + Info */}
          <div className="flex items-center gap-4">
            <img
              src={course?.thumbnail}
              alt="course"
              className="w-28 h-20 object-cover rounded-md shadow"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {course.courseName}
              </p>
              <p className="text-sm text-gray-500">{course?.category?.name}</p>

              {/* Ratings */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-medium text-yellow-500">4.8</span>
                <ReactStars
                  count={5}
                  size={18}
                  value={4.8}
                  edit={false}
                  color2="#facc15"
                  activeColor="#facc15"
                  emptyIcon={<IoStarSharp />}
                  fullIcon={<IoStarSharp />}
                />
                <span className="text-xs text-gray-500">
                  {course?.ratingAndReviews?.length || 0} Ratings
                </span>
              </div>
            </div>
          </div>

          {/* Right: Price + Remove */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium"
            >
              <RiDeleteBin6Line size={18} />
              <span>Remove</span>
            </button>
            <p className="text-lg font-bold text-gray-900">₹{course?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;
