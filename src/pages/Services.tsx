import DryVan from "@/assets/dry_van.svg";
import CoolVan from "@/assets/cool_van.svg";
import FastVan from "@/assets/fast_van.svg";
import Team from "@/assets/team.svg";
import CrossDock from "@/assets/cross_dock.svg";

import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

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
    <div className="p-[26px] max-[768px]:p-[16px] rounded-[26px] bg-white relative overflow-hidden">
      <div className="absolute top-[229px] left-[-117px] max-[1280px]:top-[122px] max-[1280px]:left-[-110px] w-[186px] h-[186px] bg-[#E64949] rounded-full blur-[200px]" />
      <div className="absolute top-[-147px] left-[473px] max-[1280px]:top-0 max-[1280px]:left-[1000px] max-[768px]:left-[500px] w-[173px] h-[173px] bg-[#E64949] rounded-full blur-[200px]" />

      <div className="flex justify-between items-center">
        <div>
          <div className="w-[58px] h-[58px] max-[1280px]:w-[48px] max-[1280px]:h-[48px] bg-[#E64949] rounded-full flex items-center justify-center mb-4 max-[1280px]:mb-2">
            {icon}
          </div>

          <div
            className="text-[24px] max-[768px]:text-[18px] max-[1280px]:text-[20px] font-semibold capitalize mb-[14px] max-[1280px]:mb-[16px]"
            style={{ fontFamily: "Raleway" }}
          >
            {title}
          </div>
        </div>
        <svg
          width={window.innerWidth > 1280 ? "100" : "60"}
          height={window.innerWidth > 1280 ? "100" : "60"}
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
      <div className="h-px bg-[#E0DDDD] mb-[26px] max-[1280px]:mb-[16px]" />
      <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-x-10 max-[1280px]:gap-x-8 gap-y-4 max-[1280px]:gap-y-2 max-[768px]:gap-y-2">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-[6px] max-[768px]:mt-[8px] w-[6px] h-[6px] bg-[#545454] rounded-full shrink-0"></span>
            <span
              className="text-[16px] max-[768px]:text-[14px] text-[#545454]"
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
  const isMobile = useIsMobile();

  const services = [
    {
      icon: (
        <img
          src={CoolVan}
          alt="Refrigerated Transport"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
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
      icon: (
        <img
          src={DryVan}
          alt="Dry Van"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
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
        <img
          src={FastVan}
          alt="Storage & Re-Delivery"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
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
      icon: (
        <img
          src={Team}
          alt="Team Driving"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
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
      icon: (
        <img
          src={CrossDock}
          alt="Cross Dock"
          width={isMobile ? "24" : "32"}
          height={isMobile ? "24" : "32"}
        />
      ),
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

  return (
    <div className="min-h-screen">
      {/* services */}
      <div className="w-full h-full flex max-[1280px]:flex-col items-start gap-4 px-[135px] max-[768px]:px-[20px] max-[1280px]:px-[30px] max-[1280px]:pb-[80px] max-[768px]:pb-[60px] bg-[#F0F0F0]">
        <div className="sticky top-[10%] max-[1280px]:static">
          <div
            className="relative overflow-hidden min-w-[678px] max-[1280px]:min-w-full h-[536px] max-[1280px]:h-[328px] rounded-[26px] px-[25px] py-[30px] my-[120px] max-[1280px]:my-0 max-[768px]:mt-[76px] max-[1280px]:mt-[80px]"
            style={{
              background:
                "linear-gradient(169.27deg, #E64949 30.45%, #681F1F 92.04%)",
            }}
          >
            <div className="absolute top-[280px] max-[768px]:top-[180px] p-[102px] left-[220px] max-[768px]:left-[55px] w-[627px] h-[627px] rounded-full bg-[#C73232] blur-2xl">
              <div className="w-[423px] h-[423px] bg-[#AE2222] rounded-full blur-[20px]"></div>
            </div>
            <div
              className="font-semibold text-[54px] max-[768px]:text-[32px] max-[1280px]:text-[48px] leading-[58px] max-[768px]:leading-[38px] max-[1280px]:leading-[54px] text-white mb-[16px]"
              style={{ fontFamily: "Raleway" }}
            >
              Reliable Freight & <br /> Logistics Services
            </div>
            <div
              className="text-[16px] max-[768px]:text-[14px] max-[768px]:leading-[20px] capitalize text-white font-normal max-[1280px]:w-1/2 max-[768px]:w-full"
              style={{ fontFamily: "Figtree" }}
            >
              We deliver reliable, efficient logistics from refrigerated
              transport to cross-docking, ensuring your freight arrives safely
              and on time.
            </div>
          </div>
        </div>

        <div className="no-scrollbar flex flex-col gap-4 max-[1280px]:gap-3 h-full w-full py-[120px] max-[1280px]:py-0">
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
