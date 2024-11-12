import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';

interface FormData {
  text: string;
  size: string;
  color: string;
  style: string;
  mounting: string;
  referenceImages: string[];
}

export default function Custom() {
  const [formData, setFormData] = useState<FormData>({
    text: '',
    size: 'medium',
    color: '#ff00ff',
    style: 'script',
    mounting: 'wall',
    referenceImages: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Custom Neon Sign</h1>
          <p className="text-gray-400">
            Create your perfect neon sign. Fill out the form below and we'll bring your vision to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2">Your Text</label>
            <input
              type="text"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your text here"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            >
              <option value="small">Small (up to 24")</option>
              <option value="medium">Medium (24-48")</option>
              <option value="large">Large (48"+ )</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <input
              type="color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full h-12 bg-white/5 border border-purple-500/20 rounded-lg p-1 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Style</label>
            <select
              value={formData.style}
              onChange={(e) => setFormData({ ...formData, style: e.target.value })}
              className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            >
              <option value="script">Script</option>
              <option value="block">Block Letters</option>
              <option value="handwritten">Handwritten</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mounting Option</label>
            <select
              value={formData.mounting}
              onChange={(e) => setFormData({ ...formData, mounting: e.target.value })}
              className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            >
              <option value="wall">Wall Mount</option>
              <option value="hanging">Hanging</option>
              <option value="standing">Free Standing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Reference Images</label>
            <ImageUploader
              images={formData.referenceImages}
              onImagesChange={(images) => setFormData({ ...formData, referenceImages: images })}
              maxImages={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
}