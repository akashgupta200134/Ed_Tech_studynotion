import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";

const RenderTotalAmout = () => {
  const { total, cart } = useSelector((state) => state.cart);

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    console.log("Bought these Courses", courses);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-200">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Order Summary
      </h2>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 font-medium">Total</p>
        <p className="text-xl font-bold text-gray-900">₹{total}</p>
      </div>

      {/* Buy Button */}
      <IconBtn
        text="Buy Now"
        onClick={handleBuyCourse}
        customClasses="w-full py-3 justify-center bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
      />
    </div>
  );
};

export default RenderTotalAmout;
