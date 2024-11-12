import React, { useState } from 'react';
import { ShoppingCart, Sparkles, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import Cart from './Cart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              NeonDreams
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/shop" className="hover:text-purple-400 transition-colors">Shop</Link>
              <Link to="/custom" className="hover:text-purple-400 transition-colors">Custom Orders</Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
              <button 
                className="relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="h-6 w-6 hover:text-purple-400 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <Link to="/" className="block px-3 py-2 hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/shop" className="block px-3 py-2 hover:text-purple-400 transition-colors">Shop</Link>
            <Link to="/custom" className="block px-3 py-2 hover:text-purple-400 transition-colors">Custom Orders</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      )}

      {/* Cart sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-black/95 border-l border-purple-500/20">
            <div className="flex justify-between items-center p-4 border-b border-purple-500/20">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <Cart />
          </div>
        </div>
      )}
    </nav>
  );
}