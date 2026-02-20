import { ArrowRight } from "lucide-react";

export default function OurServices() {
  const serviceCards = [
    {
      image: "/src/assets/images/service-transport.png",
      title: "Refrigerated Transport",
      description:
        "53' food-grade reefers with Thermo King 600 series. Certified USFTP for temperature-sensitive cargo.",
    },
    {
      image: "/src/assets/images/service-dry-van.png",
      title: "Dry Van",
      description:
        "Reliable dry freight for construction materials, beverages, paper goods, and more across 12+ states.",
    },
    {
      image: "/src/assets/images/service-cross-dock.png",
      title: "Cross Dock",
      description:
        "Single-source logistics solution for efficient freight consolidation and distribution.",
    },
    {
      image: "/src/assets/images/service-storage.png",
      title: "Storage & Re-Delivery",
      description:
        "Short-term storage solutions at our Stockton, CA facility with flexible re-delivery scheduling.",
    },
  ];
  return (
    <div className="flex flex-col px-[60px] pt-[60px]">
      <div className="bg-[#F2F2F2] rounded-[26px] px-[75px] py-[60px] flex flex-col gap-[60px]">
        <div className="flex flex-col items-center gap-2">
          <div
            className="text-lg leading-[22px] tracking-normal bg-[#0000000A] rounded-[36px] py-2 px-4 text-center w-fit text-[#545454]"
            style={{ fontFamily: "Outfit" }}
          >
            Your Navigator in the Trade World
          </div>
          <div
            className="flex gap-2 justify-center text-[54px] leading-[58px] tracking-normal font-semibold"
            style={{ fontFamily: "Raleway" }}
          >
            <span>Our</span>
            <span className="text-[#E64949]">Services</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[28px]">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-[26px] p-2 flex flex-col gap-4 overflow-hidden"
            >
              <div className="overflow-hidden rounded-[20px] group/outer cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  className="scale-110 group-hover/outer:scale-100 transition-transform duration-500"
                />
              </div>
              <div className="px-2 flex flex-col gap-2">
                <h3
                  className="font-semibold text-[22px] leading-[26px] tracking-normal"
                  style={{ fontFamily: "Raleway" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[16px] leading-[22px] tracking-normal text-[#444] h-[66px]"
                  style={{ fontFamily: "figtree" }}
                >
                  {card.description}
                </p>
              </div>
              <div
                className="px-2 pb-2 flex gap-1.5 items-center text-black hover:text-[#E64949] transition-colors duration-500 overflow-hidden group/inner cursor-pointer"
                style={{ fontFamily: "Figtree" }}
              >
                <span className="text-base leading-[22px]">Learn More</span>

                <div className="relative w-4 h-4 overflow-hidden">
                  {/* Arrow 1 */}
                  <ArrowRight className="absolute transition-all duration-500 ease-out translate-x-0 opacity-100 group-hover/inner:translate-x-full group-hover/inner:opacity-0 w-4 h-4" />

                  {/* Arrow 2 */}
                  <ArrowRight className="absolute transition-all duration-500 ease-out -translate-x-full opacity-0 group-hover/inner:translate-x-0 group-hover/inner:opacity-100 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#E64949] rounded-[26px] py-[26px] flex justify-between px-[72px] mx-[75px] my-[120px]">
        <div className="flex gap-[84px] items-center">
          <div className="flex gap-[22px] items-center">
            <div className="rounded-full p-[29px] border border-[#FFD7D7]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.668 9.33398H21.7844C22.1104 9.33398 22.2734 9.33398 22.4269 9.37082C22.563 9.40349 22.693 9.45736 22.8124 9.53046C22.9469 9.61292 23.0622 9.72822 23.2928 9.95882L28.7098 15.3759C28.9404 15.6064 29.0557 15.7217 29.1381 15.8563C29.2113 15.9756 29.2652 16.1056 29.2978 16.2417C29.3346 16.3952 29.3346 16.5583 29.3346 16.8843V20.6673C29.3346 21.2885 29.3346 21.5992 29.2332 21.8443C29.0978 22.1709 28.8382 22.4305 28.5116 22.5659C28.2665 22.6673 27.9558 22.6673 27.3346 22.6673M20.668 22.6673H18.668M18.668 22.6673V9.60065C18.668 8.10718 18.668 7.36044 18.3773 6.79001C18.1217 6.28824 17.7137 5.88029 17.212 5.62464C16.6416 5.33398 15.8948 5.33398 14.4013 5.33398H6.93463C5.44117 5.33398 4.69442 5.33398 4.124 5.62464C3.62222 5.88029 3.21428 6.28824 2.95862 6.79001C2.66797 7.36044 2.66797 8.10718 2.66797 9.60065V20.0007C2.66797 21.4735 3.86188 22.6673 5.33464 22.6673M18.668 22.6673H13.3346M5.33464 22.6673C5.33464 24.8765 7.1255 26.6673 9.33464 26.6673C11.5438 26.6673 13.3346 24.8765 13.3346 22.6673M5.33464 22.6673C5.33464 20.4581 7.1255 18.6673 9.33464 18.6673C11.5438 18.6673 13.3346 20.4581 13.3346 22.6673M27.3346 23.334C27.3346 25.1749 25.8422 26.6673 24.0013 26.6673C22.1604 26.6673 20.668 25.1749 20.668 23.334C20.668 21.4931 22.1604 20.0007 24.0013 20.0007C25.8422 20.0007 27.3346 21.4931 27.3346 23.334Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="text-[38px] leading-[38px] tracking-normal font-extrabold text-white"
                style={{ fontFamily: "Raleway" }}
              >
                70+
              </div>
              <div
                className="text-[28px] leading-[32px] tracking-normal font-medium text-white"
                style={{ fontFamily: "Raleway" }}
              >
                Trucks
              </div>
            </div>
          </div>
          <div className="h-[177px] bg-[#ffffff] w-px" />
        </div>
        <div className="flex gap-[84px] items-center">
          <div className="flex gap-[22px] items-center">
            <div className="rounded-full p-[29px] border border-[#FFD7D7]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="mask0_109_2038"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <rect width="32" height="32" fill="url(#pattern0_109_2038)" />
                </mask>
                <g mask="url(#mask0_109_2038)">
                  <rect x="-2" y="-7" width="41" height="48" fill="white" />
                </g>
                <defs>
                  <pattern
                    id="pattern0_109_2038"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_109_2038"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_109_2038"
                    width="512"
                    height="512"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="text-[38px] leading-[38px] tracking-normal font-extrabold text-white"
                style={{ fontFamily: "Raleway" }}
              >
                1000+
              </div>
              <div
                className="text-[28px] leading-[32px] tracking-normal font-medium text-white"
                style={{ fontFamily: "Raleway" }}
              >
                Trailers
              </div>
            </div>
          </div>
          <div className="h-[177px] bg-[#ffffff] w-px" />
        </div>
        <div className="flex gap-[84px] items-center">
          <div className="flex gap-[22px] items-center">
            <div className="rounded-full p-[29px] border border-[#FFD7D7]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16.666C18.2092 16.666 20 14.8752 20 12.666C20 10.4569 18.2092 8.66602 16 8.66602C13.7908 8.66602 12 10.4569 12 12.666C12 14.8752 13.7908 16.666 16 16.666Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 29.3327C18.6654 23.9993 26.6654 20.5571 26.6654 13.3327C26.6654 7.44164 21.8898 2.66602 15.9987 2.66602C10.1077 2.66602 5.33203 7.44164 5.33203 13.3327C5.33203 20.5571 13.332 23.9993 15.9987 29.3327Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="text-[38px] leading-[38px] tracking-normal font-extrabold text-white"
                style={{ fontFamily: "Raleway" }}
              >
                12
              </div>
              <div
                className="text-[28px] leading-[32px] tracking-normal font-medium text-white"
                style={{ fontFamily: "Raleway" }}
              >
                States Covered
              </div>
            </div>
          </div>
          <div className="h-[177px] bg-[#ffffff] w-px" />
        </div>
        <div className="flex gap-[84px] items-center">
          <div className="flex gap-[22px] items-center">
            <div className="rounded-full p-[29px] border border-[#FFD7D7]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 13.3327H4M28 16.666V11.7327C28 9.49247 28 8.37236 27.564 7.51672C27.1805 6.76407 26.5687 6.15215 25.816 5.76866C24.9603 5.33268 23.8403 5.33268 21.6 5.33268H10.4C8.15979 5.33268 7.03968 5.33268 6.18404 5.76866C5.43139 6.15215 4.81947 6.76407 4.43597 7.51672C4 8.37236 4 9.49247 4 11.7327V22.9327C4 25.1729 4 26.2929 4.43597 27.1487C4.81947 27.9013 5.43139 28.5132 6.18404 28.8967C7.03968 29.3327 8.15979 29.3327 10.4 29.3327H16M21.3333 2.66602V7.99935M10.6667 2.66602V7.99935M19.3333 25.3327L22 27.9993L28 21.9993"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="text-[38px] leading-[38px] tracking-normal font-extrabold text-white"
                style={{ fontFamily: "Raleway" }}
              >
                1997+
              </div>
              <div
                className="text-[28px] leading-[32px] tracking-normal font-medium text-white"
                style={{ fontFamily: "Raleway" }}
              >
                Established
              </div>
            </div>
          </div>
          <div className="h-[177px] bg-[#ffffff] w-px hidden" />
        </div>
      </div>
    </div>
  );
}
