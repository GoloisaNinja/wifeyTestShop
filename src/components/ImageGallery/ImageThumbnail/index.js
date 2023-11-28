import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnailWrapper } from "./styles";

export function ImageThumbnail({ image, isactive, onClick }) {
  const isActiveAsStr = isactive ? "true" : "false";
  const handleClick = () => {
    onClick(image);
  };
  return (
    <ImageThumbnailWrapper onClick={handleClick} $isactive={isActiveAsStr}>
      <GatsbyImage image={image.gatsbyImageData} alt="make dynmaic later" />
    </ImageThumbnailWrapper>
  );
}
