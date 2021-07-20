import styled from "styled-components";

export const Button = styled.button`
  width: ${props => props.width};
  border: 1px solid #c800cf;
  font-weight: bold;
  text-align: center;
  padding: 8px 10px;
  cursor: pointer;
  text-transform: uppercase;
  background: #fff;
  color: #c800cf;
  &:hover {
    background: #9e00a3;
    color: #fff;
  }
`;
