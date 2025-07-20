'use client';

import { useState } from 'react';
import { JokeCard, JokeData } from '@/components';

// Sample jokes data
const sampleJokes: JokeData[] = [
  {
    id: '1',
    setup: 'Why don\'t scientists trust atoms?',
    punchline: 'Because they make up everything!',
    category: 'Science',
    rating: 4.8,
    isFavorite: false,
  },
  {
    id: '2',
    setup: 'What do you call a fake noodle?',
    punchline: 'An impasta!',
    category: 'Food',
    rating: 4.2,
    isFavorite: true,
  },
  {
    id: '3',
    setup: 'Why did the scarecrow win an award?',
    punchline: 'He was outstanding in his field!',
    category: 'Agriculture',
    rating: 4.5,
    isFavorite: false,
  },
  {
    id: '4',
    setup: 'Why don\'t eggs tell jokes?',
    punchline: 'They\'d crack each other up!',
    category: 'Food',
    rating: 3.9,
    isFavorite: false,
  },
  {
    id: '5',
    setup: 'What do you call a bear with no teeth?',
    punchline: 'A gummy bear!',
    category: 'Animals',
    rating: 4.1,
    isFavorite: false,
  },
  {
    id: '6',
    setup: 'Why did the math book look so sad?',
    punchline: 'Because it had too many problems!',
    category: 'Education',
    rating: 4.3,
    isFavorite: true,
  },
];

export default function JokesPage() {
  const [jokes, setJokes] = useState<JokeData[]>(sampleJokes);

  const handleFavoriteToggle = (id: string) => {
    setJokes(prevJokes =>
      prevJokes.map(joke =>
        joke.id === id ? { ...joke, isFavorite: !joke.isFavorite } : joke
      )
    );
  };

  const handleShare = (id: string) => {
    const joke = jokes.find(j => j.id === id);
    if (joke) {
      const shareText = `${joke.setup}\n\n${joke.punchline}`;
      if (navigator.share) {
        navigator.share({
          title: 'Daily Joke',
          text: shareText,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(shareText);
        alert('Joke copied to clipboard!');
      }
    }
  };

  const favoriteJokes = jokes.filter(joke => joke.isFavorite);
  const allJokes = jokes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Daily Jokes</h1>
              <p className="text-gray-600 mt-1">Your daily dose of laughter</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {favoriteJokes.length} favorites
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">{allJokes.length}</div>
            <div className="text-sm text-gray-600">Total Jokes</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-red-500">{favoriteJokes.length}</div>
            <div className="text-sm text-gray-600">Favorites</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-yellow-500">
              {(allJokes.reduce((sum, joke) => sum + (joke.rating || 0), 0) / allJokes.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
        </div>

        {/* Jokes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJokes.map((joke) => (
            <JokeCard
              key={joke.id}
              {...joke}
              onFavoriteToggle={handleFavoriteToggle}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* Empty State */}
        {allJokes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">😢</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jokes available</h3>
            <p className="text-gray-600">Check back later for fresh jokes!</p>
          </div>
        )}
      </main>
    </div>
  );
} 