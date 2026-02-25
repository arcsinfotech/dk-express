import { motion } from "framer-motion";
import {
  Warehouse,
  Users,
  RefreshCw,
} from "lucide-react";

import DryVan from "@/assets/dry_van.svg";
import CoolVan from "@/assets/cool_van.svg";
import FastVan from "@/assets/fast_van.svg";
import Team from "@/assets/team.svg";
import CrossDock from "@/assets/cross_dock.svg";

import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <img src={CoolVan} alt="Refrigerated Transport" width={32} height={32} />,
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
    icon: <img src={FastVan} alt="Storage & Re-Delivery" width={32} height={32} />,
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

function ServiceCard({ icon, title, details }: { icon: React.ReactNode, title: string, details: string[] }) {
  return (
    <div className="p-[26px]">
      <div className="w-[58px] h-[58px] bg-[#E64949] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <div className="text-[24px] font-semibold capitalize mb-[40px]" style={{ fontFamily: "Raleway" }}>
        {title}
      </div>

      {/* Bullet Points */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-[6px] w-[6px] h-[6px] bg-[#545454] rounded-full shrink-0"></span>
            <span className="text-[16px] text-[#545454]" style={{ fontFamily: "Figtree" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // When section hits top
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setLockScroll(true);
        document.body.style.overflow = "hidden";
      } else {
        setLockScroll(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleInnerScroll = () => {
      if (!lockScroll) return;

      const isAtBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 5;

      if (isAtBottom) {
        document.body.style.overflow = "auto";
        setLockScroll(false);
      }
    };

    container.addEventListener("scroll", handleInnerScroll);
    return () => container.removeEventListener("scroll", handleInnerScroll);
  }, [lockScroll]);

  return (
    <div className="min-h-screen">
      
      {/* services */}
      <div ref={sectionRef} className="w-full h-[776px] flex items-center gap-4 px-[135px]">
        <div className="relative overflow-hidden min-w-[678px] h-[536px] rounded-[26px] px-[25px] py-[30px]" style={{ background: "linear-gradient(169.27deg, #E64949 30.45%, #681F1F 92.04%)"}}>
          <div className="absolute top-[280px] p-[102px] left-[220px] w-[627px] h-[627px] rounded-full bg-[#C73232] blur-2xl">
            <div className="w-[423px] h-[423px] bg-[#AE2222] rounded-full blur-[20px]"></div>
          </div>
          <div className="font-semibold text-[54px] leading-[58px] text-white mb-[16px]" style={{ fontFamily: "Raleway" }}>
            Reliable Freight & Logistics Services
          </div>
          <div className="text-[16px] capitalize text-white font-normal" style={{ fontFamily: "Figtree" }}>
            We deliver reliable, efficient logistics from refrigerated transport to cross-docking, ensuring your freight arrives safely and on time.
          </div>
        </div>
        <div ref={scrollRef} className="flex flex-col gap-4 h-full overflow-scroll w-full py-[120px]">
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
