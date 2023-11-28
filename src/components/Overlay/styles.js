import styled, { css } from "styled-components";

const OverlayStyle = ({ zvalue }) => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${props => props.$zvalue};
    background-color: #030303;
    opacity: 0.8;
    visibility: hidden;
    &.show {
      visibility: visible;
    }
  `;
};

export const OverlayWrapper = styled.div`
  ${OverlayStyle};
`;
