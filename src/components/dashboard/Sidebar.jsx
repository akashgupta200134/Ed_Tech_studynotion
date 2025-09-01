import React, { useState } from "react";
import { sidebarLinks } from "../../data/dashboard-links";
import { logout } from "../../services/operations/authApI";
import { useDispatch, useSelector } from "react-redux";
import SidebarLinks from "./SidebarLinks";
import { VscSettingsGear, VscSignOut } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../common/ConfirmationModal";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <aside className="flex min-w-[240px] flex-col justify-between border-r border-gray-700 bg-richblack-900  text-gray-200">
      {/* Links Section */}
      <div className="flex flex-col px-3 py-8 space-y-2">
        {sidebarLinks.map((element) => {
          if (element.type && user ?.accountType !== element.type) {
            return null;
          }
          return (
            <SidebarLinks
              key={element.id}
              element={element}
              iconName={element.icon}
            />
          );
        })}
      </div>

      {/* Divider */}
      <div className="mx-auto my-3 h-[1px] w-10/12 bg-gray-700"></div>

      {/* Settings + Logout */}
      <div className="flex flex-col px-3 pb-36 space-y-2">
        <SidebarLinks
          element={{ name: "Settings", path: "/dashboard/settings" }}
          iconName="VscSettingsGear"
        />

        <button
          onClick={() =>
            setConfirmationModal({
              text1: "Are you sure?",
              text2: "You will be logged out from your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
            btn1Handler: () => {dispatch(logout(navigate))},
            btn2Handler: () => setConfirmationModal(null),
            })
          }
          className="flex items-center gap-3 rounded-lg px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-red-600 hover:text-white"
        >
          <VscSignOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </aside>
  );
};

export default Sidebar;
