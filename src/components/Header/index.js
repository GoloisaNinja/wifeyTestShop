import React from "react";
import { Logo } from "../Logo";
import { Link } from "gatsby";
import { FaShoppingBag } from "react-icons/fa";
import { MainMenu } from "../MainMenu";
import { HamburgerButton } from "../HamburgerButton";
import { HeaderWrapper } from "./styles";

export function Header() {
  return (
    <>
      <MainMenu />
      <HeaderWrapper>
        <HamburgerButton />
        <Link to="/">
          <Logo />
        </Link>
        <FaShoppingBag />
      </HeaderWrapper>
    </>
  );
}
