import styled, { keyframes } from "styled-components";
import { COLOR_CONCRETE, COLOR_ORANGE } from "styles/colors";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 2;
  background: white;
  padding: 30px 20px 17px 20px;
`;

export const Logo = styled.img``;

export const Separator = styled.div`
  width: 1px;
  background: ${COLOR_CONCRETE};
  align-self: stretch;
  margin: 0 20px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const ButtonContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: ${COLOR_ORANGE};
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  border: 0;
  outline: 0;
  font-size: 1rem;
`;

export const Loader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 18px;
`;

const growDot = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const DotLoader = styled.div`
  height: 3px;
  width: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background: white;
  animation: ${growDot} 1.5s linear infinite;
  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
