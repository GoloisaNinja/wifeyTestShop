import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ProductGrid } from "../ProductGrid";
import { GradientH1 } from "../GradientText";
import { FeaturedWrapper, FeaturedTitle } from "./styles";

export function Featured() {
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection(filter: { title: { eq: "Featured Items" } }) {
        edges {
          node {
            products {
              createdAt
              description
              handle
              id
              shopifyId
              storefrontId
              title
              images {
                gatsbyImageData
                id
                src
              }
              priceRangeV2 {
                minVariantPrice {
                  amount
                }
              }
              variants {
                compareAtPrice
              }
            }
          }
        }
      }
    }
  `);
  const featuredProducts = data.allShopifyCollection.edges.map(
    ({ node }) => node
  );
  return (
    <FeaturedWrapper>
      <FeaturedTitle>
        <GradientH1
          font={"'Abril Fatface', cursive"}
          color={"#f700ff, #7000a1"}
        >
          Shop our Featured Items
        </GradientH1>
        <p>Our Style CEO developed this quick shop collection!</p>
      </FeaturedTitle>
      <ProductGrid products={featuredProducts[0].products} />
    </FeaturedWrapper>
  );
}
