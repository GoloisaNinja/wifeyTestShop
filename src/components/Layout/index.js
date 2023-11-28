import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutWrapper } from "./styles";

const Layout = ({ children, padding }) => {
  return (
    <>
      <Header />
      <LayoutWrapper $padding={padding}>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};
export { Layout };
