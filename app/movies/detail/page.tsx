import { Suspense } from 'react';
import MovieDetailClient from './movie-detail-client';

export default function MovieDetailPage() {
  return (
    <Suspense fallback={
      <div className="container py-24">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    }>
      <MovieDetailClient />
    </Suspense>
  );
} 