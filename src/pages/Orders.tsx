import React from 'react';
import { Package, Clock, DollarSign, Truck } from 'lucide-react';

// In a real app, this would come from an API
const orders = [
  {
    id: 'ORD-001',
    date: '2024-03-15',
    status: 'In Production',
    total: 299.99,
    items: [
      {
        name: 'Custom Name Neon',
        details: '24" x 12", Pink',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-03-10',
    status: 'Shipped',
    total: 449.99,
    tracking: 'USP1234567890',
    items: [
      {
        name: 'Lightning Bolt',
        details: '36" x 24", Blue',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }
];

export default function Orders() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <div className="flex gap-4">
            <select className="bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500">
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="production">In Production</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white/5 rounded-lg border border-purple-500/20 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{order.id}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-purple-500/10 px-3 py-1 rounded-full text-purple-500 text-sm font-medium">
                    {order.status}
                  </div>
                </div>

                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.details}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold">${order.total}</span>
                  </div>
                  {order.tracking && (
                    <div className="flex items-center gap-2 text-sm text-purple-500">
                      <Truck className="h-4 w-4" />
                      <span>{order.tracking}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-purple-500/5 p-4 flex justify-between items-center">
                <button className="text-purple-500 hover:text-purple-400 transition-colors text-sm font-medium">
                  View Details
                </button>
                {order.status === 'Shipped' && (
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    Track Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Orders Yet</h2>
            <p className="text-gray-400">
              When you place an order, it will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}