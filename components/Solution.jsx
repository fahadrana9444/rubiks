import React from "react";
import SolutionComponent from "./SolutionComponent";
import { solution } from "@/constants/arrays";

export default function () {
  return (
    <div className="bg-[#E9EDF5] p-5 ">
      <div className="flex flex-col items-center gap-5 my-5">
        <h1 className="text-4xl text-center">
          Developing software solutions for diverse technologies
        </h1>
        <hr className="border w-72 border-primary" />
      </div>
      <div className="p-5 flex flex-wrap justify-center gap-20 ">
        {solution.map((item, index) => (
          <SolutionComponent
            kry={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-primary border-2 rounded-full p-2 border-primary">
          Learn More
        </button>
      </div>
    </div>
  );
}
