import styled from "styled-components";

export const PaginationButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    > svg {
      font-size: 25px;
    }
  }
  > button:first-child {
    margin-right: 20px;
  }
`;
