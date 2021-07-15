import styled from "styled-components";

export const ProductTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  > div {
    flex-grow: 1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
export const ProductTileContentWrapper = styled.section`
  padding: 10px;
`;
export const ProductTileTitle = styled.h4`
  font-weight: bold;
`;
export const ProductTileDescription = styled.p`
  color: #949494;
  margin-bottom: 10px;
`;
export const ProductTilePrice = styled.p`
  font-style: italic;
  margin-bottom: 30px;
`;
