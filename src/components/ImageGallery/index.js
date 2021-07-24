import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnail } from "./ImageThumbnail";
import { ImageGalleryWrapper } from "./styles";

export function ImageGallery({ images, selectedImageVariantIdSrc }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ src }) => src === selectedImageVariantIdSrc) || images[0]
  );
  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ src }) => src === selectedImageVariantIdSrc) || images[0]
    );
  }, [selectedImageVariantIdSrc, setActiveImageThumbnail, images]);
  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <GatsbyImage
          image={activeImageThumbnail.gatsbyImageData}
          alt="make dynamic later"
        />
      </div>
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            image={image}
            onClick={handleClick}
            isActive={activeImageThumbnail.id === image.id}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
}
