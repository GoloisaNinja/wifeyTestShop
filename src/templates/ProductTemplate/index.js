import React from "react";
import { graphql, navigate } from "gatsby";
import {
  LayoutPadding,
  ImageGallery,
  Button,
  GradientH2,
} from "../../components";
import { ProductText } from "./styles";

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
      shopifyId
      title
      images {
        id
        gatsbyImageData(placeholder: "BLURRED")
      }
    }
  }
`;

export default function ProductTemplate({ data }) {
  return (
    <LayoutPadding>
      <Button onClick={() => navigate(-1)}>GO BACK</Button>
      <ProductText>
        <GradientH2
          font={`'Abril Fatface', cursive`}
          color={`#ff00f7, #035efc`}
        >
          {data.shopifyProduct.title}
        </GradientH2>
        <p>{data.shopifyProduct.description}</p>
      </ProductText>
      <div>
        <ImageGallery images={data.shopifyProduct.images} />
      </div>
    </LayoutPadding>
  );
}
