import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function BlueUnicornLogo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "blueUnicorn.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="pretty blue unicorn logo"
    />
  );
}
