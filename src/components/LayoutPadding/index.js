import React from "react";
import { Header } from "../Header";
import { LayoutWrapper } from "./styles";

const LayoutPadding = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};
export { LayoutPadding };
