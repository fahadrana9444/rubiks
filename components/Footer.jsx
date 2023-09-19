import {
  AiOutlineCopyrightCircle,
  FaPhone,
  ImLocation,
  IoMdMail,
} from "../utils/assets";
import IconButton from "./IconButton";
export default function Footer() {
  return (
    <div className="bg-[#122234] lg:mt-32 mt-48">
      <div className="bg-primary text-white lg:flex justify-between lg:px-20 lg:py-10 lg:m-10 m-5 p-5 rounded-lg items-center relative lg:bottom-24 bottom-32">
        <div>
          <p className="text-xl my-3">Get More Question..?</p>
          <p className="text-4xl my-3">Talk to our team directly.</p>
          <p>A program advisor will get in touch with you Shortly.</p>
        </div>
        <div>
          <button className="bg-white text-primary text-4xl px-5 py-3 rounded-full m-5">
            Get Started
          </button>
        </div>
      </div>
      <div className=" text-white ">
        <div className="px-10 py-5 flex flex-col lg:flex-row gap-5 justify-between ">
          <ul className="list-disc list-inside mx-20 lg:mx-0">
            <h3 className="text-2xl">Rubik's</h3>
            <li>About us</li>
            <li>Portfolio</li>
            <li>Industries</li>
            <li>Contact us</li>
          </ul>
          <ul className="list-disc list-inside mx-auto">
            <h3 className="text-2xl">Important Links</h3>
            <li>Nome</li>
            <li>Blog</li>
            <li>Why Rubik's</li>
            <li>FAQs</li>
          </ul>
          <ul className="list-none list-inside flex flex-col gap-3 mx-auto">
            <h3 className="text-2xl">Contact Details</h3>
            <li>
              {" "}
              <IconButton Icon={FaPhone} /> +92 3177480163
            </li>
            <li>
              <IconButton Icon={IoMdMail} /> info@rubiks.com
            </li>
            <li>
              <IconButton Icon={ImLocation} />
              Islambad, Pakistan
            </li>
          </ul>

          <div className="w-64 mx-auto">
            <p>Join us on our growth journey to learn from our experiences</p>
            <input
              type="email"
              className="my-2 rounded-2xl px-2 py-1 w-full "
              placeholder="Enter Your Email"
            />
            <input
              type="text"
              className="my-2 rounded-2xl px-2 py-1 w-full"
              placeholder="Enter Your Message"
            />
            <button className="bg-primary w-full rounded-2xl px-2 py-1 my-2">
              Search Now
            </button>
          </div>
        </div>
        <hr className="border-gray-500 " />
        <div className="lg:flex justify-between p-2">
          <div>
            <p className="flex gap-2 justify-center">
              {" "}
              <AiOutlineCopyrightCircle className="my-1" />
              Copyright 2023 Rubik’s. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-5 justify-center">
            <button>Privacy Policy</button>
            <button>Terms & Condition </button>
          </div>
        </div>
      </div>
    </div>
  );
}
