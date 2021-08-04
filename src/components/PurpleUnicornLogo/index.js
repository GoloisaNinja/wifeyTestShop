import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function PurpleUnicornLogo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "purpleUnicorn.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return <Img fixed={data.file.childImageSharp.fixed} alt="unicorn logo" />;
}
