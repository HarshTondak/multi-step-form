import Image from "next/image";
import React from "react";

const logos = [
  { image: "/logos/google.png" },
  { image: "/logos/mc.png" },
  { image: "/logos/apple.png" },
  { image: "/logos/uber.png" },
  { image: "/logos/tesla.png" },
  { image: "/logos/amazon.png" },
];

const SecondSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-3xl w-3/4 text-center xl:text-4xl font-bold tracking-wider">
        GET PLACED IN
      </div>

      <div className="grid grid-cols-3 xl:grid-cols-6 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={100}
              height={100}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
