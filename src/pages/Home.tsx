import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Designs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular neon signs, handcrafted with love and guaranteed to make a statement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your own custom neon sign. Our designers will work with you to bring your vision to life.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold">
            Start Custom Order
          </button>
        </div>
      </section>
    </div>
  );
}