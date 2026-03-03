import ServicesBg from "@/assets/services_bg.png";
import UsMap from "@/components/UsMap";

export default function Usmap() {
    return (
        <div className="w-full h-fit" style={{ backgroundImage: `url(${ServicesBg})`, backgroundSize: "contain", backgroundPosition: "center" }}>
            <div className="w-full h-full flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start mt-[128px] max-[1280px]:mt-[60px] gap-3">
                    <div className="bg-[#FFFFFF14] rounded-full px-4 py-2.5 text-white text-[18px] max-[768px]:text-[12px] max-[1280px]:text-[16px] font-normal" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Our Coverage
                    </div>
                    <div className="text-[54px] max-[768px]:text-[32px] max-[1280px]:text-[48px] font-semibold text-white leading-none mb-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        Service Area
                    </div>
                    <div className="text-white text-[16px] max-[768px]:text-[14px] max-[1280px]:text-[16px] max-[768px]:px-14 max-[768px]:text-center font-normal" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Serving Western & Nationwide Routes across 12+ states
                    </div>
                    <div className="mt-12 mb-[120px] max-[768px]:mb-[60px] px-[20px]">
                        <UsMap />
                    </div>
                </div>
            </div>
        </div>
    )
}