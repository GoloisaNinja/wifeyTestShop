import styled from "styled-components";

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div {
    margin: auto 0;
    padding: 5px 10px;
    color: #035efc;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const AdjusterButton = styled.button`
  cursor: pointer;
  border: 1px solid #c800cf;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  font-size: 10px;
  color: #fff;
  background-color: #c800cf;

  &:hover {
    color: #c800cf;
    background-color: #fff;
  }
`;
