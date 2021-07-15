import styled from "styled-components";

export const Button = styled.button`
  width: ${props => props.width};
  border: 1px solid black;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: center;
  padding: 8px 10px;
  cursor: pointer;
  text-transform: uppercase;
  background: #fff;
  &:hover {
    background: black;
    color: white;
  }
`;
