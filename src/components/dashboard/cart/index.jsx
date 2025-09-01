import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmout from "./RenderTotalAmout";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.auth);

  return (
    <div className="w-full min-h-screen  p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-100 mb-2">Your Cart</h1>
      <p className="text-gray-600 mb-6">
        {totalItems} {totalItems === 1 ? "Course" : "Courses"} in Cart
      </p>

      {total > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section → Cart Items */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Courses in Cart
            </h2>
            <RenderCartCourses />
          </div>

          {/* Right Section → Total Amount */}
          <div className="bg-white shadow-md rounded-lg p-4 h-fit">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Order Summary
            </h2>
            <RenderTotalAmout />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <p className="text-gray-100 text-lg mb-2">🛒 Your cart is empty</p>
          <p className="text-gray-300">Browse courses and add them to your cart</p>
        </div>
      )}
    </div>
  );
}
