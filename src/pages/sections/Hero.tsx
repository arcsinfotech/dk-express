import HeroSlideShow from "@/components/HeroSlideShow";
import Partner1 from "@/assets/images/partner1.png";
import Partner2 from "@/assets/images/partner2.png";
import Partner3 from "@/assets/images/partner3.png";
import Partner4 from "@/assets/images/partner4.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {

    const navigate = useNavigate()

const partners = [
    {
        name: "Partner 1",
        icon: <img src={Partner1} alt="Partner 1" className="w-auto h-7" />
    },
    {
        name: "Partner 2",
        icon: <img src={Partner2} alt="Partner 2" className="w-auto h-7" />
    },
    {
        name: "Partner 3",
        icon: <img src={Partner3} alt="Partner 3" className="w-auto h-7" />
    },
    {
        name: "Partner 4",
        icon: <img src={Partner4} alt="Partner 4" className="w-auto h-7" />
    }
    ]

  return (
    <div className="w-full h-fit relative overflow-hidden bg-[#00112D]">
        <div className="absolute -top-28 -right-6 max-[768px]:-right-00 max-[768px]:-top-10 w-[1920px] max-[768px]:w-[320px] h-[1324px] max-[768px]:h-[620px] pointer-events-none rotate-6"
        style={{
        background: "radial-gradient(79.82% 79.82% at 61.74% 20.18%, #E64949 13.28%, #00112D 65.5%)"
        }}
        />
        <div className="w-full max-[768px]:text-center   h-[340px] max-[768px]:h-fit absolute font-black text-[320px] max-[768px]:text-[62px] text-[#FFFFFF14] whitespace-nowrap bottom-[68px] max-[768px]:bottom-[44px] left-0" style={{ fontFamily: "'Raleway', sans-serif" }}>
        DK EXPRESS 
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-full py-[172px] max-[768px]:py-[122px] flex max-[768px]:flex-col max-[768px]:gap-[26px] items-center justify-center px-[135px] max-[768px]:px-[20px]">
                <div className=" w-1/2 max-[768px]:w-full h-full max-[768px]:h-fit z-1 flex flex-col items-start max-[768px]:items-center justify-center gap-3">
                    <div className="bg-[#FFFFFF14] whitespace-nowrap px-4 py-2.5 rounded-full text-white text-[18px] max-[768px]:text-[14px] font-normal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Your Navigator in the Trade World
                    </div>
                    <div className="text-white relative leading-none text-[92px] max-[768px]:text-[48px] font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        WELCOME TO
                        <span className="absolute -top-1 -bottom-1 -right-4 w-[1920px] bg-[#FFFFFF14] rounded-r-full" />
                    </div>
                    <div className="text-[#E64949] leading-none text-[92px] max-[768px]:text-[48px] font-black" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        DK EXPRESS
                    </div>
                    <div className="text-white text-[18px] max-[768px]:text-[14px] max-[768px]:text-center mt-1 leading-5.5 capitalize font-normal" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Quality transport ready to go. Refrigerated & dry freight <br className="max-[768px]:hidden" /> solutions across 12+ states since 1997.
                    </div>
                    <div className="mt-6 flex items-center h-[42px] gap-2 max-[768px]:gap-4">
                        <button onClick={()=> navigate("/customers")} className="h-full border border-white rounded-full px-4 text-white text-[16px] max-[768px]:text-[14px] font-medium cursor-pointer outline-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Get Instant Quote
                        </button>
                        <button onClick={()=> navigate("/contact")} className="h-full border border-[#E64949] bg-[#E64949] hover:bg-transparent hover:text-[#E64949] rounded-full px-4 text-white text-[16px] max-[768px]:text-[14px] font-medium cursor-pointer transition-all duration-200 outline-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Track Shipment
                        </button>
                    </div>
                </div>
                <div className="w-1/2 max-[768px]:w-full h-full max-[768px]:h-fit z-1 flex items-center justify-center">
                    <HeroSlideShow />
                </div>
            </div>
            <div className="z-1 w-full min-h-[68px] flex max-[768px]:flex-col items-center bg-[#F6F6F6]">
                <div className="pl-[135px] max-[768px]:p-3 text-[24px] max-[768px]:text-[14px] font-normal capitalize" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Trusted by <span className="text-[#21418C]">120+</span> business partners in north america
                </div>
                <div className="relative flex-1 overflow-hidden ml-[68px]">
                    <div className="flex gap-16 animate-marquee">
                        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                            key={index}
                            className="flex items-center justify-center min-w-[120px] h-[60px] max-[768px]:h-[20px] text-[#21418C]"
                            >
                            {partner.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}