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
      <div key={title} className="flex gap-3">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center">
          {icon}
        </div>
        <div
          className="font-medium flex flex-col items-start justify-between"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          <div className="text-[14px] text-[#D0D0D0]">{title}</div>
          <div className="text-[16px] text-white">{details}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10">
      <div className="absolute top-[554px] left-[1499px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[80px] z-0" />
      <div className="absolute top-[25px] left-[200px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[80px] z-0" />
      <div className="absolute top-[81px] left-[1436px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[80px] z-0" />
      <div className="absolute top-[560px] left-[761px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[80px] z-0" />
      <div className="mx-[135px] my-[120px] flex gap-[40px] bg-white rounded-[26px] relative z-10 p-3">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative w-[705px] h-[730px] p-[36px] rounded-[16px] bg-[#01112D] overflow-hidden">
            <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[-247px] left-[-242px] bg-[#001E50]" />
            <div className="w-[494px] h-[494px] rounded-full absolute blur-[80px] top-[467px] left-[439px] bg-[#001E50]" />
            <div className="relative z-10">
              <div
                className="relative z-10 rounded-full capitalize text-[18px] w-fit font-normal py-1.5 px-4 bg-[#FFFFFF14] text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                we're here to help you
              </div>

              <div
                className="mt-3 capitalize text-[44px] font-semibold text-white"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Connect with our <span className="text-[#E64949]">team</span>
              </div>

              <div className="mt-3 w-full h-[284px] rounded-[16px] overflow-hidden">
                <img
                  src={contactUs}
                  alt="Contact Us"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-[20px] w-fit flex flex-col items-start gap-4">
                {cards.map((card) => getCard(card))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full m-2.5"
        >
          <form
            className="flex flex-col gap-[24px] w-full"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-[22px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="company-name"
                  className="text-sm leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Company Name
                </label>
                <input
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
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
                  className="text-sm leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contact-person"
                  name="Contact Person"
                  placeholder="Your contact person"
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="phone"
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="pickup-location"
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="delivery-location"
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="freight-type"
                  className="text-sm leading-[16px] tracking-normal"
                  style={{ fontFamily: "Figtree" }}
                >
                  Freight Type
                </label>
                <select
                  name="freight-type"
                  id="freight-type"
                  required
                  defaultValue={""}
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454] text-base leading-[20px] text-[#545454]"
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
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                />
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label
                  htmlFor="additional-details"
                  className="text-sm leading-[16px] tracking-normal"
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
                  className="w-full min-h-[120px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454] max-h-[180px]"
                />
              </div>
            </div>
            <button
              className={`px-4 w-fit py-3.5 bg-[#E64949] text-white text-base leading-[14px] font-medium rounded-[36px] cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              style={{ fontFamily: "Outfit" }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
