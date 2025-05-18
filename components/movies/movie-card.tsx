"use client"

import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Movie } from '@/lib/types';

interface MovieCardProps {
  movie: Movie;
  className?: string;
  isLarge?: boolean;
}

export default function MovieCard({ movie, className, isLarge = false }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const imageUrl = isLarge ? movie.backdropUrl : movie.posterUrl;
  
  return (
    <div 
      className={cn(
        "relative group rounded-md overflow-hidden transition-transform duration-300",
        isHovered && "scale-[1.08] z-10 shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image */}
      <img 
        src={imageUrl} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      
      {/* Hover Card with Details */}
      {isHovered && (
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <img 
            src={imageUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover opacity-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
          
          <div className="absolute inset-x-0 bottom-0 p-3 text-left">
            <div className="flex gap-1.5 mb-2">
              <Button size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-white/90">
                <Play className="h-4 w-4 fill-black text-black" />
              </Button>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/70 hover:bg-background/90 border-white/20">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Add to My List</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/70 hover:bg-background/90 border-white/20">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>I like this</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <div className="flex-grow" />
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/70 hover:bg-background/90 border-white/20">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>More Info</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <h3 className="text-sm font-medium line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center gap-2 mt-1 text-xs">
              <span className="text-green-500 font-medium">{movie.matchPercentage}%</span>
              <span className="text-xs border border-muted-foreground/40 px-1">{movie.maturityRating}</span>
              <span>{movie.duration}</span>
            </div>
            
            <div className="mt-1 flex flex-wrap gap-1">
              {movie.genres.slice(0, 3).map((genre, index) => (
                <span key={index} className="text-xs text-muted-foreground">
                  {genre}{index < Math.min(2, movie.genres.length - 1) ? ',' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}