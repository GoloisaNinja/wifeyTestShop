import styled from "styled-components";

export const LayoutWrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding-right: ${props => props.$padding};
  padding-left: ${props => props.$padding};
`;
