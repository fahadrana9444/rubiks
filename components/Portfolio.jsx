'use client'
import { category, portfolioImage } from "@/constants/arrays";
import React, { useState } from "react";
import CategoryComponent from "./CategoryComponent";
import PortfolioComponent from "./PortfolioComponent";

export default function () {
  
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl">Our Work Portfolio</h1>
        <hr className="w-48 border border-primary" />
      </div>
      <div className="flex lg:justify-between justify-center px-20 flex-wrap">
        {category.map((item, index) => (
          <CategoryComponent key={index} title={item.title} />
        ))}
      </div>
      <hr />
      <div className="flex flex-wrap gap-5 justify-center ">
        {portfolioImage.map((item, index) => (
          <PortfolioComponent key={index} image={item.image} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="text-primary border-2 rounded-full p-2 border-primary">
          View The Entire Portfolio
        </button>
      </div>
    </div>
  );
}
