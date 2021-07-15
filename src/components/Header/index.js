import React from "react";
import { Logo } from "../Logo";
import { Link } from "gatsby";
import { HeaderWrapper } from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
    </HeaderWrapper>
  );
}
