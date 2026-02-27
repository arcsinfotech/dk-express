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
    <div className="w-full h-[298px] max-[768px]:h-fit bg-white flex max-[768px]:flex-col items-center justify-between relative overflow-hidden">
      <div className="w-fit max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center h-full pl-[135px] pt-[65px] max-[768px]:p-0 max-[768px]:pt-[60px] bg-transparent">
        <div
          className="text-[48px] max-[768px]:text-[32px] max-[768px]:leading-[38px] max-[768px]:text-center text-[#00112D] font-semibold mb-3 max-[768px]:mb-2 whitespace-nowrap max-[768px]:whitespace-normal"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {title} <span className="text-[#E64949]">{title2}</span>
        </div>
        <div
          className="text-[#444444] text-[18px] max-[768px]:px-12 max-[768px]:text-center max-[768px]:text-[14px] max-[768px]:leading-[20px] font-medium mb-[26px] max-[768px]:mb-[23px] capitalize"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {description}
        </div>
        <button 
          className="h-[48px] px-4 border border-[#E64949] text-[#E64949] rounded-full cursor-pointer"
          onClick={() => {navigate(path)}}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex items-center justify-center max-[768px]:w-full max-[768px]:h-auto h-full max-[768px]:mt-[44px]">
        <img
          src={QuoteImage}
          alt="Quote"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-[600px] max-[768px]:w-[141px] h-[100px] max-[768px]:h-[141px] bg-[#B60001] rounded-full blur-[200px] max-[768px]:top-[238px] max-[768px]:left-[422px] left-1/3 -translate-x-1/2 bottom-0 pointer-events-none" />
    </div>
  );
}
