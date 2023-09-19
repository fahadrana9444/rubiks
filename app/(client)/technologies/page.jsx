import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          title="TECHNOLOGIES WE DEPLOY"
          description={
            "Our cutting-edge technologies help in delivering our customers with software solutions that are seamless efficient, and streamlines with their vision."
          }
        />
      </div>
      <div>
        <Work title={"Technologies Used For Mobile App Development"} description={"Web development may look simple is one of the most challenging and complex operations because it deals with user experience. The technologies used for web development are agile and efficient."} />
      </div>
      <div>
      <Work title={"Technologies Used For Mobile App Development"} description={"Web development may look simple is one of the most challenging and complex operations because it deals with user experience. The technologies used for web development are agile and efficient."} />
      </div>
      <div>
      <Work title={"Technologies Used For Mobile App Development"} description={"Web development may look simple is one of the most challenging and complex operations because it deals with user experience. The technologies used for web development are agile and efficient."} />
      </div>
    </div>
  );
}