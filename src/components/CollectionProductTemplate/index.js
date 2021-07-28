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
  handleVariantQueryStrings,
  variantQueryStrings,
}) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();

  const parsedVariantId = queryString.parse(search);
  const variantId = decodeURIComponent(parsedVariantId[handle]);
  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    handleVariantQueryStrings(handle, newVariant.id);
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
    productStorefrontId,
    variantId,
    setSelectedVariant,
  ]);
  useEffect(() => {
    const updatedQs = queryString.stringify(variantQueryStrings);
    if (Object.keys(updatedQs).length > 0) {
      navigate(`${origin}${pathname}?${updatedQs}`, {
        replace: true,
      });
    }
  }, [selectedVariant]);
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
