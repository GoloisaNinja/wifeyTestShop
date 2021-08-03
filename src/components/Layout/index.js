import React from "react";
import { Header } from "../Header";
import { LayoutWrapper } from "./styles";

const Layout = ({ children, paddingValues }) => {
  return (
    <>
      <Header />
      <LayoutWrapper paddingValues={paddingValues}>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};
export { Layout };
