"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { getGenreList, getLikeList, addLikeGenres, editLikeGenres, deleteLikeGenres } from "@/app/api/user";

interface Genre {
  id: number;
  name: string;
}

export default function PreferencesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // 获取所有电影类型
        const genreRes:any = await getGenreList();
        if (genreRes.code === 0) {
          setGenres(genreRes.data);
        }

        // 获取用户已选择的类型
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (userInfo.userId) {
          const likeRes:any = await getLikeList({
            current: 1,
            pageSize: 100,
            userId: userInfo.userId,
          });
          if (likeRes.code === 0) {
            setSelectedGenres(likeRes.data.records.map(record => record.genreId));
          }
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "获取数据失败",
          description: "请稍后重试",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
      if (!userInfo.userId) {
        toast({
          variant: "destructive",
          title: "保存失败",
          description: "请先登录",
        });
        return;
      }

      // 获取用户当前喜欢的类型
      const likeRes = await getLikeList({
        current: 1,
        pageSize: 100,
        userId: userInfo.userId,
      });

      if (likeRes.code === 0) {
        const currentGenres = likeRes.data.records.map(record => record.genreId);
        
        // 需要添加的类型
        const toAdd = selectedGenres.filter(id => !currentGenres.includes(id));
        if (toAdd.length > 0) {
          await addLikeGenres({
            userId: userInfo.userId,
            likeGenreIds: toAdd,
          });
        }

        // 需要删除的类型
        const toDelete = currentGenres.filter(id => !selectedGenres.includes(id));
        if (toDelete.length > 0) {
          await deleteLikeGenres({
            userId: userInfo.userId,
            genreIds: toDelete,
          });
        }

        toast({
          title: "保存成功",
          description: "您的偏好设置已更新",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "保存失败",
        description: "请稍后重试",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl py-24">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">偏好设置</h1>
          <p className="text-muted-foreground">
            选择您喜欢的电影类型，我们将为您推荐相关内容
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <div key={genre.id} className="flex items-center space-x-2">
              <Checkbox
                id={`genre-${genre.id}`}
                checked={selectedGenres.includes(genre.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedGenres([...selectedGenres, genre.id]);
                  } else {
                    setSelectedGenres(selectedGenres.filter(id => id !== genre.id));
                  }
                }}
              />
              <label
                htmlFor={`genre-${genre.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {genre.name}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "保存中..." : "保存设置"}
          </Button>
        </div>
      </div>
    </div>
  );
} 