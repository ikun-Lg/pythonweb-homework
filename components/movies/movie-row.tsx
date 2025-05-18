"use client"

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './movie-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Movie } from '@/lib/types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  isLarge?: boolean;
}

export default function MovieRow({ title, movies, isLarge = false }: MovieRowProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = scrollLeft - clientWidth / 1.5;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = scrollLeft + clientWidth / 1.5;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const cardWidth = isLarge ? 'w-[250px] md:w-[280px] lg:w-[320px]' : 'w-[160px] md:w-[180px] lg:w-[220px]';
  const cardHeight = isLarge ? 'h-[141px] md:h-[158px] lg:h-[180px]' : 'h-[225px] md:h-[255px] lg:h-[310px]';

  return (
    <div className="px-4 md:px-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      <div className="relative group">
        {/* Left navigation arrow */}
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full max-h-[180px] w-12 rounded-none bg-background/30 hover:bg-background/60 transition-opacity duration-300",
            !showLeftArrow && "opacity-0 pointer-events-none",
            showLeftArrow ? "opacity-0 group-hover:opacity-100" : "opacity-0"
          )}
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        {/* Movie row */}
        <div 
          ref={rowRef}
          className="flex overflow-x-scroll space-x-2 md:space-x-4 scrollbar-hide py-2 pl-1"
          onScroll={handleScroll}
        >
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              className={`${cardWidth} ${cardHeight} flex-shrink-0`}
              isLarge={isLarge}
            />
          ))}
        </div>
        
        {/* Right navigation arrow */}
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full max-h-[180px] w-12 rounded-none bg-background/30 hover:bg-background/60 transition-opacity duration-300",
            !showRightArrow && "opacity-0 pointer-events-none",
            showRightArrow ? "opacity-0 group-hover:opacity-100" : "opacity-0"
          )}
          onClick={scrollRight}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}