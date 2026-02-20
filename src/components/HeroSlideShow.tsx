import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function HeroSlideShow() {
  const autoplay = useRef(
    Autoplay({
      delay: 5000, // 2 seconds
      stopOnInteraction: false, // keeps autoplay after manual drag
    })
  );

  return (
    <div className="w-[820px] p-3 h-[605px] border border-[#FFFFFF47] rounded-[26px] backdrop-blur-[60px]">
        <Carousel className="w-full h-full" opts={{ loop: true, watchDrag: false }} plugins={[autoplay.current]}>
          <CarouselContent className="h-full!">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="h-full basis-full flex items-stretch">
                <div className="w-full h-full">
                    <img
                      src={`/src/assets/images/truck${index + 1}.png`}
                      alt="Hero Slide Show"
                      className="w-full h-full object-cover rounded-[16px]"
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}