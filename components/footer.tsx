import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex lg:items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="lg:flex lg:space-x-32 md:px-0 ">
        <div className="pt-4">
          <Image
            src="/logos/bird-logo.png"
            width={1025}
            height={500}
            alt="logo"
            className=" w-28 "
          />
        </div>

        <div className="flex-col space-y-6 ">
          <div className="pt-10 font-medium">PRODUCT</div>
          <div className="font-light space-y-4 text-sm">
            <div>What&apos;s New</div>
            <div>Pricing</div>
            <div>Premium</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">USE CASES</div>
          <div className="font-light space-y-4 text-sm">
            <div>Company</div>
            <div>Leadership</div>
            <div>Customers</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">FOR BUSINESS</div>
          <div className="font-light space-y-4 text-sm">
            <div>Project Planning</div>
            <div>Goal Management</div>
            <div>Increase Productivity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
