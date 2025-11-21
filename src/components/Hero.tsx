import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import heroCosmicOdyssey from "@/assets/hero-movie.jpg";
import heroNeonSkies from "@/assets/hero-neon-skies.jpg";
import heroShadowProtocol from "@/assets/hero-shadow-protocol.jpg";

const featuredMovies = [
  {
    id: 1,
    title: "Cosmic Odyssey",
    description: "An epic journey through the stars where a crew of unlikely heroes must save humanity from an ancient cosmic threat. Stunning visuals meet heart-pounding action in this sci-fi masterpiece.",
    image: heroCosmicOdyssey,
  },
  {
    id: 2,
    title: "Neon Skies",
    description: "In a dystopian future where corporations rule the skies, one hacker discovers a conspiracy that could change everything. A cyberpunk thriller with breathtaking visuals and intense action.",
    image: heroNeonSkies,
  },
  {
    id: 3,
    title: "Shadow Protocol",
    description: "When a deep-cover operative uncovers a shadowy conspiracy, they must race against time to expose the truth. A gripping spy thriller with non-stop suspense and unexpected twists.",
    image: heroShadowProtocol,
  },
];

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    if (isHovered) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [emblaApi, isHovered]);

  return (
    <div 
      className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div className="absolute inset-0">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="relative h-full flex items-center px-4 md:px-12">
                <div className="max-w-2xl animate-fade-in">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                    {movie.title}
                  </h1>
                  <p className="text-base md:text-lg text-foreground/90 mb-6 line-clamp-3">
                    {movie.description}
                  </p>
                  <div className="flex gap-3">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Play className="w-5 h-5 mr-2 fill-current" />
                      Play
                    </Button>
                    <Button size="lg" variant="secondary" className="bg-secondary/80 hover:bg-secondary text-secondary-foreground">
                      <Info className="w-5 h-5 mr-2" />
                      More Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {canScrollPrev && isHovered && (
        <Button
          variant="secondary"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 md:w-16 rounded-none bg-background/20 hover:bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
        </Button>
      )}

      {canScrollNext && isHovered && (
        <Button
          variant="secondary"
          size="icon"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 md:w-16 rounded-none bg-background/20 hover:bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
        </Button>
      )}
    </div>
  );
};
