import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import WhoWeAre from "./WhoWeAre";
import Usmap from "./sections/Usmap";
import Footer from "./sections/Footer";
import Quote from "./sections/Quote";
import OurServices from "./sections/OurServices";
import Testimonials from "./sections/Testimonials";
import OurAdvantage from "./sections/OurAdvantage";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Cta />
      <WhoWeAre />
      <OurServices />
      <Usmap />
      <OurAdvantage />
      <Testimonials />
      <Quote />
      <Footer />
    </div>
  );
}
