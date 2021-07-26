import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { navigate, useLocation } from "@reach/router";
import queryString from "query-string";
import { ImageGallery, GradientH2 } from "../../components";
import { ProductText, Grid, SelectWrapper } from "./styles";

export function CollectionProductTemplate({
  productShopifyId,
  productStorefrontId,
  images,
  handle,
}) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();

  const variantId = queryString.parse(search).handle;

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?${handle}=${encodeURIComponent(newVariant.id)}`,
      { replace: true }
    );
  };
  useEffect(() => {
    const idResult = async () => {
      try {
        const result = await getProductById(productStorefrontId);
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
    productStorefrontId,
    variantId,
  ]);
  return (
    <Grid>
      <div>
        <ProductText>
          <GradientH2
            font={`'Abril Fatface', cursive`}
            color={`#ff00f7, #035efc`}
          >
            {product?.title}
          </GradientH2>
          <p>{product?.description}</p>
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
          selectedImageVariantId={selectedVariant?.id}
          selectedImageVariantIdSrc={selectedVariant?.image.src}
          images={images}
        />
      </div>
    </Grid>
  );
}
