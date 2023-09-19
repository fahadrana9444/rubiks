import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiFilter } from "react-icons/hi";

export default function AdminTable() {
  const tableData = [
    { id: 1, name: "User 1", role: "Admin" },
    { id: 2, name: "User 2", role: "Moderator" },
    { id: 3, name: "User 3", role: "User" },
    // Add more data as needed
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Document Sent Details</h1>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border p-2 pl-8 rounded-md"
              />
              <div className="absolute  text-gray-300 inset-y-0 left-0 pl-2 flex items-center">
                <RiSearchLine size={20} />
              </div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md px-5">
              Export
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md px-5 flex items-center gap-2">
              <HiFilter />
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md my-5">
        <table className="min-w-full py-5 rounded-xl border">
          <thead>
            <tr className="border-b">
              <th className="text-left">ID</th>
              <th className="text-left">Name</th>
              <th className="text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b">
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
