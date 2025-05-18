"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Play, Plus, ThumbsUp, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

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
  storyline?: string | null;
  languages?: string[] | string;
  mins?: number;
  tags?: string;
}

export default function MovieDetailClient() {
  const router = useRouter();
  const { toast } = useToast();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = localStorage.getItem('currentMovie');
    if (movieData) {
      setMovie(JSON.parse(movieData));
    } else {
      toast({
        variant: "destructive",
        title: "获取电影信息失败",
        description: "请返回重试",
      });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container py-24">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container py-24">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <h2 className="text-2xl font-bold">未找到电影信息</h2>
          <Button onClick={() => router.back()}>返回</Button>
        </div>
      </div>
    );
  }

  const genres = typeof movie.genres === 'string' ? movie.genres.split('/') : movie.genres;
  const directors = typeof movie.directors === 'string' ? movie.directors.split('/') : movie.directors || [];
  const actors = typeof movie.actors === 'string' ? movie.actors.split('/').map(actor => actor.trim()) : movie.actors || [];
  const languages = typeof movie.languages === 'string' ? movie.languages.split('/').map(lang => lang.trim()) : movie.languages || [];

  return (
    <div className="min-h-screen bg-background">
      {/* 返回按钮 */}
      <div className="container py-4 mt-16">
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          返回
        </Button>
      </div>

      {/* 背景图片 */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <img
          src={movie.cover}
          alt={movie.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 内容区域 */}
      <div className="container relative -mt-32 pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧海报 */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={movie.cover}
                alt={movie.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 右侧信息 */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{movie.name}</h1>
              {movie.alias && (
                <p className="text-xl text-muted-foreground">{movie.alias}</p>
              )}
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                播放
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Plus className="h-5 w-5" />
                收藏
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <ThumbsUp className="h-5 w-5" />
                点赞
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Share2 className="h-5 w-5" />
                分享
              </Button>
            </div>

            {/* 标签页 */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">概览</TabsTrigger>
                <TabsTrigger value="details">详情</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                {movie.storyline && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">简介</h3>
                    <p className="text-muted-foreground">{movie.storyline}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">基本信息</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">导演</p>
                      <p>{directors.join(' / ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">主演</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {actors.map((actor) => (
                          <Badge key={actor} variant="secondary">
                            {actor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">类型</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {genres.map((genre) => (
                          <Badge key={genre} variant="secondary">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {movie.languages && (
                      <div>
                        <p className="text-sm text-muted-foreground">语言</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {languages.map((lang) => (
                            <Badge key={lang} variant="secondary">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {movie.tags && (
                      <div>
                        <p className="text-sm text-muted-foreground">标签</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {movie.tags.split('/').map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">豆瓣评分</p>
                    <p className="text-2xl font-bold">{movie.doubanScore}</p>
                    <p className="text-sm text-muted-foreground">
                      {movie.doubanVotes.toLocaleString()} 人评分
                    </p>
                  </div>
                  {movie.mins && (
                    <div>
                      <p className="text-sm text-muted-foreground">片长</p>
                      <p>{movie.mins} 分钟</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">上映年份</p>
                    <p>{movie.year}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 