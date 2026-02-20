import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Desktop Navbar */}
            <div className="w-full sticky top-0 z-50 hidden md:block" style={{ height: "74px" }}>
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
                        <img
                            src="/src/assets/Logo.png"
                            alt="logo"
                            className="w-[80px] object-contain"
                        />
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
                                className="text-[#D0D0D0] text-[16px] font-normal tracking-wide hover:text-red-400 transition-colors duration-200 whitespace-nowrap"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div>
                        <button
                            className="border border-white rounded-full px-5 py-2 bg-transparent text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap cursor-pointer"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="w-full sticky top-0 z-50 md:hidden">
                {/* Solid dark header for mobile */}
                <div
                    className="flex items-center justify-between px-4 h-[60px]"
                    style={{
                        background: "linear-gradient(90deg, #1a1a1a 0%, #3a0000 50%, #1a1a1a 100%)",
                    }}
                >
                    <img
                        src="/src/assets/Logo.png"
                        alt="logo"
                        className="w-[70px] object-contain"
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
                    <div
                        className="flex flex-col px-6 py-4 gap-4"
                        style={{
                            background: "linear-gradient(180deg, #2a0a0a 0%, #1a1a1a 100%)",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
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
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-base font-medium border-b border-white/10 pb-3 hover:text-red-400 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                        <button className="mt-2 border border-white rounded-full px-5 py-2 bg-transparent text-white text-sm font-semibold hover:bg-white hover:text-black transition-all self-start">
                            Contact Us
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}