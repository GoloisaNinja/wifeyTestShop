import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnailWrapper } from "./styles";

export function ImageThumbnail({ image, isActive, onClick }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
      <GatsbyImage image={image.gatsbyImageData} alt="make dynmaic later" />
    </ImageThumbnailWrapper>
  );
}
