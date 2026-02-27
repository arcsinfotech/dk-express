import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import MobileNotch from "@/assets/mobile_notch.svg";
import { BriefcaseBusiness, ChevronRight, Home, PhoneCall, Settings, User, Users, X } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

    }, [menuOpen]);
    
    return (
        <div className="w-full max-w-[1920px] z-50 fixed" style={{ fontFamily: "'Outfit', sans-serif", height: "74px" }}>
            {/* Desktop Navbar */}
            <div className="w-full relative hidden md:block" style={{ height: "74px" }}>
                {/* Notch SVG Background — stretches to full width */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.6]"
                    viewBox="0 0 1920 74"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a1a1a" />
                            <stop offset="35%" stopColor="#2a0a0a" />
                            <stop offset="60%" stopColor="#8b0000" />
                            <stop offset="80%" stopColor="#6b0000" />
                            <stop offset="100%" stopColor="#1a1a1a" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 66V0H1920V66C1919.6 72 1913.83 73.8333 1911 74H1727.5C1723.9 74 1722 71.6667 1721.5 70.5C1718.67 62.8333 1712.6 46.4 1711 42C1709.4 37.6 1704 36.8333 1701.5 37H1279.5C1273.5 37 1270.33 41.3333 1269.5 43.5C1267.83 48 1263.9 58.7 1261.5 65.5C1259.1 72.3 1251.17 74 1247.5 74H667.5C662.3 74 660 70.3333 659.5 68.5L650.5 44C648.5 38.4 642.333 37 639.5 37H219C212.2 37 209.167 41.3333 208.5 43.5L200 67C198 72.2 192.167 73.8333 189.5 74H7.5C1.5 74 0 68.6667 0 66Z"
                        fill="#000000"
                    />
                </svg>

                {/* Content layer */}
                <div className="relative z-10 flex items-center justify-between h-full px-10 pl-14">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Logo width={90} height={52} />
                    </div>

                    {/* Nav Links */}
                    <nav className="pl-6.5 flex items-center gap-6">
                        {[
                            { label: "Home", to: "/" },
                            { label: "Services", to: "/services" },
                            { label: "Opportunities", to: "/opportunities" },
                            { label: "Customers", to: "/customers" },
                            { label: "About Us", to: "/about" },
                        ].map(({ label, to }) => (
                            <Link
                                key={label}
                                to={to}
                                className={`text-[#D0D0D0] text-[16px] font-normal tracking-wide hover:text-red-400 transition-colors duration-200 whitespace-nowrap ${to === window.location.pathname ? "text-[#E64949]" : ""}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div>
                        <button
                            className="border border-white rounded-full px-5 py-2 bg-transparent text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap cursor-pointer"
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="w-full md:hidden" style={{ height: "58px" }}>
                
                <img src={MobileNotch} alt="mobile notch" className="absolute w-full h-[58px] object-cover" />

                {/* Solid dark header for mobile */}
                <div
                    className="flex items-center justify-between px-4 h-full relative z-10">
                    <img
                        src="/src/assets/Logo.png"
                        alt="logo"
                        className="w-[68px] object-contain"
                    />
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            // X icon
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            // Hamburger
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-0 left-0 z-10 w-full h-screen bg-[#00112D]">
                        <div className="z-0 absolute left-[243px] rounded-full blur-[300px] min-h-[322px] min-w-[322px] bg-[#E64949]" />
                        <div className="relative z-1 w-full h-[58px] bg-[#00000099] flex items-center justify-between px-[20px]">
                            <div className="text-white text-[22px] font-semibold">
                                Navigation
                            </div>
                            <button onClick={() => setMenuOpen(false)}>
                                <X className="w-[22px] h-[22px] text-white" />
                            </button>
                        </div>
                        <div className="relative z-1 flex flex-col p-[20px] gap-2">
                            {[
                                { label: "Home", to: "/", icon: <Home className={`w-[18px] h-[18px] ${'/' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                                { label: "Services", to: "/services", icon: <Settings className={`w-[18px] h-[18px] ${'/services' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                                { label: "Opportunities", to: "/opportunities", icon: <BriefcaseBusiness className={`w-[18px] h-[18px] ${'/opportunities' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                                { label: "Customers", to: "/customers", icon: <Users className={`w-[18px] h-[18px] ${'/customers' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                                { label: "About Us", to: "/about", icon: <User className={`w-[18px] h-[18px] ${'/about' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                                { label: "Contact Us", to: "/contact", icon: <PhoneCall className={`w-[18px] h-[18px] ${'/about' === window.location.pathname ? "text-white" : "text-[#929292]"}`} /> },
                            ].map(({ label, to, icon }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    onClick={() => setMenuOpen(false)}
                                    className={`p-[22px] ${to === window.location.pathname ? "text-white" : "text-[#929292]"} text-[14px] border-b border-[#FFFFFF33]`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-3.5">
                                            {icon}
                                            {label}
                                        </span>
                                        <ChevronRight className={`w-[18px] h-[18px] ${to === window.location.pathname ? "text-white" : "text-[#929292]"}`} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
}