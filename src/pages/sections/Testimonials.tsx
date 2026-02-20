import { Star } from "lucide-react";

interface Testimonial {
    name: string;
    tag: string;
    quote: string;
    image: string;
    stars: number;
  }
  

function StarRating({ count }: { count: number }) {
    return (
      <div className="flex gap-1 mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={18}
            className={i <= count ? "fill-[#E64949] text-[#E64949]" : "fill-gray-200 text-gray-200"}
          />
        ))}
      </div>
    );
  }
  
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
return (
    <div
    style={{
        width: "672px",
        maxHeight: "340px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        fontFamily: "'Georgia', serif",
        gap: "26px"
    }}
    >
    {/* Header */}
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "0px" }}>
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
        <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", color: "#111", fontFamily: "'Arial', sans-serif" }}>
            {testimonial.name}
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#9ca3af", fontFamily: "'Arial', sans-serif" }}>
            {testimonial.tag}
        </p>
        </div>
    </div>

    {/* Quote */}
    <div
        className="h-fit"
        style={{
        margin: 0,
        fontSize: "14px",
        color: "#374151",
        lineHeight: "1.7",
        fontStyle: "italic",
        fontFamily: "'Georgia', serif"
        }}
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
            image: "/src/assets/testimonial1.png",
            stars: 4
        },
        {
            name: "Chris Bollinger",
            tag: "Customer",
            quote: "DK Express has been our trusted partner for over 5 years. Their refrigerated fleet is always on time and their team is incredibly professional. Couldn't ask for a better logistics partner.",
            image: "/src/assets/testimonial2.png",
            stars: 5
        },
        {
            name: "Destiny Mcgee",
            tag: "Customer",
            quote: "Best company I've ever worked for. The equipment is modern, the pay is great, and they truly care about their drivers. DK Express treats you like family.",
            image: "/src/assets/testimonial3.png",
            stars: 5
        },
        
    ]


    return (
        <div className="w-full h-[832px] flex flex-col gap-3 items-center justify-center">
            <div className="font-normal text-[18px] text-[#545454]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Testimonials
            </div>
            <div className="text-[54px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>
                What <span className="text-[#E64949]">People</span> Say
            </div>
            <div className="w-full h-[340px] flex gap-4 px-4">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </div>
        </div>
    )
}