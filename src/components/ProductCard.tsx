import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Product } from '../data/products';

interface ProductCardProps extends Product {}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-black/40 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-500">${price}</span>
          <button 
            onClick={() => addItem({ id, name, price, image })}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}