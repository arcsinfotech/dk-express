import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";
import trustTruckImg from "@/assets/trust-truck.jpg";
import peopleImg from "@/assets/people.png";

const highlights = [
  "Located in California's Central Valley",
  "Specializes in dry, fresh, and frozen cargo",
  "Special permits for meats, dairy, wine & liquor",
  "Family-owned & operated since 1997",
];

export default function WhoWeAre() {
  return (
    <section className="py-24 h-[850px] bg-[#00112D]" style={{ fontFamily: "Outfit" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="w-[566px] relative">
              <div className="absolute bottom-48 -right-20 z-10 flex flex-col gap-[28px]">
                <div className="text-white bg-[#E6494966] backdrop-blur-[90px] rounded-[16px] w-[162px] h-[99px] px-3 flex flex-col gap-1.5 items-center justify-center shadow-[0_12px_60px_0_rgba(230,73,73,0.4)]">
                  <p className="text-[32px] text-white">27+</p>
                  <div className="min-h-px w-full bg-[#FFFFFF4A]" />
                  <p className="text-sm font-medium">Years of Service</p>
                </div>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="relative">
                  <div className="absolute z-10 -left-1 top-60 -translate-x-1/2 -translate-y-1/2 bg-[#00112D] w-[108px] h-[108px] rounded-full flex items-center justify-center">
                    <div className="w-[84px] h-[84px] bg-[#E6494933] rounded-full flex items-center justify-center backdrop-blur-[90px]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.666 9.33301H21.7824C22.1084 9.33301 22.2715 9.33301 22.4249 9.36985C22.5611 9.40251 22.6911 9.45638 22.8104 9.52949C22.9449 9.61194 23.0603 9.72725 23.2908 9.95785L28.7079 15.3749C28.9384 15.6054 29.0537 15.7207 29.1361 15.8553C29.2093 15.9746 29.2632 16.1046 29.2959 16.2407C29.3327 16.3942 29.3327 16.5573 29.3327 16.8833V20.6663C29.3327 21.2875 29.3327 21.5982 29.2312 21.8433C29.0959 22.1699 28.8363 22.4295 28.5096 22.5649C28.2645 22.6663 27.9539 22.6663 27.3327 22.6663M20.666 22.6663H18.666M18.666 22.6663V9.59967C18.666 8.10621 18.666 7.35946 18.3753 6.78903C18.1197 6.28726 17.7117 5.87931 17.21 5.62366C16.6396 5.33301 15.8928 5.33301 14.3993 5.33301H6.93268C5.43922 5.33301 4.69247 5.33301 4.12204 5.62366C3.62027 5.87931 3.21232 6.28726 2.95667 6.78903C2.66602 7.35946 2.66602 8.10621 2.66602 9.59967V19.9997C2.66602 21.4725 3.85992 22.6663 5.33268 22.6663M18.666 22.6663H13.3327M5.33268 22.6663C5.33268 24.8755 7.12355 26.6663 9.33268 26.6663C11.5418 26.6663 13.3327 24.8755 13.3327 22.6663M5.33268 22.6663C5.33268 20.4571 7.12355 18.6663 9.33268 18.6663C11.5418 18.6663 13.3327 20.4571 13.3327 22.6663M27.3327 23.333C27.3327 25.1739 25.8403 26.6663 23.9993 26.6663C22.1584 26.6663 20.666 25.1739 20.666 23.333C20.666 21.4921 22.1584 19.9997 23.9993 19.9997C25.8403 19.9997 27.3327 21.4921 27.3327 23.333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="w-[271px] h-[230px] bg-[#E64949] mb-3 rounded-[26px] p-[22px] pr-3 flex flex-col gap-2 relative">
                    <div className="absolute top-12 right-6">
                      <svg width="175" height="179" viewBox="0 0 175 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5C22 5.66667 61 23 108.5 6.5C150.56 -8.1103 174.5 38 161 58.5C137.951 93.5 63.5 119 92.5 164C105.594 184.318 145 180.5 174.5 161" stroke="#F87E7E" strokeLinecap="round" strokeDasharray="6 6"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 border border-[#FFFFFF] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-semibold text-[18px] pr-3">
                      Serving 12+ States Across the U.S.
                    </div>
                    <div className="text-white font-semibold text-[14px] w-full flex flex-col gap-0">
                      <span className="whitespace-nowrap">Delivering coast-to-coast reliability</span>
                      <span className="whitespace-nowrap">and on-time performance.</span>
                    </div>
                  </div>

                  <div className="relative w-[271px] h-[125px] bg-[#E64949] rounded-[26px] overflow-hidden">
                    <div className="absolute top-1 right-0">
                      <svg width="176" height="51" viewBox="0 0 176 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                        <path d="M159.375 6.375H159.396M159.375 25.5H159.396M159.375 44.625H159.396M159.375 35.0625H159.396M159.375 15.9375H159.396M168.937 6.375H168.959M168.937 25.5H168.959M168.937 44.625H168.959M188.062 6.375H188.084M188.062 25.5H188.084M188.062 44.625H188.084M178.5 6.375H178.521M178.5 25.5H178.521M178.5 44.625H178.521M178.5 35.0625H178.521M178.5 15.9375H178.521M197.625 6.375H197.646M197.625 25.5H197.646M197.625 44.625H197.646M197.625 35.0625H197.646M197.625 15.9375H197.646" stroke="white" strokeWidth="4.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <g opacity="0.3">
                        <path d="M108.375 6.375H108.396M108.375 25.5H108.396M108.375 44.625H108.396M108.375 35.0625H108.396M108.375 15.9375H108.396M117.937 6.375H117.959M117.937 25.5H117.959M117.937 44.625H117.959M137.062 6.375H137.084M137.062 25.5H137.084M137.062 44.625H137.084M127.5 6.375H127.521M127.5 25.5H127.521M127.5 44.625H127.521M127.5 35.0625H127.521M127.5 15.9375H127.521M146.625 6.375H146.646M146.625 25.5H146.646M146.625 44.625H146.646M146.625 35.0625H146.646M146.625 15.9375H146.646" stroke="white" strokeWidth="4.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <g opacity="0.2">
                        <path d="M57.375 6.375H57.3962M57.375 25.5H57.3962M57.375 44.625H57.3962M57.375 35.0625H57.3962M57.375 15.9375H57.3962M66.9375 6.375H66.9587M66.9375 25.5H66.9587M66.9375 44.625H66.9587M86.0625 6.375H86.0837M86.0625 25.5H86.0837M86.0625 44.625H86.0837M76.5 6.375H76.5212M76.5 25.5H76.5212M76.5 44.625H76.5212M76.5 35.0625H76.5212M76.5 15.9375H76.5212M95.625 6.375H95.6462M95.625 25.5H95.6462M95.625 44.625H95.6462M95.625 35.0625H95.6462M95.625 15.9375H95.6462" stroke="white" strokeWidth="4.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <g opacity="0.1">
                        <path d="M6.375 6.375H6.39625M6.375 25.5H6.39625M6.375 44.625H6.39625M6.375 35.0625H6.39625M6.375 15.9375H6.39625M15.9375 6.375H15.9587M15.9375 25.5H15.9587M15.9375 44.625H15.9587M35.0625 6.375H35.0837M35.0625 25.5H35.0837M35.0625 44.625H35.0837M25.5 6.375H25.5212M25.5 25.5H25.5212M25.5 44.625H25.5212M25.5 35.0625H25.5212M25.5 15.9375H25.5212M44.625 6.375H44.6462M44.625 25.5H44.6462M44.625 44.625H44.6462M44.625 35.0625H44.6462M44.625 15.9375H44.6462" stroke="white" strokeWidth="4.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                    </div>
                    <div className=" absolute bottom-[10px] left-[20px] text-[18px] font-semibold text-white">
                      Special Permits for <br /> Meats, Dairy & Liquor
                    </div>
                  </div>
                </div>
                <div className="w-[284px] h-[367px]">
                  <img src={peopleImg} alt="" className="rounded-[26px] shadow-xl h-full w-auto object-cover" />
                </div>
              </div>

              <img
                src={trustTruckImg}
                alt="California Central Valley"
                className="rounded-[26px] scale-x-[-1] shadow-xl h-[230px] w-full object-cover aspect-4/3"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-0 mb-[26px]">
              <div className="bg-[#FFFFFF14] text-white w-fit px-3 py-1.5 rounded-[16px] font-normal text-[18px] mb-3">
                Who We Are
              </div>
              <div className="text-[54px] font-semibold text-white leading-none">
                Trusted Transportation
              </div>
              <div className="text-[54px] font-semibold text-white leading-none">Partner <span className="text-[#E64949]">Since 1997</span></div>
            </div>
            <p className="text-white text-[16px] leading-relaxed mb-8">
              DK Express is a family-owned transportation company located in California's Central Valley. We specialize in refrigerated and dry freight, serving customers across 12+ states with modern equipment and experienced drivers. Our dedication to quality service has made us a trusted partner in the logistics industry.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00C023] shrink-0" />
                  <span className="text-[16px] font-medium text-[#FFFFFF]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
