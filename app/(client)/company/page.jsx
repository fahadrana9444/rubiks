import HeroSection from "@/components/HeroSection";
import SolutionComponent from "@/components/SolutionComponent";
import WorkComponent from "@/components/WorkComponent";
import { solution } from "@/constants/arrays";
import { company } from "@/utils/assets";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          title="ABOUT Rubik’s"
          description={
            "Serving customers with the latest tech-infused software solutions,our innovation is what sets us apart from others. We are your partners in technical transformation."
          }
        />
      </div>

      <div className="lg:flex p-10 items-center">
        <div>
          <Image src={company}   />
        </div>
        <div className="w-2/4 flex flex-col items-start gap-5">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl text-center">Who We Are</h1>
            <hr className="border w-32 border-primary" />
          </div>
          <p >
            Rubik’s is one of the most advanced software solutions providers in
            the industry. We have been delivering high quality services and
            world class technology solutions to customers since 2020. As a part
            of the software development industry, we are into 4 major verticals,
            viz - mobile app development, game development, web development and
            NFT designs along with providing offshore development teams, Our
            team of 3+ experienced professionals comprises software developers,
            UI/UX designers, quality analysts, technology experts and the R&D
            team. The capabilities and knowledge they bring enables us to
            deliver complex projects on time. What we bring to you is
            creativity, understanding, and expertise which ensures that the
            results delivered align with your vision and objectives.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-5 my-5">
          <h1 className="text-4xl text-center">
            Developing software solutions for diverse technologies
          </h1>
          <hr className="border w-72 border-primary" />
        </div>
        <div className="p-5 flex flex-wrap justify-center gap-20 ">
          {solution.map((item, index) => (
            <WorkComponent kry={index} image={item.image} title={item.title} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-primary border-2 rounded-full p-2 border-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
