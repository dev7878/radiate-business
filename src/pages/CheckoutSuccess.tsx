import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-400 mb-8">
          Your order has been successfully placed. You will receive a confirmation email shortly with your order details.
        </p>
        <Link 
          to="/"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}