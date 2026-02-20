export default function Cta() {
  return (
    <div className="w-full h-full flex items-center">
        <div className="relative w-[40%] h-full flex flex-col items-center justify-center">
            <div className="pl-[135px] text-[54px] leading-14 w-full font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Your Gateway To <br /> <span className="text-[#E64949]">Smarter Logistics</span>
            </div>
            <div className="pl-[135px] mt-4 capitalize text-[18px] text-[#545454] font-normal" style={{ fontFamily: "'Figtree', sans-serif" }}>
            Empowering businesses with reliable shipping, carrier support, and career opportunities. From real-time tracking to seamless with confidence.
            </div>
            <div>
                <img src="/src/assets/images/cta.png" alt="CTA Image" className="w-full h-[285px] object-fit" />
            </div>

            <div className="absolute w-[334px] h-[334px] bg-[#B60001] rounded-full top-[355px] left-[-258px] blur-[200px]" />
        </div>

        <div className="w-[60%] h-full">
            
        </div>
    </div>
  )
}