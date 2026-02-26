import DryVan from "@/assets/dry_van.svg";
import CoolVan from "@/assets/cool_van.svg";
import FastVan from "@/assets/fast_van.svg";
import Team from "@/assets/team.svg";
import CrossDock from "@/assets/cross_dock.svg";

import Quote from "./sections/Quote";
import Footer from "./sections/Footer";

const services = [
  {
    icon: (
      <img src={CoolVan} alt="Refrigerated Transport" width={32} height={32} />
    ),
    title: "Refrigerated Transport",
    details: [
      "53' food-grade reefers",
      "Thermo King 600 series units",
      "Certified USFTP (US Food Transportation Program)",
      "Temperature monitoring & reporting",
      "Fresh, frozen, and chilled cargo",
      "Special permits for meats, dairy, wine, and liquor",
    ],
  },
  {
    icon: <img src={DryVan} alt="Dry Van" width={32} height={32} />,
    title: "Dry Van",
    details: [
      "53' standard dry vans",
      "Construction materials",
      "Beverages and consumer goods",
      "Paper goods and packaging",
      "Electronics and retail freight",
      "Nationwide coverage across 12+ states",
    ],
  },
  {
    icon: (
      <img src={FastVan} alt="Storage & Re-Delivery" width={32} height={32} />
    ),
    title: "Storage & Re-Delivery",
    details: [
      "Stockton, CA warehouse facility",
      "Short-term storage solutions",
      "Flexible re-delivery scheduling",
      "Secure, monitored facilities",
      "Cross-dock capabilities",
      "Inventory management support",
    ],
  },
  {
    icon: <img src={Team} alt="Team Driving" width={32} height={32} />,
    title: "Team Driving",
    details: [
      "Non-stop delivery for time-sensitive freight",
      "Faster transit times",
      "Two qualified drivers per truck",
      "Ideal for coast-to-coast shipments",
      "24/7 dispatch support",
      "Real-time GPS tracking",
    ],
  },
  {
    icon: <img src={CrossDock} alt="Cross Dock" width={32} height={32} />,
    title: "Cross Dock",
    details: [
      "Single-source logistics solution",
      "Efficient freight consolidation",
      "Reduced handling and transit time",
      "Cost-effective distribution",
      "Streamlined supply chain",
      "Flexible scheduling options",
    ],
  },
];

function ServiceCard({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
}) {
  return (
    <div className="p-[26px] rounded-[26px] bg-white relative overflow-hidden">
      <div className="absolute top-[229px] left-[-117px] w-[186px] h-[186px] bg-[#E64949] rounded-full blur-[200px]" />
      <div className="absolute top-[-147px] left-[473px] w-[173px] h-[173px] bg-[#E64949] rounded-full blur-[200px]" />
      <div className="flex justify-between items-center">
        <div>
          <div className="w-[58px] h-[58px] bg-[#E64949] rounded-full flex items-center justify-center mb-4">
            {icon}
          </div>

          <div
            className="text-[24px] font-semibold capitalize mb-[14px]"
            style={{ fontFamily: "Raleway" }}
          >
            {title}
          </div>
        </div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_377_3220)">
            <path
              d="M64.9062 36.0312L76.9987 48.1237C77.6568 48.6995 78.5781 50.1967 76.9987 51.5787C75.4193 52.9607 68.279 60.0516 64.9062 63.4244"
              stroke="#E0DDDD"
              strokeLinecap="round"
            />
            <rect
              x="49.5414"
              y="0.707103"
              width="69.2937"
              height="69.2937"
              rx="5.42284"
              transform="rotate(44.8109 49.5414 0.707103)"
              stroke="#E0DDDD"
            />
            <path
              d="M32.5781 50.3438H65.8941"
              stroke="#E0DDDD"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_377_3220">
              <rect width="99.4097" height="99.4097" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="h-px bg-[#E0DDDD] mb-[26px]" />
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-[6px] w-[6px] h-[6px] bg-[#545454] rounded-full shrink-0"></span>
            <span
              className="text-[16px] text-[#545454]"
              style={{ fontFamily: "Figtree" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* services */}
      <div className="w-full h-full flex items-start gap-4 px-[135px]">
        <div className="sticky top-[10%]">
          <div
            className="relative overflow-hidden min-w-[678px] h-[536px] rounded-[26px] px-[25px] py-[30px] my-[120px]"
            style={{
              background:
                "linear-gradient(169.27deg, #E64949 30.45%, #681F1F 92.04%)",
            }}
          >
            <div className="absolute top-[280px] p-[102px] left-[220px] w-[627px] h-[627px] rounded-full bg-[#C73232] blur-2xl">
              <div className="w-[423px] h-[423px] bg-[#AE2222] rounded-full blur-[20px]"></div>
            </div>
            <div
              className="font-semibold text-[54px] leading-[58px] text-white mb-[16px]"
              style={{ fontFamily: "Raleway" }}
            >
              Reliable Freight & Logistics Services
            </div>
            <div
              className="text-[16px] capitalize text-white font-normal"
              style={{ fontFamily: "Figtree" }}
            >
              We deliver reliable, efficient logistics from refrigerated
              transport to cross-docking, ensuring your freight arrives safely
              and on time.
            </div>
          </div>
        </div>

        <div className="no-scrollbar flex flex-col gap-4 h-full w-full py-[120px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <Quote />
      <Footer />
    </div>
  );
};

export default Services;
