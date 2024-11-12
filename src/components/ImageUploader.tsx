import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
}

export default function ImageUploader({ images, onImagesChange, maxImages = 3 }: ImageUploaderProps) {
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }

    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          onImagesChange([...images, result]);
        };
        reader.readAsDataURL(file);
      }
    });
  }, [images, onImagesChange, maxImages]);

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={image}
              alt={`Reference ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        {images.length < maxImages && (
          <label className="border-2 border-dashed border-purple-500/20 rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-purple-500/40 transition-colors">
            <Upload className="h-8 w-8 text-purple-500 mb-2" />
            <span className="text-sm text-gray-400">Upload Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              multiple={images.length + 1 < maxImages}
            />
          </label>
        )}
      </div>
      <p className="text-sm text-gray-400">
        Upload up to {maxImages} reference images (optional)
      </p>
    </div>
  );
}