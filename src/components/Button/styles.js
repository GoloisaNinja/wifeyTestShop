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
  background: ${props => (props.inverse ? "#9e00a3" : "#fff")};
  color: ${props => (props.inverse ? "#fff" : "#c800cf")};
  &:hover:not(:disabled) {
    background: ${props => (props.inverse ? "#fff" : "#9e00a3")};
    color: ${props => (props.inverse ? "#c800cf" : "#fff")};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
