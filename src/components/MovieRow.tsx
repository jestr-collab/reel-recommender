import { MovieCard } from "./MovieCard";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export const MovieRow = ({ title, movies }: MovieRowProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 3,
  });
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

  return (
    <div 
      className="mb-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-foreground text-xl md:text-2xl font-semibold mb-4 px-4 md:px-12">
        {title}
      </h2>
      <div className="relative px-4 md:px-12">
        {canScrollPrev && isHovered && (
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        )}
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2">
            {movies.map((movie) => (
              <div key={movie.id} className="flex-[0_0_150px] md:flex-[0_0_200px] lg:flex-[0_0_250px]">
                <MovieCard title={movie.title} image={movie.image} />
              </div>
            ))}
          </div>
        </div>

        {canScrollNext && isHovered && (
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        )}
      </div>
    </div>
  );
};
