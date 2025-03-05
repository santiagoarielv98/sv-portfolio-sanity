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
      width: 1200,
      height: 675,
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
              className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={urlFor(image).url()!}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="bg-opacity-0 hover:bg-opacity-20 absolute inset-0 -z-10 flex items-center justify-center bg-black transition-opacity">
                <span className="text-white opacity-0 transition-opacity hover:opacity-100">
                  Ver imagen
                </span>
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
