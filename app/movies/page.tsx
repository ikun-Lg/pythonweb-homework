"use client"

import { useState, useEffect } from 'react';
import { MovieList } from '@/components/movie/movie-list';
import { MovieFilter } from '@/components/movie/movie-filter';
import { getMovieList } from '@/app/api/movie';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';


interface Filters {
  actors: string[];
  regions: string[];
  tags: string[];
}

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    actors: [],
    regions: [],
    tags: [],
  });
  const { toast } = useToast();

  const fetchMovies = async (page: number) => {
    try {
      setLoading(true);
      const res:any = await getMovieList({
        current: page,
        pageSize: 20,
        ...filters,
      });
      // console.log('[ res ] >', res)
      if (res.code === 0 && res.data) {
        setMovies(res.data.records);
        setCurrent(page);
        // 平滑滚动到顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        toast({
          variant: "destructive",
          title: "获取数据失败",
          description: res.message || "请稍后重试",
        });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast({
        variant: "destructive",
        title: "获取数据失败",
        description: "请稍后重试",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, [filters]);

  const handleFilter = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrent(1);
  };

  return (
    <div className="container py-24">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">电影</h1>
          <p className="text-muted-foreground">
            发现精彩电影
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <MovieFilter onFilter={handleFilter} />
          </div>
          <div className="md:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <>
                <MovieList movies={movies} />
                <div className="flex justify-center gap-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => fetchMovies(current - 1)}
                    disabled={current === 1 || loading}
                  >
                    上一页
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => fetchMovies(current + 1)}
                    disabled={loading}
                  >
                    下一页
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}