import { MovieCard } from "./MovieCard";

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
  return (
    <div className="mb-8">
      <h2 className="text-foreground text-xl md:text-2xl font-semibold mb-4 px-4 md:px-12">
        {title}
      </h2>
      <div className="relative px-4 md:px-12">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[150px] md:min-w-[200px] lg:min-w-[250px]">
              <MovieCard title={movie.title} image={movie.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
