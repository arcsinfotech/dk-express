import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial1.png";
import testimonial2 from "@/assets/testimonial2.png";
import testimonial3 from "@/assets/testimonial3.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
    name: string;
    tag: string;
    quote: string;
    image: string;
    stars: number;
  }
  

function StarRating({ count }: { count: number }) {
    const isMobile = useIsMobile();
    return (
      <div className="flex gap-1 mt-4 max-[768px]:mt-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={ isMobile ? 16 : 18}
            className={i <= count ? "fill-[#E64949] text-[#E64949]" : "fill-[#FFDADA] text-[#FFDADA]"}
          />
        ))}
      </div>
    );
  }
  
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
return (
    <div className="w-[672px] max-[768px]:w-[335px] max-[768px]:min-w-[335px] max-h-[340px] max-[768px]:max-h-fit bg-[#ffffff] rounded-[16px] box-shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-[32px_28px] max-[768px]:p-[14px] flex flex-col justify-start gap-[26px] max-[768px]:gap-3" >
        {/* Header */}
        <div className="flex items-center gap-3.5" style={{ marginBottom: "0px" }}>
            <img
            src={testimonial.image}
            alt={testimonial.name}
            style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                objectFit: "contain",
                border: "2px solid #f3f4f6",
            }}
            />
            <div>
                <p className="m-0 font-semibold text-[22px] max-[768px]:text-[14px] text-[#262626]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    {testimonial.name}
                </p>
                <p className="m-0 text-[16px] max-[768px]:text-[10px] text-[#444444]" style={{ fontFamily: "'Figtree', sans-serif" }}>
                    {testimonial.tag}
                </p>
            </div>
        </div>

        {/* Quote */}
        <div
            className="h-fit m-0 text-[20px] max-[768px]:text-[14px] text-[#444444]"
            style={{ fontFamily: "'Figtree', sans-serif" }}
        >
            "{testimonial.quote}"
        </div>

        {/* Stars */}
        <StarRating count={testimonial.stars} />
    </div>
);
}

export default function Testimonials() {

    const testimonials = [
        {
            name: "Nick Wildermuth",
            tag: "Customer",
            quote: "DK Express has been our trusted partner for over 5 years. Their refrigerated fleet is always on time and their team is incredibly professional. Couldn't ask for a better logistics partner.",
            image: testimonial1,
            stars: 4
        },
        {
            name: "Chris Bollinger",
            tag: "Customer",
            quote: "DK Express has been our trusted partner for over 5 years. Their refrigerated fleet is always on time and their team is incredibly professional. Couldn't ask for a better logistics partner.",
            image: testimonial2,
            stars: 5
        },
        {
            name: "Destiny Mcgee",
            tag: "Customer",
            quote: "Best company I've ever worked for. The equipment is modern, the pay is great, and they truly care about their drivers. DK Express treats you like family.",
            image: testimonial3,
            stars: 5
        },
        
    ]


    return (
        <div className="w-full h-[832px] max-[768px]:h-fit flex flex-col gap-3 items-center justify-start pt-[120px] max-[768px]:py-[60px] bg-[#F2F2F2]">
            <div className="font-normal text-[18px] max-[768px]:text-[12px] text-[#545454]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Testimonials
            </div>
            <div className="text-[54px] max-[768px]:text-[32px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>
                What <span className="text-[#E64949]">People</span> Say
            </div>
            <div className="w-full h-[340px] max-[768px]:h-[230px] flex gap-4 px-4 mt-[48px] overflow-x-scroll">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </div>
        </div>
    )
}