import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  const quickLinks = [
    {
      name: "Home",
      href: "#"
    },
    {
      name: "About Us",
      href: "#"
    },
    {
      name: "Services",
      href: "#"
    },
    {
      name: "Opportunities",
      href: "#"
    },
    {
      name: "Customers",
      href: "#"
    },
    {
      name: "Contact",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6654 8.01974C14.6654 4.33028 11.6787 1.33594 7.9987 1.33594C4.3187 1.33594 1.33203 4.33028 1.33203 8.01974C1.33203 11.2547 3.62536 13.9483 6.66536 14.5699V10.0249H5.33203V8.01974H6.66536V6.34879C6.66536 5.05882 7.71203 4.00946 8.9987 4.00946H10.6654V6.0146H9.33203C8.96536 6.0146 8.66536 6.31537 8.66536 6.68298V8.01974H10.6654V10.0249H8.66536V14.6701C12.032 14.3359 14.6654 11.4886 14.6654 8.01974Z" fill="white"/></svg>
      
    },
    {
      name: "Instagram",
      href: "#",
      icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68441 1.33594C9.43441 1.33794 9.81508 1.34195 10.1437 1.35131L10.2731 1.35599C10.4224 1.36134 10.5697 1.36802 10.7477 1.37604C11.4571 1.40946 11.9411 1.52175 12.3657 1.68684C12.8057 1.85661 13.1764 2.08653 13.5471 2.45748C13.8862 2.79149 14.1485 3.19569 14.3157 3.64185C14.4804 4.06761 14.5924 4.55285 14.6257 5.26468C14.6337 5.44247 14.6404 5.59018 14.6457 5.74057L14.6497 5.87023C14.6597 6.19907 14.6637 6.58072 14.6651 7.33265L14.6657 7.83126V8.70684C14.6674 9.19436 14.6623 9.68188 14.6504 10.1693L14.6464 10.2989C14.6411 10.4493 14.6344 10.597 14.6264 10.7748C14.5931 11.4866 14.4797 11.9712 14.3157 12.3976C14.1485 12.8438 13.8862 13.248 13.5471 13.582C13.2139 13.922 12.8108 14.185 12.3657 14.3526C11.9411 14.5177 11.4571 14.63 10.7477 14.6634L10.2731 14.6835L10.1437 14.6875C9.81508 14.6969 9.43441 14.7015 8.68441 14.7029L8.18708 14.7035H7.31441C6.82792 14.7053 6.34143 14.7001 5.85508 14.6882L5.72574 14.6842C5.56748 14.6782 5.40926 14.6712 5.25108 14.6634C4.54174 14.63 4.05774 14.5177 3.63241 14.3526C3.18763 14.1849 2.78471 13.9219 2.45174 13.582C2.11237 13.2481 1.84982 12.8439 1.68241 12.3976C1.51774 11.9719 1.40574 11.4866 1.37241 10.7748L1.35241 10.2989L1.34908 10.1693C1.33679 9.68188 1.33123 9.19436 1.33241 8.70684V7.33265C1.33057 6.84513 1.33545 6.35761 1.34708 5.87023L1.35174 5.74057C1.35708 5.59018 1.36374 5.44247 1.37174 5.26468C1.40508 4.55285 1.51708 4.06828 1.68174 3.64185C1.84954 3.1955 2.11256 2.79129 2.45241 2.45748C2.78518 2.11764 3.18787 1.85465 3.63241 1.68684C4.05774 1.52175 4.54108 1.40946 5.25108 1.37604C5.42841 1.36802 5.57641 1.36134 5.72574 1.35599L5.85508 1.35198C6.34121 1.3401 6.82747 1.33498 7.31374 1.33661L8.68441 1.33594ZM7.99908 4.67784C7.11502 4.67784 6.26718 5.02993 5.64205 5.65666C5.01693 6.28339 4.66574 7.13341 4.66574 8.01974C4.66574 8.90607 5.01693 9.7561 5.64205 10.3828C6.26718 11.0096 7.11502 11.3616 7.99908 11.3616C8.88313 11.3616 9.73098 11.0096 10.3561 10.3828C10.9812 9.7561 11.3324 8.90607 11.3324 8.01974C11.3324 7.13341 10.9812 6.28339 10.3561 5.65666C9.73098 5.02993 8.88313 4.67784 7.99908 4.67784ZM7.99908 6.0146C8.26172 6.01456 8.5218 6.06638 8.76447 6.16711C9.00714 6.26783 9.22764 6.41549 9.41339 6.60166C9.59914 6.78782 9.74649 7.00884 9.84704 7.2521C9.94759 7.49536 9.99937 7.75609 9.99941 8.01941C9.99945 8.28273 9.94777 8.54348 9.8473 8.78677C9.74683 9.03006 9.59955 9.25113 9.41386 9.43736C9.22817 9.62358 9.00772 9.77132 8.76509 9.87212C8.52245 9.97293 8.26239 10.0248 7.99974 10.0249C7.46931 10.0249 6.9606 9.81363 6.58553 9.43759C6.21046 9.06155 5.99974 8.55154 5.99974 8.01974C5.99974 7.48795 6.21046 6.97793 6.58553 6.60189C6.9606 6.22586 7.46931 6.0146 7.99974 6.0146M11.4997 3.67527C11.2787 3.67527 11.0668 3.76329 10.9105 3.91997C10.7542 4.07666 10.6664 4.28916 10.6664 4.51074C10.6664 4.73233 10.7542 4.94483 10.9105 5.10152C11.0668 5.2582 11.2787 5.34622 11.4997 5.34622C11.7208 5.34622 11.9327 5.2582 12.089 5.10152C12.2453 4.94483 12.3331 4.73233 12.3331 4.51074C12.3331 4.28916 12.2453 4.07666 12.089 3.91997C11.9327 3.76329 11.7208 3.67527 11.4997 3.67527Z" fill="white"/></svg>
      
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.34038 5.55859H1.58468C1.46238 5.55859 1.36328 5.65799 1.36328 5.78056V14.6562C1.36328 14.7788 1.46238 14.8782 1.58468 14.8782H4.34038C4.46269 14.8782 4.56179 14.7788 4.56179 14.6562V5.78056C4.56179 5.65799 4.46269 5.55859 4.34038 5.55859Z" fill="white"/><path d="M2.96295 1.14844C1.96026 1.14844 1.14453 1.96538 1.14453 2.96953C1.14453 3.97413 1.96026 4.79138 2.96295 4.79138C3.96484 4.79138 4.77991 3.97409 4.77991 2.96953C4.77995 1.96538 3.96484 1.14844 2.96295 1.14844Z" fill="white"/><path d="M11.3507 5.33984C10.2439 5.33984 9.42578 5.81686 8.92953 6.35887V5.78241C8.92953 5.65984 8.83043 5.56044 8.70813 5.56044H6.06906C5.94676 5.56044 5.84766 5.65984 5.84766 5.78241V14.6581C5.84766 14.7807 5.94676 14.88 6.06906 14.88H8.81874C8.94104 14.88 9.04014 14.7807 9.04014 14.6581V10.2667C9.04014 8.78688 9.44105 8.21037 10.47 8.21037C11.5905 8.21037 11.6796 9.13457 11.6796 10.3428V14.6581C11.6796 14.7807 11.7787 14.8801 11.901 14.8801H14.6517C14.774 14.8801 14.8731 14.7807 14.8731 14.6581V9.78965C14.8731 7.58925 14.4546 5.33984 11.3507 5.33984Z" fill="white"/></svg>
      
    }
  ]

  return (
    <footer className="w-full bg-[#00112D] text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <div className="mx-[135px]">
        <div className="flex items-start justify-between gap-[130px] mb-[37px] pt-[123px]">
          {/* Logo + Description */}
          <div className="flex flex-col gap-8 max-w-[400px]">
            <img
              src="/src/assets/Logo.png"
              alt="DK Express Cargo Logo"
              className="w-36 h-auto object-contain"
            />
            <p className="text-[18px] text-white">
              Family-Owned Transportation Company Serving The Nation Since 1997.
              Specializing In Refrigerated And Dry Freight With Modern Equipment
              And Experienced Drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[54px]">
            <div className="text-[24px] font-medium mb-6 text-white whitespace-nowrap">
              Quick Links
            </div>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[18px] text-[#989898] font-medium hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-[54px]">
            <div className="text-[24px] font-medium mb-6 text-white whitespace-nowrap">
              Contact Info
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[18px] text-[#989898] font-medium whitespace-nowrap">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                200 West Center Way, Stockton, CA
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#989898] font-medium whitespace-nowrap">
                <svg
                  className="w-4 h-4 shrink-0 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                209-954-9354
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#989898] font-medium whitespace-nowrap">
                <svg
                  className="w-4 h-4 shrink-0 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Dispatch@Dkexpress.Net
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#989898] font-medium whitespace-nowrap">
                <svg
                  className="w-4 h-4 shrink-0 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                6:00 AM - 4:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[28px] font-medium text-white leading-9">
              Subscribe to get tips and tactics to grow the way you want.
            </p>

            <div className="flex items-center h-[48px] overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 w-[297px] text-[16px] h-full bg-white text-[#001A34] placeholder-[#001A34] outline-none rounded-l-[8px]"
                style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
              />
              <button
                onClick={handleSubscribe}
                className="w-[55px] h-full flex items-center justify-center bg-[#E34545] rounded-r-[8px] cursor-pointer outline-none"
              >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.75 12.306H4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.6992 18.3456L19.7492 12.3061L13.6992 6.26562" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 mt-[23px] self-end" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  className="h-[38px] border border-[#999A9C] rounded-full flex items-center gap-1 px-3.5 py-2.5 text-[14px] font-medium text-white capitalize"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-5 text-center">
          <p className="text-sm text-gray-400">
            © 2026 DK Express Cargo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}