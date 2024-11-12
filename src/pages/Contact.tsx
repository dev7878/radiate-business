import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <p className="text-gray-400 mb-8">
              Have questions about our neon signs? We're here to help! Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">hello@neondreams.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}