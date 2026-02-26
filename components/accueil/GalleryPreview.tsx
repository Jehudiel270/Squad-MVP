import React from "react";
import { Eye } from "lucide-react";

interface GalleryPreviewProps {
  images: string[];
}

export function GalleryPreview({ images }: GalleryPreviewProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Moments inoubliables
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="event"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div
                className="
                  absolute inset-0
                  bg-base-content/40
                  backdrop-blur-sm
                  opacity-0 group-hover:opacity-100
                  flex items-center justify-center
                  transition-all duration-300
"
              >
                <Eye size={28} className="text-base-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
