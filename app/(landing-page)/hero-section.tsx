"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "Overview",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/1.png",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Program & Eligibility",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/2.png",
  },

  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Placement & Career",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/3.png",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Fees & Financing",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/4.png",
  },
];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div
        className="font-medium 2xl:w-1/3 md:w-2/3 xl:w-1/2 lg:px-0 px-8 text-5xl xl:text-6xl     
            flex justify-center xl:font-medium xl:pt-14 text-center  pt-6"
      >
        Masters in <br /> Computer Science
      </div>

      <p className="text-2xl pt-4 text-center w-2/3 mx-auto">
        No IELTS or GRE* required &nbsp; | &nbsp; 3 year work Visa &nbsp; |
        &nbsp; High admit chance with Leap
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1 ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Check Your Admit Eligibility</div>
              <div>
                <PiArrowRight className="ml-2 " />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="pt-10 xl:pt-20 items-center justify-center">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80"
        />
      </div>

      {isSmallScreen ? (
        <div className="px-8">
          <div className="grid grid-cols-4   md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`flex p-1 md:p-8 cursor-pointer
                  ${
                    activeTab.name === tab.name
                      ? "rounded-md md:rounded-xl bg-[#FAF9FF]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                      : "md:bg-[#FAF9FF] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                  } `}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col   items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">{tab.icon}</div>
                  <div className="font-medium text-sm  xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16  w-full ">
            {activeTab && (
              <div className=" flex justify-center items-center flex-col  ">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="w-full border p-4 xl:p-16 rounded-xl bg-[#FAF9FF]"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white "
                    : "shadow-md rounded-xl pt-2  bg-[#FAF9FF] m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex flex-col items-center justify-center ">
                  <div>{tab.icon}</div>
                  <div className="text-xl font-medium mt-4">{tab.name}</div>
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" md:flex items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="w-full p-4 xl:p-8 shadow-md rounded-xl bg-[#FAF9FF]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
