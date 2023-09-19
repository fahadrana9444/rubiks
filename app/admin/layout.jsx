import AdminHeader from "@/components/AdminHeader";
import AdminSideBar from "@/components/AdminSideBar";
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="flex  ">
      <AdminSideBar />
      <div className="w-full ">
        <AdminHeader />
       <div className="relative bottom-32 bg-[#E6E7EB] mr-10 p-10">
       {children}
       </div>
      </div>
    </div>
  );
}
