import React from "react";
import IconBtn from "./IconBtn";

const ConfirmationModal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-11/12 max-w-[400px] rounded-2xl border border-richblack-600 bg-richblack-900 p-6 shadow-lg shadow-black/40 animate-fadeIn">
        
        {/* Title */}
        <p className="text-xl font-semibold text-white">{modalData?.text1}</p>
        
        {/* Subtitle */}
        <p className="mt-2 mb-6 text-sm leading-relaxed text-richblack-300">
          {modalData?.text2}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={modalData?.btn2Handler}
            className="rounded-lg border border-richblack-600 px-4 py-2 text-sm font-medium text-richblack-200 transition-all hover:bg-richblack-700 hover:text-white"
          >
            {modalData?.btn2Text}
          </button>

          <IconBtn
            onClick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            className="!bg-red-600 hover:!bg-red-700 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
