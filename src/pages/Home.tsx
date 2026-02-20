import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import WhoWeAre from "./WhoWeAre";

export default function Home() {

  return (
    <div className="w-full h-full">
      <Hero />
      <Cta />
      <WhoWeAre />
    </div>
  );
}