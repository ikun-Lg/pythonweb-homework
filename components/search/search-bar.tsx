"use client"

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockSearchResults } from '@/lib/movie-data';

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Handle escape key to close search
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    // Simple search simulation
    if (query.length > 2) {
      const filtered = mockSearchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for movies, TV shows..."
            className="pl-10 pr-10 w-[280px] md:w-[350px] bg-background/90"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="ml-1">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card rounded-md shadow-lg overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
          <div className="p-2">
            {results.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-3 p-2 hover:bg-accent rounded-md cursor-pointer"
              >
                <img 
                  src={item.posterUrl} 
                  alt={item.title} 
                  className="h-14 w-10 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.year} · {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}