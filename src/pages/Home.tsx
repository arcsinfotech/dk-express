import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import WhoWeAre from "./WhoWeAre";
import Usmap from "./sections/Usmap";
import Footer from "./sections/Footer";
import Quote from "./sections/Quote";
import OurServices from "./sections/OurServices";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Cta />
      <WhoWeAre />
      <OurServices />
      <Usmap />
      <Quote />
      <Footer />
    </div>
  );
}
