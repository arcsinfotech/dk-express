import QuoteImage from "@/assets/quote.png";
import { useNavigate } from "react-router-dom";

type QuoteProps = {
  title?: string;
  title2?: string;
  description?: string;
  buttonText?: string;
  path? : string;
};

export default function Quote({
  title = "Need Reliable",
  title2 = "Transportation?", 
  description = "Get a quote today and experience the DK Express difference.", 
  buttonText = "Get Quote",
  path = "/customers"
}: QuoteProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[298px] bg-white flex items-center justify-between relative overflow-hidden">
      <div className="w-fit h-full pl-[135px] pt-[65px] bg-transparent">
        <div
          className="text-[48px] text-[#00112D] font-semibold mb-3 whitespace-nowrap"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {title} <span className="text-[#E64949]">{title2}</span>
        </div>
        <div
          className="text-[#444444] text-[18px] font-medium mb-[26px] capitalize"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {description}
        </div>
        <button 
          className="h-[48px] px-4 border border-[#E64949] text-[#E64949] rounded-full"
          onClick={() => {navigate(path)}}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex items-center justify-center h-full">
        <img
          src={QuoteImage}
          alt="Quote"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute w-[600px] h-[100px] bg-[#B60001] rounded-full blur-[200px] left-1/3 -translate-x-1/2 bottom-0 pointer-events-none" />
    </div>
  );
}
