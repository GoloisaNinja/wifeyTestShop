import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  HeroWrapper,
  HeroContentWrapper,
  HeroTitleText,
  HeroSubText,
} from "./styles";

export function HeroTile({ image, altText, titleText, subText, overlayColor }) {
  return (
    <HeroWrapper>
      <GatsbyImage image={image} alt={altText} />
      <HeroContentWrapper overlayColor={overlayColor}>
        <div>
          <HeroTitleText>{titleText}</HeroTitleText>
          <HeroSubText>{subText}</HeroSubText>
        </div>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}
