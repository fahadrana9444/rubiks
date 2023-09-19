import React from "react";

export default function TileComponent({color_1 = "#2bc6b4" , color_2 = "#42e395"} , title = "Document sent" , number= "106") {
  return (
    <div className={`flex gap-5 items-center bg-gradient-to-br from-[#2bc6b4] to-[#42e395] w-fit h-32 px-10 text-white rounded-xl`}>
      <h1 className="text-3xl font-semibold">{number}</h1>
      <p className="text-lg">{title}</p>
    </div>
  );
}
