import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../common/IconBtn";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="space-y-7">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-richblack-5 tracking-tight">
        My Profile
      </h1>

      {/* Section 1 - Profile Info */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-richblack-700 bg-richblack-800 p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-x-6">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="w-24 h-24 rounded-full object-cover border-2 border-richblack-600 shadow-md"
          />
          <div>
            <p className="text-xl font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit Profile"
          onClick={() => navigate("/dashboard/settings")}
        />
      </div>

      {/* Section 2 - About */}
      <div className="flex flex-col gap-y-6 rounded-2xl border border-richblack-700 bg-richblack-800 p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onClick={() => navigate("/dashboard/settings")}
          />
        </div>
        <p className="text-sm text-richblack-300 leading-relaxed">
          {user?.additionalDetails?.about ?? "Write something about yourself"}
        </p>
      </div>

      {/* Section 3 - Personal Details */}
      <div className="flex flex-col gap-y-6 rounded-2xl border border-richblack-700 bg-richblack-800 p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onClick={() => navigate("/dashboard/settings")}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 max-w-3xl">
          {/* Left Column */}
          <div className="space-y-6">
            <Detail label="First Name" value={user?.firstName} />
            <Detail label="Email" value={user?.email} />
            <Detail
              label="Gender"
              value={user?.additionalDetails?.gender ?? "Add Gender"}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Detail label="Last Name" value={user?.lastName} />
            <Detail
              label="Phone Number"
              value={user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            />
            <Detail
              label="Date of Birth"
              value={user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 🔹 Reusable small component for details */
const Detail = ({ label, value }) => (
  <div>
    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-richblack-500">
      {label}
    </p>
    <p className="text-sm font-medium text-richblack-100">{value}</p>
  </div>
);

export default MyProfile;
