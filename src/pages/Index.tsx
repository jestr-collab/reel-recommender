import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MovieRow } from "@/components/MovieRow";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";

const Index = () => {
  const trendingMovies = [
    { id: 1, title: "Velocity Strike", image: movie1 },
    { id: 2, title: "Eternal Hearts", image: movie2 },
    { id: 3, title: "Neon Pulse", image: movie3 },
    { id: 4, title: "Shadow's Edge", image: movie4 },
    { id: 5, title: "Laugh Riot", image: movie5 },
    { id: 6, title: "Mystic Realms", image: movie6 },
  ];

  const actionMovies = [
    { id: 7, title: "Velocity Strike", image: movie1 },
    { id: 8, title: "Neon Pulse", image: movie3 },
    { id: 9, title: "Shadow's Edge", image: movie4 },
    { id: 10, title: "Mystic Realms", image: movie6 },
    { id: 11, title: "Eternal Hearts", image: movie2 },
    { id: 12, title: "Laugh Riot", image: movie5 },
  ];

  const dramaMovies = [
    { id: 13, title: "Eternal Hearts", image: movie2 },
    { id: 14, title: "Shadow's Edge", image: movie4 },
    { id: 15, title: "Velocity Strike", image: movie1 },
    { id: 16, title: "Laugh Riot", image: movie5 },
    { id: 17, title: "Neon Pulse", image: movie3 },
    { id: 18, title: "Mystic Realms", image: movie6 },
  ];

  const comedyMovies = [
    { id: 19, title: "Laugh Riot", image: movie5 },
    { id: 20, title: "Neon Pulse", image: movie3 },
    { id: 21, title: "Eternal Hearts", image: movie2 },
    { id: 22, title: "Mystic Realms", image: movie6 },
    { id: 23, title: "Velocity Strike", image: movie1 },
    { id: 24, title: "Shadow's Edge", image: movie4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="relative z-10 -mt-24 md:-mt-32">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Action Thrillers" movies={actionMovies} />
        <MovieRow title="Emotional Dramas" movies={dramaMovies} />
        <MovieRow title="Comedy Hits" movies={comedyMovies} />
      </div>
    </div>
  );
};

export default Index;
