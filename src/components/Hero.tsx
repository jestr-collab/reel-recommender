import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-movie.jpg";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Cosmic Odyssey
          </h1>
          <p className="text-base md:text-lg text-foreground/90 mb-6 line-clamp-3">
            An epic journey through the stars where a crew of unlikely heroes must save humanity 
            from an ancient cosmic threat. Stunning visuals meet heart-pounding action in this 
            sci-fi masterpiece.
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
  );
};
