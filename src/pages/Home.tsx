import HeroSlideShow from "@/components/HeroSlideShow";

export default function Home() {

  const partners = [
    {
      name: "Partner 1",
      icon: <img src="/src/assets/images/partner1.png" alt="Partner 1" className="w-auto h-7" />
    },
    {
      name: "Partner 2",
      icon: <img src="/src/assets/images/partner2.png" alt="Partner 2" className="w-auto h-7" />
    },
    {
      name: "Partner 3",
      icon: <img src="/src/assets/images/partner3.png" alt="Partner 3" className="w-auto h-7" />
    },
    {
      name: "Partner 4",
      icon: <img src="/src/assets/images/partner4.png" alt="Partner 4" className="w-auto h-7" />
    }
  ]

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#00112D]">
      <div className="absolute -top-28 -right-6 w-[1920px] h-[1324px] pointer-events-none rotate-6"
       style={{
         background: "radial-gradient(79.82% 79.82% at 61.74% 20.18%, #E64949 13.28%, #00112D 65.5%)"
       }}
      />
      <div className="w-full h-[340px] absolute font-black text-[320px] text-[#FFFFFF14] whitespace-nowrap bottom-[68px] left-0" style={{ fontFamily: "'Raleway', sans-serif" }}>
        DK EXPRESS 
      </div>

       <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center px-[135px]">
          <div className=" w-1/2 h-full z-1 flex flex-col items-start justify-center gap-3">
            <div className="bg-[#FFFFFF14] px-4 py-2.5 rounded-full text-white text-[18px] font-normal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Your Navigator in the Trade World
            </div>
            <div className="text-white relative leading-none text-[92px] font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>
              WELCOME TO
              <span className="absolute -top-1 -bottom-1 -right-4 w-[1920px] bg-[#FFFFFF14] rounded-r-full" />
            </div>
            <div className="text-[#E64949] leading-none text-[92px] font-black" style={{ fontFamily: "'Raleway', sans-serif" }}>
              DK EXPRESS
            </div>
            <div className="text-white text-[18px] mt-1 leading-5.5 capitalize font-normal" style={{ fontFamily: "'Figtree', sans-serif" }}>
              Quality transport ready to go. Refrigerated & dry freight <br /> solutions across 12+ states since 1997.
            </div>
            <div className="mt-6 flex items-center h-[42px] gap-2">
              <button className="h-full border border-white rounded-full px-4 text-white text-[16px] font-medium cursor-pointer outline-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Get Instant Quote
              </button>
              <button className="h-full border border-[#E64949] bg-[#E64949] hover:bg-transparent hover:text-[#E64949] rounded-full px-4 text-white text-[16px] font-medium cursor-pointer transition-all duration-200 outline-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Track Shipment
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full z-1 flex items-center justify-center">
            <HeroSlideShow />
          </div>
        </div>
        <div className="z-1 w-full min-h-[68px] flex items-center bg-[#F6F6F6]">
          <div className="pl-[135px] text-[24px] font-normal" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Trusted by <span className="text-[#21418C]">120+</span> business partners worldwide
          </div>
          <div className="relative flex-1 overflow-hidden ml-[68px]">
            <div className="flex gap-16 animate-marquee">
                {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[120px] h-[60px] text-[#21418C]"
                  >
                    {partner.icon}
                  </div>
                ))}
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}