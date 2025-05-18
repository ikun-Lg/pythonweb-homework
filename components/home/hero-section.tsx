"use client"

import { useState, useEffect } from 'react';
import { Play, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { featuredMovies } from '@/lib/movie-data';
import Link from 'next/link';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const current = featuredMovies[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 10000); // Change hero every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate loading of hero image
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
      {/* Backdrop image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${current.backdropUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end sm:justify-center">
        <div className="container mb-20 sm:mb-0 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Logo image if available, otherwise display title */}
            {current.logoUrl ? (
              <div className="w-[16rem] sm:w-[20rem] lg:w-[30rem] mb-4">
                <img 
                  src={current.logoUrl} 
                  alt={current.title} 
                  className="w-full"
                />
              </div>
            ) : (
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                {current.title}
              </h1>
            )}
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-green-500 font-medium">{current.matchPercentage}% 匹配</span>
              <span>{current.year}</span>
              <span className="border border-muted-foreground/50 px-1 text-xs">{current.maturityRating}</span>
              <span>{current.duration}</span>
              <span className="px-1.5 py-0.5 bg-red-600/90 text-white text-xs rounded">HD</span>
            </div>
            
            <p className="text-base sm:text-lg text-foreground/90 line-clamp-3 mb-6">
              {current.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2 bg-white hover:bg-white/90 text-black font-medium" size="lg">
                <Play className="h-5 w-5 fill-black" /> 播放
              </Button>
              <Link href={`/movies/${current.id}`}>
                <Button variant="secondary" className="gap-2 bg-gray-600/70 text-white hover:bg-gray-600/90" size="lg">
                  <Info className="h-5 w-5" /> 更多信息
                </Button>
              </Link>
              <Button variant="outline" size="icon" className="bg-background/20 border-none hover:bg-background/40">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}