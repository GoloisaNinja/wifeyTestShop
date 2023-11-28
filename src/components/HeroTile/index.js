import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  HeroWrapper,
  HeroContentWrapper,
  HeroTitleText,
  HeroSubText,
} from "./styles";

export function HeroTile({ image, altText, titleText, subText, overlaycolor }) {
  return (
    <HeroWrapper>
      <GatsbyImage image={image} alt={altText} />
      <HeroContentWrapper $overlaycolor={overlaycolor}>
        <div>
          <HeroTitleText>{titleText}</HeroTitleText>
          <HeroSubText>{subText}</HeroSubText>
        </div>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}
