import React from "react";
import { GiHamburgerMenu, FiLogOut } from "../utils/assets";
export default function AdminHeader() {
  return (
    <div className="bg-primary text-white flex items-start justify-between p-5 text-lg h-60 ">
      <div>
        <GiHamburgerMenu />
      </div>
      <div className="flex items-center gap-3">
        <p> LOG OUT</p> <FiLogOut />
      </div>
    </div>
  );
}
