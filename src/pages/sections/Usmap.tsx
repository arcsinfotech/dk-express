export default function Usmap() {
    return (
        <div className="w-full h-full" style={{ backgroundImage: "url('/src/assets/us_map.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="w-full h-full flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start mt-[128px] gap-3">
                    <div className="bg-[#FFFFFF14] rounded-full px-4 py-2.5 text-white text-[18px] font-normal" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Our Coverage
                    </div>
                    <div className="text-[54px] font-semibold text-white leading-none mb-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        Service Area
                    </div>
                    <div className="text-white text-[16px] font-normal" style={{ fontFamily: "'Figtree', sans-serif" }}>
                        Serving Western & Nationwide Routes across 12+ states
                    </div>
                </div>
            </div>
        </div>
    )
}