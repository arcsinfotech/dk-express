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

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
