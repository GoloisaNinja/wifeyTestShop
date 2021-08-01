import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #e800e0;
  display: block;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  color: #9000a3;
  padding: 5px 10px;
  height: 44px;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    border-color: purple;
  }
`;
