import React from "react";
import { OverlayWrapper } from "../Overlay";
import { MenuWrapper } from "./styles";

export function MainMenu() {
  return (
    <>
      <MenuWrapper id="menu-drawer">
        <div>
          <p>Crackin Menu Shit</p>
        </div>
      </MenuWrapper>
      <OverlayWrapper id="menu-overlay" zvalue={"1"}></OverlayWrapper>
    </>
  );
}
