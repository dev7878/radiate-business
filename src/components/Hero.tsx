import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src="https://player.vimeo.com/external/437106258.sd.mp4?s=0e0855c0c3ae5c9b00f09e3adf1b9e0969e9d9d6&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Light Up Your World
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            With Custom Neon Signs
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your space with handcrafted neon signs. Perfect for homes, businesses, and events.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors text-lg font-semibold">
            <Sparkles className="h-5 w-5" />
            Shop Now
          </button>
          <button className="border border-purple-500 text-white hover:bg-purple-500/10 px-8 py-3 rounded-full transition-colors text-lg font-semibold">
            Custom Order
          </button>
        </div>
      </div>
    </div>
  );
}