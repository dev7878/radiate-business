import React from 'react';
import { X, Minus, Plus, ShoppingCart as CartIcon } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <CartIcon className="h-16 w-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-gray-400">Start shopping to add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-4 border-b border-purple-500/20">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-purple-500">${item.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
              className="p-1 hover:bg-purple-500/10 rounded"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-purple-500/10 rounded"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="p-2 hover:bg-purple-500/10 rounded"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
      <div className="mt-6">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}