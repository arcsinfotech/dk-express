import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Toaster } from "./components/ui/sonner";
import Opportunities from "./pages/Opportunities";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact";
import CommonSubHeader from "./components/CommonSubHeader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/about"
            element={
              <CommonSubHeader
                heading="About Us"
                subHeading="Our"
                secondSubHeading="Story"
                description="Family-owned since 1997, delivering excellence in transportation across the nation."
              />
            }
          >
            <Route index element={<About />} />
          </Route>
          <Route
            path="/services"
            element={
              <CommonSubHeader
                heading="What We Offer"
                subHeading="Our"
                secondSubHeading="Services"
                description="Comprehensive transportation solutions tailored to your freight needs."
              />
            }
          >
            <Route index element={<Services />} />
          </Route>
          <Route
            path="/opportunities"
            element={
              <CommonSubHeader
                heading="Join Our Team"
                subHeading="Partner With DK"
                secondSubHeading="Express"
                description="Discover opportunities for carriers, owner-operators, and drivers."
              />
            }
          >
            <Route index element={<Opportunities />} />
          </Route>
          <Route
            path="/customers"
            element={
              <CommonSubHeader
                heading="Get Started"
                subHeading="Request a"
                secondSubHeading="Quote"
                description="Fill out the form below and our team will provide a competitive quote."
              />
            }
          >
            <Route index element={<Customers />} />
          </Route>
          <Route
            path="/contact"
            element={
              <CommonSubHeader
                heading="Get In Touch"
                subHeading="Connect With Our"
                secondSubHeading="Logistics Experts"
                description="We are here to help with all your transportation needs."
              />
            }
          >
            <Route index element={<Contact />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
