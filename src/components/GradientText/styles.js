import styled, { css } from "styled-components";

export const GradientText = css`
  font-family: ${props => props.$font};
  background-image: ${props => `linear-gradient(45deg, ${props.color})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const GradientH1 = styled.h1`
  ${GradientText}
`;
export const GradientH2 = styled.h2`
  ${GradientText}
`;
export const GradientH3 = styled.h3`
  ${GradientText}
`;
export const GradientH4 = styled.h4`
  ${GradientText}
`;
export const GradientH5 = styled.h5`
  ${GradientText}
`;
export const GradientH6 = styled.h6`
  ${GradientText}
`;
export const GradientP = styled.p`
  ${GradientText}
`;
