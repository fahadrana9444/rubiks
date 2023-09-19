import { hero } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({title = "SOFTWARE DEVELOPMENT COMPANY" , description}) {

  return (
    <div className="bg-[#E9EDF5] lg:flex justify-between p-10">
      <div className="lg:p-5">
        <h1 className="text-5xl font-semibold my-3 w-full lg:w-3/4">{title}</h1>
        {!description? <p className="my-3">We <span className="text-primary ">Bring reality into your ideas</span></p> : <p className="my-3 w-full lg:w-2/4">{description}</p>}
        <Link href="/connect">
        <button className="bg-primary py-2 px-3 my-3 text-white font-semibold rounded-full ">Let's Get Conect </button>
        </Link>
      </div>

      <div className="flex justify-center">
       <Image src={hero} />
      </div>
    </div>
  );
}
