import FlexComponent from "@/components/FlexComponent";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import Work from "@/components/Work";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          title="MOBILE APP DEVELOPMENT COMPANY"
          description={"We build dynamic, user-friendly, mobile applications."}
        />
      </div>
      <div>
        <FlexComponent />
      </div>
      <div>
        <Services title="App Development Solutions" />
      </div>
      <div><Solution /></div>
      <div>
        <Work />
      </div>
    </div>
  );
}
