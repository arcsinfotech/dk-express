import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";

export default function Layout() {
  return (
    <div className="w-full max-w-[1920px] mx-auto h-dvh">
      <Navbar />

      <main className="w-full h-full">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}