import { graphql } from "gatsby";

export const productFields = graphql`
  fragment CollectionProductFields on ShopifyProduct {
    shopifyId
    storefrontId
    description
    title
    handle
    variants {
      id
      storefrontId
      image {
        src
        gatsbyImageData
      }
    }
  }
`;
