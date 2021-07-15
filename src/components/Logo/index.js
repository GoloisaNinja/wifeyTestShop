import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shopicon.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 280
            quality: 80
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="shop logo"
    />
  );
}
