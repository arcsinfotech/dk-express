import { motion } from "framer-motion";
import {
  Snowflake,
  Package,
  Warehouse,
  Users,
  RefreshCw,
  Truck,
} from "lucide-react";
import Footer from "./sections/Footer";

const services = [
  {
    icon: Snowflake,
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
    icon: Package,
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
    icon: Warehouse,
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
    icon: Users,
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
    icon: RefreshCw,
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

const Services = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(135deg,hsl(220_90%_15%)_0%,hsl(220_85%_25%)_100%)] pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-[#b51222] font-semibold text-sm uppercase tracking-widest mb-3" style={{fontFamily: "Montserrat"}}>
                What We Offer
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6" style={{fontFamily: "Montserrat"}}>
                Our Services
              </h1>
              <p className="text-white/70 text-lg">
                Comprehensive transportation solutions tailored to your freight
                needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-[#f9fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg p-8 md:p-10 shadow-md border border-[#d9dfe8]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-lg bg-[#0c3992]/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-8 h-8 text-[#0c3992]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1b2232] mb-4" style={{fontFamily: "Montserrat"}}>
                        {service.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-[#627084]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#b51222] shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
