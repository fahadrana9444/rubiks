import AdminTable from "@/components/Admintable";
import Tiles from "@/components/Tiles";
import React from "react";

export default function page({ title = "Team Member Dashboard" }) {
  return (
    <div className="">
      <div>
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div>
        <Tiles />
      </div>
      <div>
        <AdminTable />
      </div>
    </div>
  );
}
