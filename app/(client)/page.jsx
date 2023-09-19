import FlexComponent from "@/components/FlexComponent";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import Work from "@/components/Work";
import { service } from "@/constants/arrays";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FlexComponent />
      </div>
      <div>
        <Services title={"Our Services"} array={service} />
      </div>

      <div>
        <Portfolio />
      </div>
      <div>
        <Solution />
      </div>
      <div>
        <Work title={"Technologies Used For Game Development"} />
      </div>
    </div>
  );
}
