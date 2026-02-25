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

const Opportunities = () => {
  const cards = [
    {
      icon: <img src={ModernFleet} alt="Modern Fleet" width={32} height={32} />,
      title: "Modern Fleet",
      description: "All equipment under 4 years old with latest technology.",
    },
    {
      icon: (
        <img
          src={AssetCarrier}
          alt="Asset-Based Carrier"
          width={32}
          height={32}
        />
      ),
      title: "Asset-Based Carrier",
      description: "We own our rucks - no middlemen, direct service.",
    },
    {
      icon: (
        <img src={OwnerOperator} alt="Owner-Operator" width={32} height={32} />
      ),
      title: "Owner-Operators Welcome",
      description: "Competitive compensation and consistent freight.",
    },
    {
      icon: (
        <img src={Growth} alt="Growth Opportunities" width={32} height={32} />
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
      <div key={title} className="flex flex-col p-[26px] gap-4 rounded-[26px] relative overflow-hidden">
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[231px] left-[-300px] z-0 blur-[150px]" />
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[31px] left-[329px] z-0 blur-[150px]" />
        <div className="absolute bg-[#E64949] rounded-full w-[186px] h-[186px] top-[140px] left-[-118px] z-0 blur-[150px]" />
        <div className="flex flex-col gap-4">
          <div className="w-[58px] h-[58px] bg-[#E64949] rounded-full flex items-center justify-center">
            {icon}
          </div>
          <div
            className="text-[24px] text-[#262626] font-semibold capitalize"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {title}
          </div>
        </div>
        <div className="h-px bg-[#D2D2D2]" />
        <div
          className="text-[16px] text-[#545454] capitalize"
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
        className="flex w-[310px] bg-[#FFFFFF1A] rounded-[16px] h-fit items-center gap-4 p-3"
      >
        <div className="w-[75px] h-[75px] rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center">
          {icon}
        </div>
        <div
          className="text-[18px] leading-[22px] font-normal capitalize text-white"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="px-[135px] py-[120px]">
        <div className="flex flex-col items-center justify-center gap-[26px] w-full">
          <div
            className="text-[54px] text-[#262626] font-semibold"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Your Success <span className="text-[#E64949]">Starts Here</span>
          </div>
          <div
            className="text-[18px] text-[#545454] text-center px-100 capitalize font-normal"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Experience reliability, growth, and innovation with DK Express. From
            our modern fleet to direct service operations, we're committed to
            supporting drivers and partners with opportunity, stability, and
            cutting-edge logistics solutions.
          </div>

          <div className="mt-[34px] flex gap-4 items-center justify-center">
            {cards.map((card) => getCard(card))}
          </div>
        </div>
      </div>

      <div className="bg-[#02112E] px-[135px] py-[120px] flex items-center justify-between">
        <div className="max-w-[496px]">
          <div
            className="text-[54px] leading-[64px] text-[#FFFFFF] font-semibold"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Why Choose <br />
            <span className="text-[#E64949]">DK Express</span>
          </div>
          <div
            className="mt-3 text-[18px] text-white font-normal capitalize"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            At DK Express, we value our drivers and partners. We offer steady
            freight, great pay, and a supportive culture that drives success
            every mile.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
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
