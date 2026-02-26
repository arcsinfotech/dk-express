import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "./sections/Footer";
import Quote from "./sections/Quote";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message Sent! We'll respond within 1 business day.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <div className="bg-[#F4F5F7] h-full px-[135px] py-[120px] relative z-10">
        <div className="absolute top-[249px] left-[203px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[209px] left-[693px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[206px] left-[1529px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[610px] left-[1024px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[610px] left-[116px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="flex flex-row gap-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="bg-white rounded-[26px] w-[65%]"
          >
            <div className="flex flex-col gap-8 p-[26px]">
              <div className="flex flex-col gap-4 ">
                <div
                  className="font-semibold text-[28px] leading-[36px] tracking-normal"
                  style={{ fontFamily: "Raleway" }}
                >
                  Contact Information
                </div>
                <div className="bg-[#D2D2D2] h-px" />
                <div className="flex flex-row gap-[23px]">
                  <div className="flex flex-row gap-3 justify-center items-center">
                    <div className="bg-[#E649491A] rounded-[12px] p-[11px] h-[42px] w-[42px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 10.418C11.3807 10.418 12.5 9.29872 12.5 7.91797C12.5 6.53726 11.3807 5.41797 10 5.41797C8.61925 5.41797 7.5 6.53726 7.5 7.91797C7.5 9.29872 8.61925 10.418 10 10.418Z"
                          stroke="#E64949"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.9987 18.3346C11.6654 15.0013 16.6654 12.8499 16.6654 8.33464C16.6654 4.65274 13.6806 1.66797 9.9987 1.66797C6.3168 1.66797 3.33203 4.65274 3.33203 8.33464C3.33203 12.8499 8.33203 15.0013 9.9987 18.3346Z"
                          stroke="#E64949"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className="text-[#767676] text-sm leading-[16px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Address
                      </div>
                      <div
                        className="text-base leading-[20px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        200 West Center Way, stockton, CA
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#D2D2D2] w-px" />
                  <div className="flex flex-row gap-3 justify-center items-center">
                    <div className="bg-[#E649491A] rounded-[12px] p-[11px] h-[42px] w-[42px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66797 5.83203L8.47205 10.5949C9.02305 10.9806 9.29855 11.1734 9.59822 11.2481C9.86289 11.3141 10.1397 11.3141 10.4044 11.2481C10.7041 11.1734 10.9796 10.9806 11.5306 10.5949L18.3346 5.83203M5.66797 16.6654H14.3346C15.7348 16.6654 16.4348 16.6654 16.9696 16.3929C17.4401 16.1532 17.8225 15.7708 18.0621 15.3004C18.3346 14.7655 18.3346 14.0655 18.3346 12.6654V7.33203C18.3346 5.9319 18.3346 5.23183 18.0621 4.69706C17.8225 4.22665 17.4401 3.8442 16.9696 3.60451C16.4348 3.33203 15.7348 3.33203 14.3346 3.33203H5.66797C4.26784 3.33203 3.56777 3.33203 3.03299 3.60451C2.56259 3.8442 2.18014 4.22665 1.94045 4.69706C1.66797 5.23183 1.66797 5.9319 1.66797 7.33203V12.6654C1.66797 14.0655 1.66797 14.7655 1.94045 15.3004C2.18014 15.7708 2.56259 16.1532 3.03299 16.3929C3.56777 16.6654 4.26784 16.6654 5.66797 16.6654Z"
                          stroke="#E64949"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1 w-max">
                      <div
                        className="text-[#767676] text-sm leading-[16px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Email
                      </div>
                      <a
                        href="mailto:dispatch@dkexpress.net"
                        className="text-base leading-[20px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        dispatch@dkexpress.net
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#D2D2D2] w-px" />
                  <div className="flex flex-row gap-3 justify-center items-center w-max">
                    <div className="bg-[#E649491A] rounded-[12px] p-[11px] h-[42px] w-[42px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98356 7.37779C7.56355 8.58583 8.35425 9.718 9.3555 10.7193C10.3568 11.7207 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1662 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.8801C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9887 15.6837 11.9887 16.2361 12.3478C16.3826 12.443 16.5282 12.5887 16.8196 12.8801L16.9819 13.0424C17.4248 13.4853 17.6462 13.7068 17.7665 13.9446C18.0057 14.4175 18.0057 14.9761 17.7665 15.4491C17.6462 15.6868 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0773 17.5657 13.607 17.4322C11.0792 16.7147 8.69383 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99567 2.6427 6.46787C2.50919 5.99749 2.44243 5.76231 2.44141 5.41818C2.44027 5.03633 2.57474 4.51926 2.76176 4.18633C2.9303 3.88631 3.15097 3.66563 3.59233 3.22427L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65733 2.0691 6.1303 2.30833C6.36811 2.42861 6.58955 2.65005 7.03242 3.09292L7.19481 3.25531C7.48615 3.54664 7.63182 3.69232 7.72706 3.83879C8.08622 4.39121 8.08622 5.10336 7.72706 5.65577C7.63182 5.80224 7.48615 5.94792 7.19481 6.23925C7.09955 6.33452 7.05192 6.38214 7.01205 6.43782C6.87038 6.63568 6.82146 6.92256 6.88956 7.15619C6.90873 7.22193 6.93367 7.27388 6.98356 7.37779Z"
                          stroke="#E64949"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1 w-max">
                      <div
                        className="text-[#767676] text-sm leading-[16px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Phone No
                      </div>
                      <a
                        href="tel:209-954-9354"
                        className="text-base leading-[20px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        209-954-9354
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#D2D2D2] w-px" />
                  <div className="flex flex-row gap-3 justify-center items-center">
                    <div className="bg-[#E649491A] rounded-[12px] p-[11px] h-[42px] w-[42px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_448_2437)">
                          <path
                            d="M10.0013 5.0013V10.0013L13.3346 11.668M18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013Z"
                            stroke="#E64949"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_448_2437">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className="text-[#767676] text-sm leading-[16px] font-medium tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Timing
                      </div>
                      <div
                        className="text-base leading-[20px] font-medium tracking-normal w-max"
                        style={{ fontFamily: "Figtree" }}
                      >
                        6:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-121.32!3d37.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU2JzI0LjAiTiAxMjHCsDE5JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="479"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DK Express Location"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="bg-white rounded-[26px] w-[35%]"
          >
            <div className="py-9 px-6.5 flex flex-col gap-[26px]">
              <div
                className="font-semibold text-[28px] leading-[36px] tracking-normal"
                style={{ fontFamily: "Raleway" }}
              >
                Send Us a Message
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-[11px] w-full">
                  <div className="flex flex-col gap-3 w-1/2">
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
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-1/2">
                    <label
                      htmlFor="email"
                      className="text-sm leading-[16px] tracking-normal"
                      style={{ fontFamily: "Figtree" }}
                    >
                      Email
                    </label>
                    <input
                      className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                      type="text"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="phone"
                    className="text-sm leading-[16px] tracking-normal"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Phone
                  </label>
                  <input
                    className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                    type="text"
                    id="phone"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="subject"
                    className="text-sm leading-[16px] tracking-normal"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Subject
                  </label>
                  <input
                    className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454]"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm leading-[16px] tracking-normal"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    placeholder="Message"
                    rows={5}
                    className="w-full min-h-[120px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base placeholder:leading-[20px] placeholder:text-[#545454] max-h-[180px]"
                  />
                </div>
              </div>
              <button
                className="px-4 w-fit py-3.5 bg-[#E64949] text-white text-base leading-[14px] font-medium rounded-[36px]"
                style={{ fontFamily: "Outfit" }}
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Quote
        description="Contact us today to learn more about partnership opportunities."
        title="Ready to"
        title2="Get Started?"
        buttonText="Become a Partner"
      />
      <Footer />
    </div>
  );
};

export default Contact;
