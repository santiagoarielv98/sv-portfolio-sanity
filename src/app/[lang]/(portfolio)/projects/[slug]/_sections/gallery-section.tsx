"use client";

import React, { useState } from "react";
import type { GetProjectDetailQueryResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { Maximize2 } from "lucide-react";

type Props = {
  gallery: NonNullable<GetProjectDetailQueryResult["project"]>["gallery"];
};

const GallerySection = ({ gallery }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Preparar las imágenes para el lightbox
  const slides =
    gallery?.map((image) => ({
      src: urlFor(image).url()!,
      width: 1920,
    })) || [];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-dots opacity-80" />
        <div className="pattern-grid pattern-fade-out absolute inset-0 opacity-70" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery?.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={urlFor(image).width(600).url()!}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/70">
                <div className="flex items-center justify-center gap-2 rounded-full bg-white/90 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-5 w-5 text-gray-800" />
                  <span className="text-sm font-medium text-gray-800">
                    Ver imagen
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      {gallery && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          plugins={[Zoom, Counter]}
        />
      )}
    </section>
  );
};

export default GallerySection;
