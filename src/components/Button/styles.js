import styled from "styled-components";

export const Button = styled.button`
  width: ${props => props.width};
  margin: ${props => props.margin};
  border: 1px solid #c800cf;
  font-weight: bold;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: center;
  padding: 0 10px;
  line-height: 44px;
  cursor: pointer;
  text-transform: uppercase;
  background: #fff;
  color: #c800cf;
  &:hover {
    background: #9e00a3;
    color: #fff;
  }
`;
