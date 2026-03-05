import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "./sections/Footer";
import Quote from "./sections/Quote";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log("data: ", data);

    formData.append(
      "access_key",
      import.meta.env.VITE_CONTACT_US_FORM_ACCESS_KEY,
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const response_data = await response.json();
    if (response.ok) {
      toast.success("Message Sent! We will get back to you soon.");
    } else {
      toast.error(response_data.message || "Something went wrong.");
    }
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div>
      <div className="bg-[#F4F5F7] h-full px-[135px] py-[120px] max-[768px]:px-[20px] max-[768px]:py-[60px] max-[1280px]:px-[30px] max-[1280px]:py-[80px] relative z-10 max-[768px]:text-[14px] overflow-hidden">
        <div className="absolute top-[249px] left-[203px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[209px] left-[693px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[206px] left-[1529px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[610px] left-[1024px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />
        <div className="absolute top-[610px] left-[116px] w-[186px] h-[186px] rounded-full bg-[#E64949] blur-[180px] z-0" />

        <div className="flex flex-row max-[1280px]:flex-col-reverse gap-4 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 1.5 }}
            className="bg-white rounded-[26px] max-[1280px]:rounded-[16px] w-[65%] max-[1280px]:w-full relative z-20"
          >
            <div className="flex flex-col gap-8 max-[1280px]:gap-[24px] max-[768px]:gap-[16px] p-[26px] max-[768px]:p-[12px]">
              <div className="flex flex-col gap-4 max-[1280px]:gap-[36px] ">
                <div
                  className="font-semibold text-[28px] max-[768px]:text-[20px] max-[1280px]:text-[24px] leading-[36px] tracking-normal"
                  style={{ fontFamily: "Raleway" }}
                >
                  Contact Information
                </div>

                <div className="bg-[#D2D2D2] h-px max-[1280px]:hidden block" />

                <div className="flex flex-row flex-wrap max-[1280px]:flex-col gap-[16px] max-[1280px]:gap-[16px]">
                  <div className="flex flex-row gap-3 justify-center max-[1280px]:justify-start items-center max-w-[200px] max-[1280px]:max-w-full">
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.9987 18.3346C11.6654 15.0013 16.6654 12.8499 16.6654 8.33464C16.6654 4.65274 13.6806 1.66797 9.9987 1.66797C6.3168 1.66797 3.33203 4.65274 3.33203 8.33464C3.33203 12.8499 8.33203 15.0013 9.9987 18.3346Z"
                          stroke="#E64949"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

                  <div className="bg-[#D2D2D2] w-px max-[1280px]:hidden block" />
                  <div className="bg-[#D2D2D2] h-px max-[1280px]:block hidden" />

                  <div className="flex flex-row gap-3 justify-center max-[1280px]:justify-start items-center">
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

                  <div className="bg-[#D2D2D2] w-px max-[1280px]:hidden block" />
                  <div className="bg-[#D2D2D2] h-px max-[1280px]:block hidden" />

                  <div className="flex flex-row gap-3 justify-center max-[1280px]:justify-start items-center w-max">
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

                  <div className="bg-[#D2D2D2] w-px max-[1280px]:hidden block" />
                  <div className="bg-[#D2D2D2] h-px max-[1280px]:block hidden" />

                  <div className="flex flex-row gap-3 justify-center max-[1280px]:justify-start items-center">
                    <div className="bg-[#E649491A] rounded-[12px] p-[11px] h-[42px] w-[42px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_448_2437)">
                          <path
                            d="M10.0013 5.0013V10.0013L13.3346 11.668M18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013Z"
                            stroke="#E64949"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                className="w-full h-[479px] max-[768px]:h-[155px] max-[1280px]:h-[242px] max-[768px]:rounded-[12px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7283.572319518824!2d-121.32580297800735!3d37.931591098936664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090125da067f1af%3A0x94b8ebba9542e078!2sDK%20EXPRESS%20CARGO%20INC!5e0!3m2!1sen!2sin!4v1771838581677!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DK Express Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 1.5 }}
            className="bg-white rounded-[26px] w-[35%] max-[1280px]:rounded-[16px] max-[1280px]:w-full relative z-20"
          >
            <div className="py-9 px-6.5 max-[768px]:p-4 max-[1280px]:p-6 flex flex-col gap-[26px] max-[1280px]:gap-[32px]">
              <div
                className="font-semibold text-[28px] max-[768px]:text-[20px] max-[1280px]:text-[24px] leading-[36px] tracking-normal"
                style={{ fontFamily: "Raleway" }}
              >
                Send Us a Message
              </div>
              <form
                className="flex flex-col gap-[26px]"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row max-[768px]:flex-col gap-[11px] max-[768px]:gap-[24px] max-[1280px]:gap-[16px] w-full">
                    <div className="flex flex-col gap-3 max-[1280px]:gap-2 w-1/2 max-[768px]:w-full">
                      <label
                        htmlFor="company-name"
                        className="text-sm max-[768px]:text-[13px] max-[1280px]:text-[14px] max-[768px]:font-semibold max-[1280px]:font-medium leading-[16px] tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Company Name
                      </label>
                      <input
                        className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2]"
                        type="text"
                        id="companyname"
                        name="Company Name"
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-3 max-[1280px]:gap-2 w-1/2 max-[768px]:w-full">
                      <label
                        htmlFor="email"
                        className="text-sm max-[768px]:text-[13px] max-[1280px]:text-[14px] max-[768px]:font-semibold max-[1280px]:font-medium leading-[16px] tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Email
                      </label>
                      <input
                        className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] max-[768px]:text-[14px]"
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col max-[1280px]:flex-row max-[768px]:flex-col gap-[11px] max-[768px]:gap-[24px] max-[1280px]:gap-[16px] w-full">
                    <div className="flex flex-col gap-3 max-[1280px]:gap-2 w-full max-[1280px]:w-1/2 max-[768px]:w-full">
                      <label
                        htmlFor="phone"
                        className="text-sm max-[768px]:text-[13px] max-[1280px]:text-[14px] max-[768px]:font-semibold max-[1280px]:font-medium leading-[16px] tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Phone
                      </label>
                      <input
                        className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] max-[768px]:text-[14px]"
                        type="number"
                        id="phone"
                        name="Phone"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-3 max-[1280px]:gap-2 w-full max-[1280px]:w-1/2 max-[768px]:w-full">
                      <label
                        htmlFor="subject"
                        className="text-sm max-[768px]:text-[13px] max-[1280px]:text-[14px] max-[768px]:font-semibold max-[1280px]:font-medium leading-[16px] tracking-normal"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Subject
                      </label>
                      <input
                        className="h-[52px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] max-[768px]:text-[14px]"
                        type="text"
                        id="subject"
                        name="Subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 max-[1280px]:gap-2 col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm max-[768px]:text-[13px] max-[1280px]:text-[14px] max-[768px]:font-semibold max-[1280px]:font-medium leading-[16px] tracking-normal"
                      style={{ fontFamily: "Figtree" }}
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      placeholder="Message"
                      rows={5}
                      className="w-full min-h-[120px] rounded-[8px] px-3.5 py-4 bg-[#F4F5F7] border-none outline-none placeholder:text-base max-[768px]:placeholder:text-[14px] placeholder:leading-[20px] placeholder:text-[#a2a2a2] max-h-[180px] max-[768px]:text-[14px]"
                      required
                    />
                  </div>
                </div>
                <button
                  className={
                    "px-4 w-fit py-3.5 bg-[#E64949] text-white text-base leading-[14px] font-medium rounded-[36px] cursor-pointer" +
                    (isSubmitting ? " opacity-50 cursor-not-allowed" : "")
                  }
                  style={{ fontFamily: "Outfit" }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
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
