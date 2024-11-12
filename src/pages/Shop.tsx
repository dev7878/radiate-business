import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ['all', 'custom', 'symbols', 'quotes', 'business'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(
    product => selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Shop Neon Signs</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-500/10 hover:bg-purple-500/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 focus:outline-none focus:border-purple-500"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}