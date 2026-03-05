import contactUs from "@/assets/contact_us.png";
import Footer from "./sections/Footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const Customers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log("data: ", data);

    formData.append("access_key", import.meta.env.VITE_QUOTE_FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const response_data = await response.json();
    if (response.ok) {
      toast.success("Quote Request Sent! We will get back to you soon.");
    } else {
      toast.error(response_data.message || "Something went wrong.");
    }
    setIsSubmitting(false);
    form.reset();
  };

  const cards = [
    {
      icon: (
        <MapPin className="w-[20px] h-[20px] max-[768px]:w-[18px] max-[768px]:h-[18px] text-white" />
      ),
      title: "Address",
      details: "2000 West Charter Way, Stockton, CA",
    },
    {
      icon: (
        <Phone className="w-[20px] h-[20px] max-[768px]:w-[18px] max-[768px]:h-[18px] text-white" />
      ),
      title: "Phone No",
      details: "209-954-9354",
    },
    {
      icon: (
        <Mail className="w-[20px] h-[20px] max-[768px]:w-[18px] max-[768px]:h-[18px] text-white" />
      ),
      title: "Email",
      details: "dispatch@dkexpress.net",
    },
    {
      icon: (
        <Clock className="w-[20px] h-[20px] max-[768px]:w-[18px] max-[768px]:h-[18px] text-white" />
      ),
      title: "Timings",
      details: "6:00 AM - 4:00 PM",
    },
  ];

  function getCard({
    icon,
    title,
    details,
  }: {
    icon: React.ReactNode;
    title: string;
    details: string;
  }) {
    return (
      <div key={title} className="flex gap-3 max-[768px]:gap-2">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center">
          {icon}
        </div>
        <div
          className="font-medium flex flex-col items-start justify-between"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          <div className="text-[14px] max-[768px]:text-[12px] text-[#D0D0D0] max-[768px]:leading-[14px]">
            {title}
          </div>
          <div className="text-[16px] max-[768px]:text-[14px] text-white max-[768px]:leading-[20px]">
            {details}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 overflow-hidden">
      <div className="absolute top-[554px] left-[1499px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
      <div className="absolute top-[25px] left-[200px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
      <div className="absolute top-[81px] left-[1436px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
      <div className="absolute top-[560px] left-[761px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />

      <div className="mx-[135px] my-[120px] max-[768px]:mx-[20px] max-[1280px]:mx-[30px] max-[768px]:my-[60px] max-[1280px]:my-[80px] flex max-[1280px]:flex-col gap-[40px] bg-white rounded-[26px] relative z-10 p-3">
        <div
          // initial={{ opacity: 0, x: -40 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 1.5 }}
          className="relative z-20"
        >
          <div className="relative w-[705px] max-[1280px]:w-full h-[730px] max-[1280px]:h-fit p-[36px] max-[768px]:p-[16px] max-[1280px]:p-[26px] rounded-[16px] bg-[#01112D] overflow-hidden">
            <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[-247px] left-[-242px] bg-[#001E50]" />
            <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[467px] left-[439px] bg-[#001E50]" />

            <div className="relative z-10">
              <div
                className="relative z-10 rounded-full capitalize text-[18px] max-[768px]:text-[12px] max-[1280px]:text-[14px] w-fit font-normal py-1.5 px-4 bg-[#FFFFFF14] text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                we're here to help you
              </div>

              <div
                className="mt-3 max-[768px]:mt-2 capitalize text-[44px] max-[768px]:text-[32px] max-[1280px]:text-[48px] font-semibold text-white max-[768px]:pr-4 max-[768px]:leading-[38px] max-[1280px]:leading-[54px]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Connect with our <span className="text-[#E64949]">team</span>
              </div>

              <div className="mt-3 max-[1280px]:mt-6 w-full h-[284px] max-[768px]:h-[140px] rounded-[16px] overflow-hidden">
                <img
                  src={contactUs}
                  alt="Contact Us"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-[20px] max-[768px]:mt-3 w-fit flex flex-col items-start gap-4">
                {cards.map((card) => getCard(card))}
              </div>
            </div>
          </div>
        </div>

        <div
          // initial={{ opacity: 0, x: 40 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 1.5 }}
          className="w-full m-2.5 relative z-20"
        >
          <form
            className="flex flex-col gap-[24px] w-full"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-[22px] w-full max-[768px]:pr-[20px]">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="company-name"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Company Name
                </label>
                <input
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                  type="text"
                  id="company-name"
                  name="Company Name"
                  placeholder="Your company name"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="contact-person"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contact-person"
                  name="Contact Person"
                  placeholder="Your contact person"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  placeholder="email@company.com"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="phone"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="Phone"
                  required
                  placeholder="(209) 000-0000"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="pickup-location"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickup-location"
                  name="Pickup Location"
                  required
                  placeholder="City, State"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="delivery-location"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Delivery Location
                </label>
                <input
                  type="text"
                  id="delivery-location"
                  name="Delivery Location"
                  required
                  placeholder="City, State"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="freight-type"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Freight Type
                </label>
                <select
                  name="freight-type"
                  id="freight-type"
                  required
                  defaultValue={""}
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] text-base leading-[20px] text-[#545454]"
                >
                  <option value="">Select Freight Type</option>
                  <option value="dry">Dry</option>
                  <option value="refrigerated">Refrigerated</option>
                  <option value="frozen">Frozen</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="weight"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Weight (lbs)
                </label>
                <input
                  type="text"
                  id="weight"
                  name="Estimated Weight"
                  required
                  placeholder="Estimated weight"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex flex-col gap-3 col-span-2 max-[768px]:col-span-1">
                <label
                  htmlFor="additional-details"
                  className="text-sm max-[768px]:text-[12px] leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Additional Details
                </label>

                <textarea
                  id="additional-details"
                  name="Additional Details"
                  required
                  placeholder="Tell us more about your shipment..."
                  rows={5}
                  className="w-full min-h-[120px] rounded-[8px] px-3.5 py-4 max-[768px]:py-[10px] bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] max-[768px]:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] max-h-[180px]"
                />
              </div>
            </div>
            <button
              className={`px-4 w-fit py-3.5 max-[768px]:py-[10px] bg-[#E64949] text-white text-base max-[1280px]:text-[14px] leading-[14px] max-[768px]:leading-[16px] font-medium rounded-[36px] cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              style={{ fontFamily: "Outfit" }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
