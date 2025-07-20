'use client';

import { useState } from 'react';
import { Heart, Star, Share2, Eye, EyeOff, Sparkles } from 'lucide-react';
import { JokeCardProps } from './joke-card.interface';

export default function JokeCard({
  id,
  setup,
  punchline,
  category,
  rating,
  isFavorite = false,
  onFavoriteToggle,
  onShare,
  className = '',
}: JokeCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleFavoriteToggle = () => {
    onFavoriteToggle?.(id);
  };

  const handleShare = () => {
    onShare?.(id);
  };

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {category && (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Sparkles className="w-3 h-3" />
            {category}
          </span>
        )}
        <div className="flex items-center gap-2">
          {rating !== undefined && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          )}
          <button
            onClick={handleFavoriteToggle}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isFavorite 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-400 hover:text-red-500'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-current' : 'fill-none'}`}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* Setup */}
      <div className="mb-4">
        <p className="text-lg font-medium text-gray-900 leading-relaxed">
          {setup}
        </p>
      </div>

      {/* Punchline */}
      <div className="mb-6">
        {isRevealed ? (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-400">
            <p className="text-lg font-semibold text-purple-900 leading-relaxed">
              {punchline}
            </p>
          </div>
        ) : (
          <button
            onClick={handleReveal}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            Reveal Punchline
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share</span>
        </button>

        {isRevealed && (
          <button
            onClick={handleReveal}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <EyeOff className="w-4 h-4" />
            Hide
          </button>
        )}
      </div>
    </div>
  );
} 