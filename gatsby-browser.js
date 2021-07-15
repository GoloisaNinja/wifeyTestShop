import React from "react";
import { GlobalStyle } from "./src/components/globalStyles";
import { ProductContextProvider } from "./src/context/ProductContext";

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>{element}</ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
