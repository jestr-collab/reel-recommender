import { useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
}

export const MovieCard = ({ title, image }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 transition-all duration-300">
          <h3 className="text-foreground font-semibold text-sm mb-2">{title}</h3>
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-3">
              <Play className="w-4 h-4 mr-1 fill-current" />
              Play
            </Button>
            <Button size="sm" variant="secondary" className="bg-secondary/80 hover:bg-secondary text-secondary-foreground h-8 w-8 p-0">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
