import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0px;
  display: block;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: #9000a3;
  padding: 5px 10px;
  height: 46px;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    border-color: purple;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
