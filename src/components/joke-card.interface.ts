export interface JokeCardProps {
  id: string;
  setup: string;
  punchline: string;
  category?: string;
  rating?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onShare?: (id: string) => void;
  className?: string;
}

export interface JokeData {
  id: string;
  setup: string;
  punchline: string;
  category?: string;
  rating?: number;
  isFavorite?: boolean;
} 