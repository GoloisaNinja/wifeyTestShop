import styled from "styled-components";

export const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-right: ${props => (props.paddingValues ? "20px" : "0px")};
  padding-left: ${props => (props.paddingValues ? "20px" : "0px")};
`;
