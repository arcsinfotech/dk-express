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
                heading="Services"
                subHeading="Our"
                secondSubHeading="Services"
                description="Family-owned since 1997, delivering excellence in transportation across the nation."
              />
            }
          >
            <Route index element={<Services />} />
          </Route>
          <Route
            path="/opportunities"
            element={
              <CommonSubHeader
                heading="Opportunities"
                subHeading="Our"
                secondSubHeading="Opportunities"
                description="Family-owned since 1997, delivering excellence in transportation across the nation."
              />
            }
          >
            <Route index element={<Opportunities />} />
          </Route>
          <Route
            path="/customers"
            element={
              <CommonSubHeader
                heading="Customers"
                subHeading="Our"
                secondSubHeading="Customers"
                description="Family-owned since 1997, delivering excellence in transportation across the nation."
              />
            }
          >
            <Route index element={<Customers />} />
          </Route>
          <Route
            path="/contact"
            element={
              <CommonSubHeader
                heading="Contact"
                subHeading="Our"
                secondSubHeading="Contact"
                description="Family-owned since 1997, delivering excellence in transportation across the nation."
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
