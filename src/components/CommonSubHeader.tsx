import { motion } from "motion/react";
import { Outlet } from "react-router-dom";

const CommonSubHeader = ({
  heading,
  subHeading,
  secondSubHeading,
  breakLine = false,
  description,
}: {
  heading: string;
  subHeading: string;
  secondSubHeading: string;
  breakLine?: boolean;
  description: string;
}) => {
  return (
    <div>
      <div className="bg-[#00112D] bg-[radial-gradient(164.75%_164.13%_at_90.7%_-30.3%,#E64949_15.28%,#00112D_65.5%)]  flex flex-col gap-4 justify-center items-center h-full py-[209px]">
        <div className="flex flex-col gap-3 justify-center items-center ">
          <div
            className="bg-[#FFFFFF14] text-white px-4 py-2 rounded-[36px] max-[768px]:text-sm text-lg leading-[22px] tracking-normal"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {heading}
          </div>
          <div
            className={`${breakLine ? "flex flex-col gap-0" : "flex gap-4"} text-[92px] max-[768px]:text-[48px] max-[768px]:leading-[52px] leading-[102px] tracking-normal font-medium`}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <span className="text-white">{subHeading}</span>
            <span className="text-[#E64949] font-black">
              {secondSubHeading}
            </span>
          </div>
        </div>
        <div
          className="text-lg max-[768px]:text-sm max-[768px]:px-4 leading-[22px] max-[768px]:leading-[20px] tracking-normal text-white max-w-[505px] text-center capitalize"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {description}
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CommonSubHeader;
