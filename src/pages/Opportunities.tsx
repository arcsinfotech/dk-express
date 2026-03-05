import { motion } from "framer-motion";
import Footer from "./sections/Footer";
import ModernFleet from "@/assets/modern_fleet.svg";
import AssetCarrier from "@/assets/asset_carrier.svg";
import OwnerOperator from "@/assets/owner_operator.svg";
import Growth from "@/assets/growth.svg";

import cpb from "@/assets/cpb.svg";
import cyrf from "@/assets/cyrf.svg";
import mef from "@/assets/mef.svg";
import CoolVan from "@/assets/cool_van.svg";
import scr from "@/assets/scr.svg";
import foc from "@/assets/foc.svg";
import Quote from "./sections/Quote";
import { useIsMobile } from "@/hooks/use-mobile";

const Opportunities = () => {
  const isMobile = useIsMobile();
  const cards = [
    {
      icon: (
        <img
          src={ModernFleet}
          alt="Modern Fleet"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
      title: "Modern Fleet",
      description: "All equipment under 4 years old with latest technology.",
    },
    {
      icon: (
        <img
          src={AssetCarrier}
          alt="Asset-Based Carrier"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
      title: "Asset-Based Carrier",
      description: "We own our rucks - no middlemen, direct service.",
    },
    {
      icon: (
        <img
          src={OwnerOperator}
          alt="Owner-Operator"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
      title: "Owner-Operators Welcome",
      description: "Competitive compensation and consistent freight.",
    },
    {
      icon: (
        <img
          src={Growth}
          alt="Growth Opportunities"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
      title: "Growth Opportunities",
      description: "Expanding operations with room for advancement.",
    },
  ];

  function getCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <div
        key={title}
        className="flex flex-col h-full w-full p-[26px] max-[1280px]:p-[16px] gap-4 max-[768px]:gap-3 max-[1280px]:gap-2 rounded-[26px] relative overflow-hidden"
      >
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[231px] left-[-300px] z-0 blur-[150px]" />
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[31px] left-[329px] z-0 blur-[150px]" />
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[140px] left-[-118px] z-0 blur-[150px]" />

        <div className="flex flex-col gap-4 max-[1280px]:gap-3">
          <div className="w-[58px] h-[58px] max-[1280px]:w-[48px] max-[1280px]:h-[48px] bg-[#E64949] rounded-full flex items-center justify-center">
            {icon}
          </div>
          <div
            className="text-[24px] max-[1280px]:text-[20px] text-[#262626] font-semibold capitalize"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {title}
          </div>
        </div>
        <div className="h-px bg-[#D2D2D2]" />
        <div
          className="text-[16px] max-[768px]:text-[14px] text-[#545454] capitalize"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {description}
        </div>
      </div>
    );
  }

  const reasons = [
    {
      icon: (
        <img
          src={cpb}
          alt="Competitive pay & benefits"
          width={32}
          height={32}
        />
      ),
      title: "Competitive pay & benefits",
    },
    {
      icon: (
        <img
          src={cyrf}
          alt="Consistent, year-round freight"
          width={32}
          height={32}
        />
      ),
      title: "Consistent, year-round freight",
    },
    {
      icon: (
        <img src={mef} alt="Modern equipment fleet" width={32} height={32} />
      ),
      title: "Modern equipment fleet",
    },
    {
      icon: (
        <img
          src={CoolVan}
          alt="Dedicated dispatch support"
          width={32}
          height={32}
        />
      ),
      title: "Dedicated dispatch support",
    },
    {
      icon: (
        <img
          src={scr}
          alt="Strong customer relationships"
          width={32}
          height={32}
        />
      ),
      title: "Strong customer relationships",
    },
    {
      icon: <img src={foc} alt="Family-owned culture" width={32} height={32} />,
      title: "Family-owned culture",
    },
  ];

  function getReason({
    icon,
    title,
  }: {
    icon: React.ReactNode;
    title: string;
  }) {
    return (
      <div
        key={title}
        className="flex w-[310px] max-[768px]:w-full bg-[#FFFFFF1A] rounded-[16px] h-fit items-center gap-4 p-3 max-[1280px]:p-2 max-[768px]:gap-3"
      >
        <div className="w-[75px] h-[75px] max-[768px]:w-[48px] max-[768px]:h-[48px] max-[1280px]:w-[42px] max-[1280px]:h-[42px] rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center">
          {icon}
        </div>
        <div
          className="text-[18px] max-[768px]:text-[14px] max-[1280px]:text-[16px] leading-[22px] max-[768px]:leading-[16px] max-[1280px]:leading-[20px] font-normal capitalize text-white"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="px-[135px] py-[120px] max-[768px]:px-[20px] max-[768px]:py-[60px] max-[1280px]:px-[30px] max-[1280px]:py-[80px]">
        <div className="flex flex-col items-center justify-center gap-[16px] max-[1280px]:gap-[12px] w-full">
          <div
            className="text-[54px] max-[768px]:text-[32px] max-[1280px]:text-[48px] max-[768px]:text-center max-[768px]:px-6 max-[768px]:leading-[38px] max-[1280px]:leading-[54px] text-[#262626] font-semibold"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Your Success <span className="text-[#E64949]">Starts Here</span>
          </div>
          <div
            className="text-[18px] max-[768px]:text-[14px] max-[1280px]:text-[16px] text-[#545454] text-center max-[768px]:leading-[20px] max-[1280px]:leading-[22px] capitalize font-normal line-clamp-3 max-[768px]:line-clamp-none"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Experience reliability, growth, and innovation with DK Express. From
            our modern fleet to direct service operations, we're committed to
            supporting drivers and partners with opportunity, stability, and
            cutting-edge logistics solutions.
          </div>

          <div className="mt-[34px] max-[768px]:mt-[26px] grid grid-cols-4 max-[768px]:grid-cols-1 max-[1280px]:grid-cols-2 gap-4 max-[768px]:gap-3 items-center justify-center h-full w-full">
            {cards.map((card) => getCard(card))}
          </div>
        </div>
      </div>

      <div className="bg-[#02112E] px-[135px] py-[120px] max-[768px]:px-[20px] max-[768px]:py-[60px] max-[1280px]:px-[30px] max-[1280px]:py-[80px] flex max-[1280px]:flex-col max-[768px]:gap-[26px] max-[1280px]:gap-[40px] items-center justify-between gap-2">
        <div className="max-w-[496px] max-[1280px]:max-w-full text-center flex flex-col items-center gap-[12px]">
          <div
            className="text-[54px] max-[768px]:text-[32px] max-[1280px]:text-[48px] leading-[64px] max-[768px]:leading-[38px] max-[1280px]:leading-[58px] text-[#FFFFFF] font-semibold max-[1280px]:text-center flex flex-wrap justify-center items-center gap-[8px] gap-y-0"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Why Choose
            {/* <br /> */}
            <span className="text-[#E64949]">DK Express</span>
          </div>
          <div
            className="mt-3 text-[18px] max-[768px]:text-[14px] max-[1280px]:text-[16px] max-[1280px]:leading-[20px] text-white font-normal capitalize max-[1280px]:text-center"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            At DK Express, we value our drivers and partners. We offer steady
            freight, great pay, and a supportive culture that drives success
            every mile.
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 max-[768px]:gap-2 max-[768px]:w-full">
          {reasons.map((reason) => getReason(reason))}
        </div>
      </div>

      <Quote
        title="Ready To"
        title2="Get Started?"
        description="Contact us today to learn more about partnership opportunities."
        buttonText="Become a Partner"
        path="/contact"
      />
      <Footer />
    </div>
  );
};

export default Opportunities;
