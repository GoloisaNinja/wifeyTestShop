import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnailWrapper } from "./styles";

export function ImageThumbnail({ image }) {
  return (
    <ImageThumbnailWrapper>
      <GatsbyImage image={image} alt="make dynmaic later" />
    </ImageThumbnailWrapper>
  );
}
