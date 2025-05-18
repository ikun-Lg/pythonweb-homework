import HeroSection from '@/components/home/hero-section';
import MovieRowsSection from '@/components/home/movie-rows-section';

export default function Home() {
  return (
    <div className="relative pb-8">
      <HeroSection />
      <MovieRowsSection />
    </div>
  );
}