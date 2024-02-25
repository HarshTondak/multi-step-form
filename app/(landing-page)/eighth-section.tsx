import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";

const GetStartedFree = () => {
  return (
    <>
      <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Got Questions? Let&apos;s Connect
        </div>
        <div className="text-sky-500 my-4 flex items-center hover:underline hover:cursor-pointer">
          Request a demo <PiArrowRight className="ml-3 text-sm " />
        </div>

        <Image
          src="/assets/MessyDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-80 pt-10"
        />
      </div>
    </>
  );
};

export default GetStartedFree;
