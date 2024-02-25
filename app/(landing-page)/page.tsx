import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import GetStartedFree from "./fourth-section";
import Footer from "@/components/footer";
import Form from "./form";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <Form />
      <ThirdSection />
      <GetStartedFree />
      <Footer />
    </div>
  );
};

export default LandingPage;
