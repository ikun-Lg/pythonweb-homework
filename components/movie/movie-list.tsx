import { MovieCard } from "./movie-card";

interface Movie {
  id: number;
  movieId: string;
  name: string;
  alias: string | null;
  cover: string;
  directors: string[] | string;
  actors: string[] | string;
  genres: string;
  doubanScore: number;
  doubanVotes: number;
  year: number;
}

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
} 