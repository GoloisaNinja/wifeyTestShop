import styled from "styled-components";

export const ScrollButton = styled.button`
  border: none;
  outline: none;
  background: #ff00f7;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 25px;
  color: #fff;
  position: fixed;
  bottom: 30px;
  right: 40px;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  z-index: ${props => props.$znumber || 0};
  > svg {
    margin-top: 2.5px;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateY(-5px);
    }
  }
  &.showBtn {
    opacity: 1;
    transform: translateY(0);
  }
`;
