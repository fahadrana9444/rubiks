import { flex_1, flex_2, flex_3, flex_4 } from "@/utils/assets";
import Image from "next/image";

export default function FlexComponent() {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 lg:flex-row justify-between mx-5 items-center my-5 px-10">
        <div className="flex items-center my-2 2 gap-2">
          <Image src={flex_1} />
          <p className="w-24">3+ Years in Industry</p>
        </div>
        <div class="w-px bg-gray-300 h-20 hidden lg:block "></div>
        <div className="flex items-center my-2 gap-2">
          <Image src={flex_2} />
          <p className="w-24">10+ Expert
Professionals</p>
        </div>
        <div class="w-px bg-gray-300 h-20 hidden lg:block "></div>
        <div className="flex items-center my-2 2 gap-2">
          <Image src={flex_3} />
          <p className="w-24">2x High 
Growth Rate</p>
        </div>
        <div class="w-px bg-gray-300 h-20 hidden lg:block "></div>
        <div className="flex items-center my-2 2 gap-2">
          <Image src={flex_4} />
          <p className="w-24">100+ Projects
Delivered</p>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
}
