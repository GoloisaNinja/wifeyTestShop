import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnail } from "./ImageThumbnail";
import { ImageGalleryWrapper } from "./styles";

export function ImageGallery({ images }) {
  return (
    <ImageGalleryWrapper>
      <div>
        <GatsbyImage
          image={images[0].gatsbyImageData}
          alt="make dynamic later"
        />
      </div>
      <div>
        {images.map(image => (
          <ImageThumbnail key={image.id} image={image.gatsbyImageData} />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
}
