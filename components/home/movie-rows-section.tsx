"use client"

import { useState } from 'react';
import { 
  movieCategories, 
  trendingNow, 
  newReleases, 
  topRated, 
  actionMovies, 
  comedyMovies 
} from '@/lib/movie-data';
import MovieRow from '../movies/movie-row';

export default function MovieRowsSection() {
  return (
    <div className="relative z-10 -mt-24 space-y-8 md:space-y-12 pb-8">
      <MovieRow 
        title="正在热播" 
        movies={trendingNow} 
        isLarge={false} 
      />
      
      <MovieRow 
        title="最新上线" 
        movies={newReleases} 
        isLarge={true} 
      />
      
      <MovieRow 
        title="好评如潮" 
        movies={topRated} 
        isLarge={false} 
      />
      
      <MovieRow 
        title="动作电影" 
        movies={actionMovies} 
        isLarge={false} 
      />
      
      <MovieRow 
        title="喜剧电影" 
        movies={comedyMovies} 
        isLarge={false} 
      />
    </div>
  );
}