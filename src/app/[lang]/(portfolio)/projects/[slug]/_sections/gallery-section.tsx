import React from "react";
import type { ProjectDetailQueryResult } from "../../../../../../../sanity.types";
import Image from "next/image";

type Props = {
  gallery: NonNullable<ProjectDetailQueryResult["project"]>["gallery"];
};

const GallerySection = ({ gallery }: Props) => {
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
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={image as unknown as string}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
