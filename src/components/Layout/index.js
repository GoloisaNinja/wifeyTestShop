import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutWrapper } from "./styles";

const Layout = ({ children, paddingValues }) => {
  return (
    <>
      <Header />
      <LayoutWrapper paddingValues={paddingValues}>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};
export { Layout };
