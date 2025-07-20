'use client';

import Image from "next/image";
import Link from "next/link";
import { JokeCard } from "@/components";

// Sample jokes for the homepage
const featuredJokes = [
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
    isFavorite: false,
  },
  {
    id: '3',
    setup: 'Why did the scarecrow win an award?',
    punchline: 'He was outstanding in his field!',
    category: 'Agriculture',
    rating: 4.5,
    isFavorite: false,
  },
];

export default function Home() {
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
            <Link
              href="/jokes"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium"
            >
              View All Jokes
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Daily Jokes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your daily dose of laughter with our collection of witty humor and funny stories. 
            Brighten your day with fresh jokes delivered every day.
          </p>
        </div>

        {/* Featured Jokes */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Featured Jokes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredJokes.map((joke) => (
              <JokeCard
                key={joke.id}
                {...joke}
                onFavoriteToggle={(id) => console.log('Toggle favorite:', id)}
                onShare={(id) => console.log('Share joke:', id)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/jokes"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium text-lg"
          >
            Explore More Jokes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose Daily Jokes?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fresh Content</h4>
              <p className="text-gray-600">New jokes added daily to keep you laughing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Save Favorites</h4>
              <p className="text-gray-600">Mark your favorite jokes for easy access</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Sharing</h4>
              <p className="text-gray-600">Share jokes with friends and family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
