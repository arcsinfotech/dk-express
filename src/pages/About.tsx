import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Footer from "./sections/Footer";
import aboutTruck from "@/assets/images/about-truck.png";
import aboutTruck2 from "@/assets/images/about-truck2.png";
const timeline = [
  { year: "1997", event: "Founded with 2 trucks and a vision" },
  { year: "2005", event: "Expanded to 20+ trucks, serving 5 states" },
  { year: "2012", event: "Added refrigerated fleet & cold chain services" },
  { year: "2018", event: "Grew to 50+ trucks with modern equipment" },
  { year: "Today", event: "70+ trucks, 100+ trailers, 12+ states" },
];

const leaders = [
  { name: "Daljit Singh (DK)", role: "President", initials: "DK" },
  { name: "Sarb Singh", role: "Operations Manager", initials: "SS" },
];

export default function About() {
  return (
    <div className="">
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
            className="h-full relative z-10"
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
            className="h-full flex flex-col gap-4 relative justify-center items-center w-[774px]"
          >
            <svg
              width="774"
              height="432"
              viewBox="0 0 774 432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-155px] left-[-55px] z-0"
            >
              <g clip-path="url(#clip0_372_2625)">
                <path
                  d="M18 0L0 28H21L22.5 62L39.5 33V0H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 0L56.5 28H77.5L79 62L96 33V0H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 0L113 28H134L135.5 62L152.5 33V0H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 0L169.5 28H190.5L192 62L209 33V0H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 0L226 28H247L248.5 62L265.5 33V0H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 0L282.5 28H303.5L305 62L322 33V0H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 0L339 28H360L361.5 62L378.5 33V0H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 0L395.5 28H416.5L418 62L435 33V0H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 0L452 28H473L474.5 62L491.5 33V0H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 0L508.5 28H529.5L531 62L548 33V0H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 0L565 28H586L587.5 62L604.5 33V0H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 0L621.5 28H642.5L644 62L661 33V0H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 0L678 28H699L700.5 62L717.5 33V0H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 0L734.5 28H755.5L757 62L774 33V0H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M18 74L0 102H21L22.5 136L39.5 107V74H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 74L56.5 102H77.5L79 136L96 107V74H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 74L113 102H134L135.5 136L152.5 107V74H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 74L169.5 102H190.5L192 136L209 107V74H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 74L226 102H247L248.5 136L265.5 107V74H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 74L282.5 102H303.5L305 136L322 107V74H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 74L339 102H360L361.5 136L378.5 107V74H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 74L395.5 102H416.5L418 136L435 107V74H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 74L452 102H473L474.5 136L491.5 107V74H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 74L508.5 102H529.5L531 136L548 107V74H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 74L565 102H586L587.5 136L604.5 107V74H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 74L621.5 102H642.5L644 136L661 107V74H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 74L678 102H699L700.5 136L717.5 107V74H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 74L734.5 102H755.5L757 136L774 107V74H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M18 148L0 176H21L22.5 210L39.5 181V148H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 148L56.5 176H77.5L79 210L96 181V148H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 148L113 176H134L135.5 210L152.5 181V148H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 148L169.5 176H190.5L192 210L209 181V148H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 148L226 176H247L248.5 210L265.5 181V148H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 148L282.5 176H303.5L305 210L322 181V148H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 148L339 176H360L361.5 210L378.5 181V148H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 148L395.5 176H416.5L418 210L435 181V148H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 148L452 176H473L474.5 210L491.5 181V148H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 148L508.5 176H529.5L531 210L548 181V148H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 148L565 176H586L587.5 210L604.5 181V148H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 148L621.5 176H642.5L644 210L661 181V148H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 148L678 176H699L700.5 210L717.5 181V148H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 148L734.5 176H755.5L757 210L774 181V148H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M18 222L0 250H21L22.5 284L39.5 255V222H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 222L56.5 250H77.5L79 284L96 255V222H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 222L113 250H134L135.5 284L152.5 255V222H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 222L169.5 250H190.5L192 284L209 255V222H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 222L226 250H247L248.5 284L265.5 255V222H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 222L282.5 250H303.5L305 284L322 255V222H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 222L339 250H360L361.5 284L378.5 255V222H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 222L395.5 250H416.5L418 284L435 255V222H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 222L452 250H473L474.5 284L491.5 255V222H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 222L508.5 250H529.5L531 284L548 255V222H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 222L565 250H586L587.5 284L604.5 255V222H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 222L621.5 250H642.5L644 284L661 255V222H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 222L678 250H699L700.5 284L717.5 255V222H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 222L734.5 250H755.5L757 284L774 255V222H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M18 296L0 324H21L22.5 358L39.5 329V296H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 296L56.5 324H77.5L79 358L96 329V296H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 296L113 324H134L135.5 358L152.5 329V296H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 296L169.5 324H190.5L192 358L209 329V296H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 296L226 324H247L248.5 358L265.5 329V296H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 296L282.5 324H303.5L305 358L322 329V296H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 296L339 324H360L361.5 358L378.5 329V296H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 296L395.5 324H416.5L418 358L435 329V296H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 296L452 324H473L474.5 358L491.5 329V296H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 296L508.5 324H529.5L531 358L548 329V296H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 296L565 324H586L587.5 358L604.5 329V296H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 296L621.5 324H642.5L644 358L661 329V296H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 296L678 324H699L700.5 358L717.5 329V296H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 296L734.5 324H755.5L757 358L774 329V296H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M18 370L0 398H21L22.5 432L39.5 403V370H18Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M74.5 370L56.5 398H77.5L79 432L96 403V370H74.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M131 370L113 398H134L135.5 432L152.5 403V370H131Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M187.5 370L169.5 398H190.5L192 432L209 403V370H187.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M244 370L226 398H247L248.5 432L265.5 403V370H244Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M300.5 370L282.5 398H303.5L305 432L322 403V370H300.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M357 370L339 398H360L361.5 432L378.5 403V370H357Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M413.5 370L395.5 398H416.5L418 432L435 403V370H413.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M470 370L452 398H473L474.5 432L491.5 403V370H470Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M526.5 370L508.5 398H529.5L531 432L548 403V370H526.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M583 370L565 398H586L587.5 432L604.5 403V370H583Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M639.5 370L621.5 398H642.5L644 432L661 403V370H639.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M696 370L678 398H699L700.5 432L717.5 403V370H696Z"
                  fill="#E64949"
                  fill-opacity="0.08"
                />
                <path
                  d="M752.5 370L734.5 398H755.5L757 432L774 403V370H752.5Z"
                  fill="#E64949"
                  fill-opacity="0.08"
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
        <div className="bg-[#00112D] rounded-full absolute w-[236px] h-[236px] left-[15px] bottom-[190px] z-0 blur-[220px]" />
        <svg
          width="1920"
          height="673"
          viewBox="0 0 1920 673"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10"
        >
          <path
            d="M-112 556.321C-55.1667 486.154 98.3 365.321 257.5 443.321C456.5 540.821 551.5 739.82 823.5 609.32C1095.5 478.82 970 277.821 1206.5 273.321C1443 268.821 1423.29 94.6317 1522 50.8185C1611 11.3171 1777.5 0.82056 1843.5 73.8206C1909.5 146.821 1786 312.819 1976 343.819"
            stroke="white"
            stroke-width="40"
          />
        </svg>
        <div className="relative z-10 mx-[135px] my-[120px] flex gap-[139px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-[26px]"
          >
            <div
              className="text-[56px] leading-[58px] font-semibold tracking-normal flex gap-3"
              style={{ fontFamily: "Raleway" }}
            >
              <span className="text-[#262626]">About</span>
              <span className="text-[#E64949]">DK Express</span>
            </div>
            <div
              className="text-[18px] leading-[22px] tracking-normal"
              style={{ fontFamily: "Raleway" }}
            >
              DK Express is a family-owned and operated transportation company
              headquartered in Stockton, California. Founded in 1997 by Daljit
              Singh, the company has grown from a modest operation of two trucks
              to a major freight carrier with over 70 trucks and 100 trailers.
            </div>
            <div>
              <div className="flex flex-col gap-[26px]">
                <div>Refrigerated or Dry, We’ve Got You Covered</div>
                <div>
                  We specialize in both refrigerated and dry freight,
                  transporting everything from fresh produce and frozen goods to
                  construction materials and beverages. Our commitment to
                  quality service, modern equipment, and experienced drivers has
                  earned us a reputation as one of the most reliable carriers in
                  the industry.
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

      {/* <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-[#1F2A3A] mb-6">
              About DK Express
            </h2>
            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                DK Express is a family-owned and operated transportation company
                headquartered in Stockton, California. Founded in 1997 by Daljit
                Singh, the company has grown from a modest operation of two
                trucks to a major freight carrier with over 70 trucks and 100
                trailers.
              </p>
              <p>
                We specialize in both refrigerated and dry freight, transporting
                everything from fresh produce and frozen goods to construction
                materials and beverages. Our commitment to quality service,
                modern equipment, and experienced drivers has earned us a
                reputation as one of the most reliable carriers in the industry.
              </p>
              <p>
                At DK Express, we believe in treating every customer like
                family. Our service-first approach, combined with our deep
                understanding of the logistics industry, makes us the partner
                you can count on for all your transportation needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Leadership */}
      {/* <section className="py-24 bg-[#EEF2F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#b51222] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1b2232]">
              Our Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-lg p-8 text-center shadow-md border border-[#DCE3EA]"
              >
                <div className="w-24 h-24 rounded-full bg-[#0D3B8C]/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-heading font-bold text-[#0D3B8C]">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-[#1F2A3A]">
                  {leader.name}
                </h3>
                <p className="text-sm text-[#6B7280] mt-1">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      {/* <section className="py-24 bg-[#F7F9FB]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#b51222] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1b2232]">
              Company Timeline
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#DCE3EA]" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C81E3A] rounded-full border-4 border-[#F7F9FB] z-10" />
                <div
                  className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <span className="text-[#C81E3A] font-heading font-bold text-lg">
                    {item.year}
                  </span>
                  <p className="text-[#1F2A3A] mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission */}
      {/* <section className="bg-linear-to-br from-[#0A2342] to-[#0D3B8C] py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className="w-12 h-12 text-[#C81E3A] mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To provide reliable, safe, and efficient transportation services
              while maintaining the highest standards of integrity and customer
              satisfaction. We are committed to being the most trusted partner
              in the logistics industry.
            </p>
          </motion.div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
