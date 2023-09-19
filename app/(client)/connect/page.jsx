import HeroSection from "@/components/HeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          title="ABOUT Rubik’s"
          description={
            "Serving customers with the latest tech-infused software solutions, our innovation is what sets us apart from others. We are your partners in technical transformation."
          }
        />
      </div>

      <div className="bg-[#E9EDF5] my-5 p-10">
        <form action="">
          <div className=" flex gap-5 justify-center">
            <div className="lg:flex hidden flex-col gap-5 ">
              <h6 className="font-bold">Name</h6>
              <h6 className="font-bold">Email</h6>
              <h6 className="font-bold">Mobile Number</h6>
              <h6 className="font-bold">Select Service</h6>
              <h6 className="font-bold">Requirement</h6>
              <h6 className="font-bold">Brief Project Description</h6>
            </div>
            <div className="flex flex-col gap-5 lg:items-stretch items-center">
              <div className="flex lg:flex-row flex-col ">
                <input type="text" className="lg:mr-5 mb-5 lg:mb-0 w-64 px-2" placeholder="First Name" />
                <input type="text" className="w-64 px-2" placeholder="Last Name"/>
              </div>

              <div>
                <input type="text" className="lg:w-full w-64 px-2" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="lg:w-full w-64 px-2" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="lg:w-full w-64 px-2" placeholder="Select Phone Number" />
              </div>
              <div>
                <input type="text" className="lg:w-full w-64 px-2" placeholder="Requirements"/>
              </div>
              <div>
                <textarea type="text" className="lg:w-full w-64 px-2" placeholder="Description" />
              </div>
            </div>
          </div>

          <div className="flex my-5 justify-center">
            <button className="text-white bg-primary px-3 py-2 rounded-full">Submit Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
}
