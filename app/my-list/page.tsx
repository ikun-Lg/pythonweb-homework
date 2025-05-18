"use client"

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trendingNow } from '@/lib/movie-data';

export default function MyListPage() {
  const [savedItems] = useState(trendingNow.slice(0, 5));

  return (
    <div className="pt-24 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">我的片单</h1>
        
        {savedItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {savedItems.map((item) => (
              <div key={item.id} className="aspect-[2/3] relative group">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <span className="text-green-500">{item.matchPercentage}% 匹配</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-3 rounded-full bg-accent mb-4">
              <Plus className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold mb-2">您的片单还是空的</h2>
            <p className="text-muted-foreground mb-4">
              将电影和电视剧添加到片单中，方便随时查看想要观看的内容。
            </p>
            <Button>浏览内容</Button>
          </div>
        )}
      </div>
    </div>
  );
}