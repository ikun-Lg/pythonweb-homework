"use client"

import { useState, useEffect } from 'react';
import { MovieList } from '@/components/movie/movie-list';
import { getRecommendedMovies } from '@/app/api/movie';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface Movie {
  id: number;
  movieId: string;
  name: string;
  alias: string | null;
  actors: string[];
  cover: string;
  directors: string[];
  doubanScore: number;
  doubanVotes: number;
  genres: string[];
  imdbId: string | null;
  languages: string[];
  mins: number;
  officialSite: string | null;
  regions: string[] | null;
  releaseDate: string | null;
  slug: string;
  storyline: string | null;
  tags: string;
  year: number;
}

interface ApiResponse {
  code: number;
  message: string;
  data: Movie[];
}

export default function RecommendationsPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        setLoading(true);
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (!userInfo.userId) {
          toast({
            variant: "destructive",
            title: "获取推荐失败",
            description: "请先登录",
          });
          return;
        }

        const res: any= await getRecommendedMovies(userInfo.userId);
        
        if (res.code === 0 && res.data) {
          setMovies(res.data);
        } else {
          toast({
            variant: "destructive",
            title: "获取推荐失败",
            description: res.message || "请稍后重试",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "获取推荐失败",
          description: "请稍后重试",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedMovies();
  }, []);

  return (
    <div className="container py-24">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">为您推荐</h1>
          <p className="text-muted-foreground">
            根据您的偏好为您精选的电影
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
} 