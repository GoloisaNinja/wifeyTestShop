import styled from "styled-components";

export const SelectorsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  > button:first-child {
    margin-right: 15px;
    text-align: left;
  }
`;
export const SortSelect = styled.select`
  width: 100%;
  border: 1px solid #c800cf;
  font-weight: bold;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  height: 46px;
  padding: 0 10px;
  cursor: pointer;
  text-transform: uppercase;
  //text-align-last: center;
  background: #fff;
  color: #c800cf;
  border-radius: 0px;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  text-overflow: ellipsis;

  &:hover:not(:disabled) {
    background: #9e00a3;
    color: #fff;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
