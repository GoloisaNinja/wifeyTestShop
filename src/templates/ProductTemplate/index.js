import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { navigate, useLocation } from "@reach/router";
import queryString from "query-string";
import { graphql } from "gatsby";
import {
  LayoutPadding,
  ImageGallery,
  Button,
  GradientH2,
} from "../../components";
import { ProductText, Grid, SelectWrapper } from "./styles";

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
      shopifyId
      id
      storefrontId
      title
      images {
        id
        src
        gatsbyImageData(placeholder: "BLURRED")
      }
      variants {
        id
        storefrontId
      }
    }
  }
`;

export default function ProductTemplate({ data }) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();

  const variantId = queryString.parse(search).variant;

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      { replace: true }
    );
  };
  useEffect(() => {
    const idResult = async () => {
      try {
        const result = await getProductById(data.shopifyProduct.storefrontId);
        setProduct(result);
        setSelectedVariant(
          result.variants.find(({ id }) => id === variantId) ||
            result.variants[0]
        );
      } catch (error) {
        console.log(error);
      }
    };
    idResult();
  }, [
    getProductById,
    setProduct,
    setSelectedVariant,
    data.shopifyProduct.storefrontId,
    variantId,
  ]);
  return (
    <LayoutPadding>
      <Button onClick={() => navigate(-1)}>GO BACK</Button>
      <Grid>
        <div>
          <ProductText>
            <GradientH2
              font={`'Abril Fatface', cursive`}
              color={`#ff00f7, #035efc`}
            >
              {data.shopifyProduct.title}
            </GradientH2>
            <p>{data.shopifyProduct.description}</p>
          </ProductText>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map(variant => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedImageVariantIdSrc={selectedVariant?.image.src}
            images={data.shopifyProduct.images}
          />
        </div>
      </Grid>
    </LayoutPadding>
  );
}
