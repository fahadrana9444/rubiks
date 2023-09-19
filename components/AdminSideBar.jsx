import {
  BiSolidBell,
  IoIosSettings,
  RiFileTextLine,
  avatar,
} from "@/utils/assets";
import Image from "next/image";
import React from "react";
import AdminDropDown from "./AdminDropDown";

export default function AdminSideBar() {
  return (
    <div className="  ">
      <div className="px-10 py-5 text-white bg-primary flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Image src={avatar} className="rounded-full" />
        <h3>Fahad Rana</h3>
        <p className="text-xs text-[#84B1D6]">Lead UI/UX Designer</p>
        <div className="flex justify-between w-full text-xl border-t-2 items-center">
          <div className="pt-1">
            <BiSolidBell />
          </div>
          <div className="border h-6"></div>
          <div className="pt-1">
            <IoIosSettings />
          </div>
        </div>
      </div>
      <div className="py-5 px-2">
        <h6 className="text-lg font-semibold">Main Navigation</h6>

        <AdminDropDown />
        <AdminDropDown />
      </div>
      <hr className="border border-gray-500" />

      <div className="flex justify-center my-2">
        <button className=" flex items-center bg-[#98C739] text-white py-2 px-5 gap-2">
          {" "}
          <RiFileTextLine /> QUICK SEND
        </button>
      </div>
    </div>
  );
}
