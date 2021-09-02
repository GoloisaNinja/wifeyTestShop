import styled from "styled-components";

export const ContactFormWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  > div:first-child {
    order: 1;
    display: flex;
    > form {
      display: flex;
      flex-direction: column;
      width: 100%;
      > label {
        font-family: "Lato", sans-serif;
        font-weight: bold;
        color: #c800cf;
        margin-bottom: 2px;
      }
      > input {
        font-size: 16px;
        font-family: "Lato", sans-serif;
        color: #6a006e;
        padding: 10px;
        border: none;
        border: 1px solid #c800cf;
        margin-bottom: 15px;
      }
      > textarea {
        border: none;
        border: 1px solid #c800cf;
        font-size: 16px;
        font-family: "Lato", sans-serif;
        color: #6a006e;
        padding: 10px;
      }
    }
  }
`;
