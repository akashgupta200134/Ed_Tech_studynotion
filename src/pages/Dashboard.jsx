import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-300 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-richblack-700 scrollbar-track-transparent">
        <div className="mx-auto w-11/12 max-w-[1200px] py-10 px-4 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
