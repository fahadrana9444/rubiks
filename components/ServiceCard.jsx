import Image from "next/image";
import { website } from "../utils/assets";
export default function ServiceCard({
  PColor = "#ffd2e5",
  SColor = "#ee92ba",
  image,
  title = "Web Development",
  description = "We offer professional website development services tailored to your needs. Our team of experts can build custom websites for businesses of all sizes.",
}) {
  return (
    <div
      style={{ backgroundColor: `${PColor}`, borderColor: `${SColor}` }}
      className="border w-80 text-center p-5 rounded-xl m-5 flex flex-col items-center  shadow-lg justify-evenly gap-3 "
    >
      <div
        className="p-3 rounded-xl w-fit"
        style={{ backgroundColor: `${SColor}` }}
      >
        <Image src={image ? image : website} />
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="">{description}</p>
      </div>

      <div>
        <p className="font-bold">Learn More</p>
      </div>
    </div>
  );
}
