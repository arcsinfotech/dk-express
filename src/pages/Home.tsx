import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import WhoWeAre from "./WhoWeAre";
import Usmap from "./sections/Usmap";
import Footer from "./sections/Footer";

export default function Home() {

  return (
    <div className="w-full h-full">
      <Hero />
      <Cta />
      <WhoWeAre />
      <Usmap />
      <Footer />
    </div>
  );
}