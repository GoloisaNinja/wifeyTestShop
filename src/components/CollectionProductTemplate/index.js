import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { CollectionQuantityAdder } from "../CollectionQuantityAdder";
import { useLocation } from "@reach/router";
import queryString from "query-string";
import { ImageGallery, GradientH2 } from "../../components";
import useReturnMaxInventory from "../../utils/maxInventory";
import { ProductText, Grid, SelectWrapper, Price } from "./styles";

export function CollectionProductTemplate({
  productShopifyId,
  productStorefrontId,
  variants,
  images,
  handle,
  handleVariantQueryStrings,
  variantQueryStrings,
  updateCollectionProductMap,
  confirmedStatus,
}) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [maxInventory, setMaxInventory] = useState(0);
  const { search } = useLocation();
  const determineMaxInventoryOfVariant = useReturnMaxInventory();

  const parsedVariantId = queryString.parse(search);
  const variantId = decodeURIComponent(parsedVariantId[handle]);
  const individualProductBaseStateObject = { quantity: 1, confirmed: false };

  const handleIndividualProductDetails = ({ quantity, confirmed }) => {
    updateCollectionProductMap({
      storefrontId: productStorefrontId,
      variantId: selectedVariant?.id,
      productTitle: product?.title,
      variantTitle: selectedVariant?.title,
      quantity: parseInt(quantity, 10),
      confirmed,
    });
  };

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    setMaxInventory(determineMaxInventoryOfVariant(newVariant, variants));
    handleVariantQueryStrings(handle, newVariant.id);
    handleIndividualProductDetails(individualProductBaseStateObject);
  };

  useEffect(() => {
    const idResult = async () => {
      try {
        const result = await getProductById(productStorefrontId);
        setProduct(result);
        let variant = result.variants[0];
        result.variants.forEach(v => {
          if (v.id === variantId) {
            variant = v;
          }
        });
        setSelectedVariant(variant);
        setMaxInventory(determineMaxInventoryOfVariant(variant, variants));
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
    variants,
    determineMaxInventoryOfVariant,
  ]);

  useEffect(() => {
    const updatedQs = queryString.stringify(variantQueryStrings);
    if (Object.keys(updatedQs).length > 0) {
      // navigate(`${origin}${pathname}?${updatedQs}`, {
      //   replace: true,
      // });
      window.history.replaceState("", "", `?${updatedQs}`);
    }
  }, [variantQueryStrings]);

  return (
    <Grid>
      <div>
        <ProductText>
          <GradientH2
            $font={`'Abril Fatface', cursive`}
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
            {!!selectedVariant && (
              <>
                <Price>
                  ${" "}
                  {selectedVariant.price.amount.split(".")[1].length < 2
                    ? selectedVariant.price.amount + "0"
                    : selectedVariant.price.amount}{" "}
                  USD
                </Price>
                <CollectionQuantityAdder
                  variantId={selectedVariant.id}
                  confirmed={confirmedStatus}
                  available={selectedVariant.available}
                  maxInventory={maxInventory}
                  handleIndividualProductDetails={
                    handleIndividualProductDetails
                  }
                />
              </>
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
