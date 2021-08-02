import styled, { css } from "styled-components";

export const LineStyle = css`
  content: "";
  position: absolute;
  height: 6px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
`;

export const HamburgerButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin-bottom: 5px;
  transition: all 0.5s ease-in-out;
  z-index: 4;
  &.engaged {
    transform: translateX(50px);
    //transform: rotate(180deg);
    background: transparent;
  }
`;
export const Hamburger = styled.div`
  width: 30px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  background-color: #ff00f7;
  transition: all 0.5s ease-in-out;
  &.engaged {
    //transform: translateX(0px);
    background: transparent;
    &::before {
      transform: rotate(45deg) translate(-35px, 35px);
      width: 40px;
      background-color: #ff00f7;
    }
    &::after {
      transform: rotate(-45deg) translate(-35px, -35px);
      background-color: #ff00f7;
    }
  }
  &::before {
    ${LineStyle};
    width: 20px;
    background-color: #43cfd9;
    transform: translateY(-12px);
  }
  &::after {
    ${LineStyle};
    width: 40px;
    background-color: #9905f5;
    transform: translateY(12px);
  }
`;
