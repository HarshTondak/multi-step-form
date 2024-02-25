"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { TbSwitch3 } from "react-icons/tb";
import { PiArrowRight } from "react-icons/pi";

const tabs = [
  {
    text: "#1",
    subtext: "Best Engineering Jobs",
  },
  {
    text: "94%",
    subtext: "Placement Rate",
  },
  {
    text: "$96K",
    subtext: "Average Salary",
  },

  {
    header: "GRE and IELTS waiver*",
    subheading: "Scholarship of up to ₹17 lakhs",
    image: "/assets/DumpingDoodle.svg",
  },

  {
    header: "High admit chance",
    subheading: "Education from a top-rank university",
    image: "/assets/CoffeeDoddle.svg",
  },

  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    title: "Visualize, filter & sort any way you want",
    images: [
      {
        title:
          "Google employee #23, inventor of Gmail and now an angel investor Credited with suggesting Google's now-famous motto, Don't be evil.",
        picture: "/a1.png",
      },
      {
        title:
          "Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovations winning inventor.",
        picture: "/a2.png",
      },
      {
        title:
          "CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.",
        picture: "/a3.png",
      },
    ],
  },
  {
    userName: "Mohammad D",
    userUniversity: "CWR University",
    userText: (
      <div className="md:mt-4">
        I valued working with professors on interesting projects for my final
        project requirement.
      </div>
    ),
  },
  {
    userName: "Winston K",
    userUniversity: "ABC University",
    userText: (
      <div className="md:mt-4">
        The Career Management Center of ABCU is a great resource. Fort Collins
        is a beautiful city, and ABCU has an amazing campus.
      </div>
    ),
  },
  {
    userName: "Daniel O",
    userUniversity: "XYZ University",
    userText: (
      <div className="md:mt-4">
        Going to XYZU gives you exposure to so many opportunities. I already
        have a job at EY after graduation.
      </div>
    ),
  },
];

const ThirdSection = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col">
        <div className="text-3xl w-3/4 xl:text-5xl font-bold xl:w-1/2 text-center">
          Why you should consider LeapAdvantage ?
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer my-3">
          Learn more <PiArrowRight className="ml-3 text-sm " />
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8  md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? "md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index <= 4
                  ? "md:col-span-6 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index === 5
                  ? " md:col-span-6  lg:col-span-8  lg:row-span-3    bg-[#f6f5f4] p-6 rounded-xl "
                  : index > 5
                  ? "col-span-12 lg:col-span-4  md:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex-col "
                  : "l"
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className=" text-5xl font-medium text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : index <= 4 ? (
                <div>
                  <div className="text-2xl">✅{tab.header}</div>
                  <div className="text-2xl">✅{tab.subheading}</div>
                </div>
              ) : index === 5 ? (
                <>
                  {tab.images && (
                    <div className="flex justify-center items-center flex-col ">
                      <Image
                        src={tab.images[activeImageIndex].picture}
                        alt={`${tab.images[activeImageIndex].title} Image`}
                        width={300}
                        height={300}
                        className="rounded-xl w-fit bg-blend-lighten hover:bg-blend-darken"
                      />

                      <div>
                        <div className="font-medium text-l md:text-xl mt-10 pb-4 text-center">
                          {tab.images[activeImageIndex].title}
                        </div>
                      </div>

                      <div className="flex space-x-2 xl:space-x-6 xl:mt-10">
                        {tab.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`${
                              index === activeImageIndex
                                ? "p-2 rounded-full bg-green-400 "
                                : "  p-2 rounded-full bg-blue-400"
                            }  `}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                index > 5 && (
                  <>
                    <div className="text-xl font-bold text-sky-500">
                      {tab.userName}
                    </div>
                    <div className="text-sm font-normal ">
                      {tab.userUniversity}
                    </div>
                    <div className="text-sm font-normal mt-10 md:mt-0">
                      {tab.userText}
                    </div>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
