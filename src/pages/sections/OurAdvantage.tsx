import AdvantageFamily from "@/assets/images/advantage-family.jpg";
import AdvantageEquipment from "@/assets/images/advantage-equipment.png";
import AdvantageExpert from "@/assets/images/advantage-experts.png";
import AdvantageExperience from "@/assets/images/advantage-experience.png";

export default function OurAdvantage() {
  const advantageCards = [
    {
      image: AdvantageFamily,
      title: "Family Owned Since 1997",
      description:
        "Built on trust, integrity, and a commitment to quality service.",
    },
    {
      image: AdvantageEquipment,
      title: "Modern Equipment",
      description:
        "Fleet under 4 years old with the latest safety and tracking technology.",
    },
    {
      image: AdvantageExpert,
      title: "Temperature-Control Experts",
      description:
        "Certified food-grade reefers with precise temperature monitoring.",
    },
    {
      image: AdvantageExperience,
      title: "50+ Years Combined Experience",
      description: "Our leadership team brings decades of logistics expertise.",
    },
  ];
  return (
    <div className="px-[135px] py-[120px] max-[768px]:px-0 max-[1280px]:px-[30px] max-[1280px]:py-[60px] bg-[#EBEEF3]">
      <div className="flex flex-col gap-[60px] max-[768px]:gap-[28px]">
        <div className="flex flex-col items-center gap-3 max-[768px]:gap-0">
          <div
            className="text-lg max-[768px]:text-[12px] max-[1280px]:text-[14px] leading-[22px] tracking-normal bg-[#0000000A] rounded-[36px] py-2 px-4 text-center w-fit text-[#545454]"
            style={{ fontFamily: "Outfit" }}
          >
            Our Advantage
          </div>
          <div
            className="flex gap-2 justify-center text-[54px] max-[768px]:text-[32px] max-[1280px]:text-[48px] leading-[58px] tracking-normal font-semibold"
            style={{ fontFamily: "Raleway" }}
          >
            <span>Why</span>
            <span className="text-[#E64949]">DK Express</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[28px] max-[768px]:flex max-[1280px]:grid-cols-2 max-[768px]:gap-2 max-[768px]:overflow-x-auto max-[768px]:px-[20px]">
          {advantageCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-[26px] p-2 max-[768px]:p-1.5 flex flex-col gap-4 max-[768px]:gap-3 overflow-hidden h-[493px] max-[768px]:h-[374px] w-full max-[768px]:w-[296px] max-[1280px]:w-full max-[768px]:min-w-[296px]"
            >
              {/* Image Wrapper */}
              <div className="overflow-hidden rounded-[20px] max-[768px]:rounded-[12px] group/outer cursor-pointer h-[366px] max-[768px]:h-[252px] w-full bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover scale-110 group-hover/outer:scale-100 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="px-2 flex flex-col gap-2 max-[768px]:gap-1.5">
                <h3
                  className="font-semibold text-[22px] max-[768px]:text-[18px] max-[1280px]:text-[20px] leading-[26px]"
                  style={{ fontFamily: "Raleway" }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-[16px] leading-[22px] max-[768px]:leading-[16px] max-[1280px]:leading-[18px] max-[768px]:text-[12px] max-[1280px]:text-[14px] text-[#444] min-h-[66px] max-[1280px]:min-h-[40px]"
                  style={{ fontFamily: "Figtree" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
