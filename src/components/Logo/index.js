import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Logo() {
  return (
    <StaticImage
      src="../../images/shopicon.png"
      placeholder="blurred"
      layout="fixed"
      width={250}
      alt="shop logo"
    />
  );
}
