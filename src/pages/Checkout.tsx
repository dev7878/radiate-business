import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import PayPalCheckout from '../components/PayPalCheckout';
import { MapPin } from 'lucide-react';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
}

const provinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
  'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 
  'Prince Edward Island', 'Quebec', 'Saskatchewan'
];

export default function Checkout() {
  const { items, total } = useCartStore();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-400">Add some items to your cart to proceed with checkout</p>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Province</label>
                  <select
                    name="province"
                    value={shippingInfo.province}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                  >
                    <option value="">Select Province</option>
                    {provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                    pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                    placeholder="A1A 1A1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white/5 p-6 rounded-lg border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-purple-500/20 mt-6 pt-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total (CAD)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <PayPalCheckout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}