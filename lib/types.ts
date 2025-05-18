export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  logoUrl: string | null;
  year: number;
  maturityRating: string;
  duration: string;
  matchPercentage: number;
  genres: string[];
  type: 'Movie' | 'TV Show';
}