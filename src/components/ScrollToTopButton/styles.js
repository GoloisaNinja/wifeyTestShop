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
  z-index: ${props => props.zNumber || 0};
  > svg {
    margin-top: 2.5px;
  }
  &.showBtn {
    opacity: 1;
    transform: translateY(0);
  }
`;
