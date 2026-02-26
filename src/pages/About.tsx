import { motion } from "framer-motion";
import Footer from "./sections/Footer";
import aboutTruck from "@/assets/images/about-truck.png";
import aboutTruck2 from "@/assets/images/about-truck2.png";
import team1 from "@/assets/team-01.png";
import team2 from "@/assets/team-02.png";
import team3 from "@/assets/team-03.png";
import team4 from "@/assets/team-04.png";

import TimeLine from "@/assets/timeline.svg";
import Testimonials from "./sections/Testimonials";
import Quote from "./sections/Quote";

const TeamMembers = [
  {
    name: "Daljit Singh",
    role: "President",
    initials: "DK",
    image: team1,
  },
  {
    name: "Sarb Singh",
    role: "Operations Manager",
    initials: "SS",
    image: team2,
  },
  {
    name: "Sarb Singh",
    role: "Operations Manager",
    initials: "SS",
    image: team3,
  },
  {
    name: "Sarb Singh",
    role: "Operations Manager",
    initials: "SS",
    image: team4,
  },
];

export default function About() {
  return (
    <div>
      <div className="bg-[#F2F2F2] flex justify-center items-center w-full">
        <div className="relative flex justify-between items-center bg-[#FFFFFF] rounded-[26px] w-full gap-[38px] mx-[135px] my-[120px] p-[12px] z-10 overflow-hidden">
          <div className="bg-[#E64949] rounded-full absolute w-[168px] h-[168px] top-[-44px] left-[-38px] blur-[120px] z-0" />
          <div className="bg-[#E64949] rounded-full absolute w-[168px] h-[168px] top-[344px] left-[376px] blur-[120px] z-0" />
          <div className="bg-[#E64949] rounded-full absolute w-[168px] h-[168px] top-[-52px] left-[714px] blur-[120px] z-0" />
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-full relative z-20"
          >
            <div className="w-[805px] h-[409px] bg-gray-200 rounded-[16px]">
              <img src={aboutTruck} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-full flex flex-col gap-4 relative justify-center items-center w-[774px] z-20"
          >
            <svg
              width="774"
              height="432"
              viewBox="0 0 774 432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-155px] left-[-55px] z-0"
            >
              <g clipPath="url(#clip0_372_2625)">
                <path
                  d="M18 0L0 28H21L22.5 62L39.5 33V0H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 0L56.5 28H77.5L79 62L96 33V0H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 0L113 28H134L135.5 62L152.5 33V0H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 0L169.5 28H190.5L192 62L209 33V0H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 0L226 28H247L248.5 62L265.5 33V0H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 0L282.5 28H303.5L305 62L322 33V0H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 0L339 28H360L361.5 62L378.5 33V0H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 0L395.5 28H416.5L418 62L435 33V0H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 0L452 28H473L474.5 62L491.5 33V0H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 0L508.5 28H529.5L531 62L548 33V0H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 0L565 28H586L587.5 62L604.5 33V0H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 0L621.5 28H642.5L644 62L661 33V0H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 0L678 28H699L700.5 62L717.5 33V0H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 0L734.5 28H755.5L757 62L774 33V0H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M18 74L0 102H21L22.5 136L39.5 107V74H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 74L56.5 102H77.5L79 136L96 107V74H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 74L113 102H134L135.5 136L152.5 107V74H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 74L169.5 102H190.5L192 136L209 107V74H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 74L226 102H247L248.5 136L265.5 107V74H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 74L282.5 102H303.5L305 136L322 107V74H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 74L339 102H360L361.5 136L378.5 107V74H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 74L395.5 102H416.5L418 136L435 107V74H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 74L452 102H473L474.5 136L491.5 107V74H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 74L508.5 102H529.5L531 136L548 107V74H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 74L565 102H586L587.5 136L604.5 107V74H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 74L621.5 102H642.5L644 136L661 107V74H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 74L678 102H699L700.5 136L717.5 107V74H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 74L734.5 102H755.5L757 136L774 107V74H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M18 148L0 176H21L22.5 210L39.5 181V148H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 148L56.5 176H77.5L79 210L96 181V148H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 148L113 176H134L135.5 210L152.5 181V148H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 148L169.5 176H190.5L192 210L209 181V148H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 148L226 176H247L248.5 210L265.5 181V148H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 148L282.5 176H303.5L305 210L322 181V148H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 148L339 176H360L361.5 210L378.5 181V148H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 148L395.5 176H416.5L418 210L435 181V148H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 148L452 176H473L474.5 210L491.5 181V148H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 148L508.5 176H529.5L531 210L548 181V148H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 148L565 176H586L587.5 210L604.5 181V148H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 148L621.5 176H642.5L644 210L661 181V148H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 148L678 176H699L700.5 210L717.5 181V148H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 148L734.5 176H755.5L757 210L774 181V148H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M18 222L0 250H21L22.5 284L39.5 255V222H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 222L56.5 250H77.5L79 284L96 255V222H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 222L113 250H134L135.5 284L152.5 255V222H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 222L169.5 250H190.5L192 284L209 255V222H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 222L226 250H247L248.5 284L265.5 255V222H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 222L282.5 250H303.5L305 284L322 255V222H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 222L339 250H360L361.5 284L378.5 255V222H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 222L395.5 250H416.5L418 284L435 255V222H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 222L452 250H473L474.5 284L491.5 255V222H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 222L508.5 250H529.5L531 284L548 255V222H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 222L565 250H586L587.5 284L604.5 255V222H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 222L621.5 250H642.5L644 284L661 255V222H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 222L678 250H699L700.5 284L717.5 255V222H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 222L734.5 250H755.5L757 284L774 255V222H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M18 296L0 324H21L22.5 358L39.5 329V296H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 296L56.5 324H77.5L79 358L96 329V296H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 296L113 324H134L135.5 358L152.5 329V296H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 296L169.5 324H190.5L192 358L209 329V296H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 296L226 324H247L248.5 358L265.5 329V296H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 296L282.5 324H303.5L305 358L322 329V296H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 296L339 324H360L361.5 358L378.5 329V296H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 296L395.5 324H416.5L418 358L435 329V296H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 296L452 324H473L474.5 358L491.5 329V296H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 296L508.5 324H529.5L531 358L548 329V296H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 296L565 324H586L587.5 358L604.5 329V296H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 296L621.5 324H642.5L644 358L661 329V296H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 296L678 324H699L700.5 358L717.5 329V296H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 296L734.5 324H755.5L757 358L774 329V296H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M18 370L0 398H21L22.5 432L39.5 403V370H18Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M74.5 370L56.5 398H77.5L79 432L96 403V370H74.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M131 370L113 398H134L135.5 432L152.5 403V370H131Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M187.5 370L169.5 398H190.5L192 432L209 403V370H187.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M244 370L226 398H247L248.5 432L265.5 403V370H244Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M300.5 370L282.5 398H303.5L305 432L322 403V370H300.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M357 370L339 398H360L361.5 432L378.5 403V370H357Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M413.5 370L395.5 398H416.5L418 432L435 403V370H413.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M470 370L452 398H473L474.5 432L491.5 403V370H470Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M526.5 370L508.5 398H529.5L531 432L548 403V370H526.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M583 370L565 398H586L587.5 432L604.5 403V370H583Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M639.5 370L621.5 398H642.5L644 432L661 403V370H639.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M696 370L678 398H699L700.5 432L717.5 403V370H696Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
                <path
                  d="M752.5 370L734.5 398H755.5L757 432L774 403V370H752.5Z"
                  fill="#E64949"
                  fillOpacity="0.08"
                />
              </g>
              <defs>
                <clipPath id="clip0_372_2625">
                  <rect width="774" height="432" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="bg-white rounded-full absolute w-[693px] h-[693px] top-[-141px] left-[-115px] z-2 blur-[120px]" />
            <div className="relative z-10 w-[499px]">
              <div className="flex gap-2">
                <span
                  className="text-[54px] font-semibold text-[#262626] leading-[58px]"
                  style={{ fontFamily: "Raleway" }}
                >
                  Our
                </span>
                <span
                  className="text-[54px] font-semibold text-[#E64949] leading-[58px]"
                  style={{ fontFamily: "Raleway" }}
                >
                  Mission
                </span>
              </div>
              <div className="text-[#444444] leading-[22px] tracking-normal">
                To provide reliable, safe, and efficient transportation services
                while maintaining the highest standards of integrity and
                customer satisfaction. We are committed to being the most
                trusted partner in the logistics industry.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white relative z-10">
        <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] top-[89px] left-[1066px] z-0 blur-[220px]" />
        <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] top-[460px] left-[1506px] z-0 blur-[220px]" />
        <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] left-[-235px] top-[16px] z-0 blur-[220px]" />
        <svg
          width="1920"
          height="673"
          viewBox="0 0 1920 673"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10 right-0 bottom-[95px]"
        >
          <path
            d="M-112 556.321C-55.1667 486.154 98.3 365.321 257.5 443.321C456.5 540.821 551.5 739.82 823.5 609.32C1095.5 478.82 970 277.821 1206.5 273.321C1443 268.821 1423.29 94.6317 1522 50.8185C1611 11.3171 1777.5 0.82056 1843.5 73.8206C1909.5 146.821 1786 312.819 1976 343.819"
            stroke="white"
            strokeWidth="40"
          />
        </svg>
        <div className="relative z-10 mx-[135px] my-[120px] flex gap-[139px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-[26px] relative z-20"
          >
            <div
              className="text-[56px] leading-[58px] font-semibold tracking-normal flex gap-3"
              style={{ fontFamily: "Raleway" }}
            >
              <span className="text-[#262626]">About</span>
              <span className="text-[#E64949]">DK Express</span>
            </div>
            <div
              className="text-[18px] leading-[22px] tracking-normal text-[#545454]"
              style={{ fontFamily: "Raleway" }}
            >
              DK Express is a family-owned and operated transportation company
              headquartered in Stockton, California. Founded in 1997 by Daljit
              Singh, the company has grown from a modest operation of two trucks
              to a major freight carrier with over 70 trucks and 100 trailers.
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-[26px]">
                <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] top-[-184px] left-[781px] z-10 blur-[220px]" />
                <div className="bg-[#B60001] rounded-full absolute w-[236px] h-[236px] top-[135px] left-[-193px] z-10 blur-[220px]" />
                <div className="relative flex flex-col gap-[12px] bg-white p-[26px] ">
                  <div
                    className="text-[20px] leading-[26px] font-semibold text-[#262626]"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Refrigerated or Dry, We’ve Got You Covered
                  </div>
                  <div
                    className="text-lg leading-[22px] text-[#545454]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    We specialize in both refrigerated and dry freight,
                    transporting everything from fresh produce and frozen goods
                    to construction materials and beverages. Our commitment to
                    quality service, modern equipment, and experienced drivers
                    has earned us a reputation as one of the most reliable
                    carriers in the industry.
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[26px]">
                <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] top-[-184px] left-[781px] z-10 blur-[220px]" />
                <div className="bg-[#B60001] rounded-full absolute w-[236px] h-[236px] top-[135px] left-[-193px] z-10 blur-[220px]" />
                <div className="relative flex flex-col gap-[12px] bg-white p-[26px] ">
                  <div
                    className="text-[20px] leading-[26px] font-semibold text-[#262626]"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Where Service Meets Commitment
                  </div>
                  <div
                    className="text-lg leading-[22px] text-[#545454]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    At DK Express, we believe in treating every customer like
                    family. Our service-first approach, combined with our deep
                    understanding of the logistics industry, makes us the
                    partner you can count on for all your transportation needs.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="bg-[#FFFFFF] rounded-[26px] p-3"
          >
            <div className="w-[654px] h-[638px]">
              <img src={aboutTruck2} alt="" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#F4F5F7] py-[120px] flex flex-col gap-[83px]">
        <div className="flex flex-col items-center justify-center gap-3">
          <div
            className="bg-[#0000000A] rounded-[36px] text-[18px] leading-[22px] tracking-normal py-2 px-4 w-fit"
            style={{ fontFamily: "Outfit" }}
          >
            Our Journey
          </div>
          <div
            className="text-[54px] leading-[58px] font-semibold tracking-normal flex gap-3"
            style={{ fontFamily: "Raleway" }}
          >
            <span className="text-[#262626]">Company</span>
            <span className="text-[#E64949]">Timeline</span>
          </div>
        </div>
        <img src={TimeLine} alt="Timeline" />
      </div>
      <div className="bg-white">
        <div className="py-[120px] px-[135px] bg-[linear-gradient(to_bottom,#00112D_50%,#FFFFFF_50%)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none">
            <svg
              width="387"
              height="368"
              viewBox="0 0 387 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="top-[-7px] left-[204px] absolute h-full"
            >
              <path
                d="M16.8359 -7C20.8359 21.6667 39.9359 78.9 84.3359 78.5C139.836 78 233.336 67 231.836 140.5C230.336 214 23.8359 188.5 23.8359 306.5C23.8359 356 64.3359 387 179.336 370.5C294.336 354 229.836 223.5 284.836 182C328.836 148.8 360.836 184.5 371.336 206.5"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="34"
              />
            </svg>
            <div className="w-[494px] h-[494px] bg-[#001E50] top-[-48px] left-[330px] absolute blur-[100px] rounded-full" />
            <div className="w-[494px] h-[494px] bg-[#001E50] top-[151px] left-[1552px] absolute blur-[100px] rounded-full" />
            <div className="flex flex-col gap-3 absolute top-[120px] left-[144px]">
              <div
                className="bg-[#FFFFFF14] text-white px-4 py-2 text-lg leading-[22px] rounded-[36px] w-fit"
                style={{ fontFamily: "Outfit" }}
              >
                Leadership
              </div>
              <div
                className="flex flex-row gap-2 text-[54px] leading-[58px] font-semibold"
                style={{ fontFamily: "Raleway" }}
              >
                <span className="text-white">Our</span>
                <span className="text-[#E64949]">Team</span>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0.5, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative z-20"
          >
            <div className="flex flex-row gap-6.5 justify-end relative z-10">
              {TeamMembers.map((member, index) => (
                <div
                  className="h-[430px] w-[293px] rounded-[26px] overflow-hidden shadow-[0_22px_49.8px_rgba(0,0,0,0.12)]"
                  key={index}
                >
                  <div
                    className={`h-[350px] w-full relative z-0 flex items-center justify-center ${index % 2 !== 0 ? "bg-[linear-gradient(145.68deg,#E8EEF6_3.49%,#B5CEF6_97.24%)]" : "bg-[linear-gradient(139.31deg,#F9ECEC_2.19%,#F0C0C0_95.68%)]"}`}
                  >
                    <svg
                      width="293"
                      height="340"
                      viewBox="0 0 293 340"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute z-0"
                    >
                      <g clipPath="url(#clip0_417_2558)">
                        <path
                          d="M0 0H342"
                          stroke="url(#paint0_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 10H342"
                          stroke="url(#paint1_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 20H342"
                          stroke="url(#paint2_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 30H342"
                          stroke="url(#paint3_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 40H342"
                          stroke="url(#paint4_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 50H342"
                          stroke="url(#paint5_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 60H342"
                          stroke="url(#paint6_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 70H342"
                          stroke="url(#paint7_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 80H342"
                          stroke="url(#paint8_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 90H342"
                          stroke="url(#paint9_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 100H342"
                          stroke="url(#paint10_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 110H342"
                          stroke="url(#paint11_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 120H342"
                          stroke="url(#paint12_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 130H342"
                          stroke="url(#paint13_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 140H342"
                          stroke="url(#paint14_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 150H342"
                          stroke="url(#paint15_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 160H342"
                          stroke="url(#paint16_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 170H342"
                          stroke="url(#paint17_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 180H342"
                          stroke="url(#paint18_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 190H342"
                          stroke="url(#paint19_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 200H342"
                          stroke="url(#paint20_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 210H342"
                          stroke="url(#paint21_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 220H342"
                          stroke="url(#paint22_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 230H342"
                          stroke="url(#paint23_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 240H342"
                          stroke="url(#paint24_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 250H342"
                          stroke="url(#paint25_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 260H342"
                          stroke="url(#paint26_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 270H342"
                          stroke="url(#paint27_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 280H342"
                          stroke="url(#paint28_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 290H342"
                          stroke="url(#paint29_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 300H342"
                          stroke="url(#paint30_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 310H342"
                          stroke="url(#paint31_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 320H342"
                          stroke="url(#paint32_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 330H342"
                          stroke="url(#paint33_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 340H342"
                          stroke="url(#paint34_linear_417_2558)"
                          strokeOpacity="0.4"
                          strokeWidth="4"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_417_2558"
                          x1="0"
                          y1="0.5"
                          x2="342"
                          y2="0.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_417_2558"
                          x1="0"
                          y1="10.5"
                          x2="342"
                          y2="10.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_417_2558"
                          x1="0"
                          y1="20.5"
                          x2="342"
                          y2="20.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_417_2558"
                          x1="0"
                          y1="30.5"
                          x2="342"
                          y2="30.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_417_2558"
                          x1="0"
                          y1="40.5"
                          x2="342"
                          y2="40.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_417_2558"
                          x1="0"
                          y1="50.5"
                          x2="342"
                          y2="50.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_417_2558"
                          x1="0"
                          y1="60.5"
                          x2="342"
                          y2="60.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_417_2558"
                          x1="0"
                          y1="70.5"
                          x2="342"
                          y2="70.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_417_2558"
                          x1="0"
                          y1="80.5"
                          x2="342"
                          y2="80.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint9_linear_417_2558"
                          x1="0"
                          y1="90.5"
                          x2="342"
                          y2="90.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint10_linear_417_2558"
                          x1="0"
                          y1="100.5"
                          x2="342"
                          y2="100.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_417_2558"
                          x1="0"
                          y1="110.5"
                          x2="342"
                          y2="110.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint12_linear_417_2558"
                          x1="0"
                          y1="120.5"
                          x2="342"
                          y2="120.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint13_linear_417_2558"
                          x1="0"
                          y1="130.5"
                          x2="342"
                          y2="130.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint14_linear_417_2558"
                          x1="0"
                          y1="140.5"
                          x2="342"
                          y2="140.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint15_linear_417_2558"
                          x1="0"
                          y1="150.5"
                          x2="342"
                          y2="150.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint16_linear_417_2558"
                          x1="0"
                          y1="160.5"
                          x2="342"
                          y2="160.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint17_linear_417_2558"
                          x1="0"
                          y1="170.5"
                          x2="342"
                          y2="170.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint18_linear_417_2558"
                          x1="0"
                          y1="180.5"
                          x2="342"
                          y2="180.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint19_linear_417_2558"
                          x1="0"
                          y1="190.5"
                          x2="342"
                          y2="190.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint20_linear_417_2558"
                          x1="0"
                          y1="200.5"
                          x2="342"
                          y2="200.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint21_linear_417_2558"
                          x1="0"
                          y1="210.5"
                          x2="342"
                          y2="210.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint22_linear_417_2558"
                          x1="0"
                          y1="220.5"
                          x2="342"
                          y2="220.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint23_linear_417_2558"
                          x1="0"
                          y1="230.5"
                          x2="342"
                          y2="230.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint24_linear_417_2558"
                          x1="0"
                          y1="240.5"
                          x2="342"
                          y2="240.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint25_linear_417_2558"
                          x1="0"
                          y1="250.5"
                          x2="342"
                          y2="250.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint26_linear_417_2558"
                          x1="0"
                          y1="260.5"
                          x2="342"
                          y2="260.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint27_linear_417_2558"
                          x1="0"
                          y1="270.5"
                          x2="342"
                          y2="270.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint28_linear_417_2558"
                          x1="0"
                          y1="280.5"
                          x2="342"
                          y2="280.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint29_linear_417_2558"
                          x1="0"
                          y1="290.5"
                          x2="342"
                          y2="290.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint30_linear_417_2558"
                          x1="0"
                          y1="300.5"
                          x2="342"
                          y2="300.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint31_linear_417_2558"
                          x1="0"
                          y1="310.5"
                          x2="342"
                          y2="310.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint32_linear_417_2558"
                          x1="0"
                          y1="320.5"
                          x2="342"
                          y2="320.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint33_linear_417_2558"
                          x1="0"
                          y1="330.5"
                          x2="342"
                          y2="330.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                          id="paint34_linear_417_2558"
                          x1="0"
                          y1="340.5"
                          x2="342"
                          y2="340.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <clipPath id="clip0_417_2558">
                          <rect width="293" height="340" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div
                      className={`absolute w-[219px] top-[22px] left-[37px] h-[322px] z-10 border border-white/54 rounded-[3600px] ${index % 2 !== 0 ? "bg-[linear-gradient(180deg,#FFFFFF1A_0%,#407BFF1A_100%)]" : "bg-[linear-gradient(139.31deg,#F9ECEC_2.19%,#F0C0C0_95.68%)]"}`}
                    />
                    <div className="relative z-20 h-full w-full flex items-end justify-center">
                      <img
                        src={member.image}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-2 px-[21px] py-4 text-lg leading-[20px] tracking-normal"
                    style={{ fontFamily: "Raleway" }}
                  >
                    <div>
                      {member.name} ({member.initials})
                    </div>
                    <div className="font-semibold">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Testimonials />
      <Quote />

      <Footer />
    </div>
  );
}
