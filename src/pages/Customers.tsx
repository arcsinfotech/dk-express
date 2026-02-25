import contactUs from "@/assets/contact_us.png";
import Footer from "./sections/Footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Customers = () => {

  const cards = [
    {
      icon: <MapPin className="w-[20px] h-[20px] text-white" />,
      title: "Address",
      details: "2000 West Charter Way, Stockton, CA",
    },
    {
      icon: <Phone className="w-[20px] h-[20px] text-white" />,
      title: "Phone No",
      details: "209-954-9354",
    },
    {
      icon: <Mail className="w-[20px] h-[20px] text-white" />,
      title: "Email",
      details: "dispatch@dkexpress.net",
    },
    {
      icon: <Clock className="w-[20px] h-[20px] text-white" />,
      title: "Timings",
      details: "6:00 AM - 4:00 PM",
    },
  ]

  function getCard({icon, title, details}: {icon: React.ReactNode, title: string, details: string}) {
    return (
      <div key={title} className="flex gap-3">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center">
          {icon}
        </div>
        <div className="font-medium flex flex-col items-start justify-between" style={{ fontFamily: "'Figtree', sans-serif" }}>
          <div className="text-[14px] text-[#D0D0D0]">{title}</div>
          <div className="text-[16px] text-white">{details}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      
      <div className="px-[135px] py-[120px] flex gap-[40px]">

        <div className="relative w-[705px] h-[730px] p-[36px] rounded-[16px] bg-[#01112D] overflow-hidden">
          <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[-247px] left-[-242px] bg-[#001E50]"/>
          <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[467px] left-[439px] bg-[#001E50]"/>

          <div className="relative z-10">
            <div className="relative z-10 rounded-full capitalize text-[18px] w-fit font-normal py-1.5 px-4 bg-[#FFFFFF14] text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              we're here to help you
            </div>

            <div className="mt-3 capitalize text-[44px] font-semibold text-white" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Connect with our <span className="text-[#E64949]">team</span>
            </div>

            <div className="mt-3 w-full h-[284px] rounded-[16px] overflow-hidden">
              <img src={contactUs} alt="Contact Us" className="w-full h-full object-cover object-center" />
            </div>

            <div className="mt-[20px] w-fit flex flex-col items-start gap-4">

              {cards.map((card) => (
                getCard(card)
              ))}

            </div>
          </div>
        </div>

        {/* FORM */}
        <div>

        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
