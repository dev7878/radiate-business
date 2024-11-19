import React from 'react';

export default function Gallery() {
  // Function to get all sign images
  const getSignImages = () => {
    const images = [];
    // In a real app, this would be dynamic. For now, we'll use 10 images
    for (let i = 1; i <= 10; i++) {
      images.push(`/signs/sign_${i}.png`);
    }
    return images;
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of custom neon signs created for clients. Each piece tells a unique story and showcases our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {getSignImages().map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <img
                src={image}
                alt={`Client Sign ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Hide the image if it fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Client Project {index + 1}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}