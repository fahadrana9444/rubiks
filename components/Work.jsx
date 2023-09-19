import React from "react";
import WorkComponent from "./WorkComponent";
import CategoryComponent from "./CategoryComponent";
import { category, technologies, technologiesImage } from "@/constants/arrays";

export default function Work({ title, description }) {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-5 my-5">
        <h1 className="text-4xl text-center">{title}</h1>
        <hr className="border w-72 border-primary" />
      </div>
      {description && (
        <div className="flex justify-center">
          <p className=" text-center my-5 w-full lg:w-3/4">{description}</p>
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-20 justify-center px-20 lg:flex-wrap">
        {technologies.map((item, index) => (
          <CategoryComponent key={index} title={item.title} />
        ))}
      </div>
      <hr />
      <div className="flex flex-wrap justify-center gap-5 my-5">
        {technologiesImage.map((item, index) => (
          <WorkComponent key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
