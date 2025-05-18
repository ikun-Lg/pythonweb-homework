import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface MovieCardProps {
  movie: {
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
  };
}

export function MovieCard({ movie }: MovieCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleClick = () => {
    localStorage.setItem('currentMovie', JSON.stringify(movie));
  };

  return (
    <Link href="/movies/detail" onClick={handleClick}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[2/3]">
          <img
            src={movie.cover}
            alt={movie.name}
            referrerPolicy="no-referrer"
            className={`object-cover transition-opacity duration-300`}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{movie.name}</h3>
          {movie.alias && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {movie.alias}
            </p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{movie.year}</Badge>
            <Badge variant="secondary">{movie.doubanScore}分</Badge>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {(typeof movie.genres === 'string' 
              ? movie.genres.split("/")
              : movie.genres)
              .slice(0, 2)
              .map((genre) => (
                <Badge key={genre} variant="outline" className="text-xs">
                  {genre}
                </Badge>
              ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
 