export default function Quote() {
    return (
        <div className="w-full h-[298px] bg-white flex items-center justify-between">
            <div className="w-fit h-full pl-[135px] pt-[65px] bg-transparent">
                <div className="text-[48px] text-[#00112D] font-semibold mb-3 whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Need Reliable <span className="text-[#E64949]">Transportation?</span>
                </div>
                <div className="text-[#444444] text-[18px] font-medium mb-[26px]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Get a quote today and experience the DK Express difference.
                </div>
                <button className="h-[48px] px-4 border border-[#E64949] text-[#E64949] rounded-full">
                    Get Quote
                </button>
            </div>
            <div className="flex items-center justify-center h-full">
                <img src="/src/assets/quote.png" alt="Quote" className="w-full h-auto object-cover" />
            </div>
        </div>
    )
}