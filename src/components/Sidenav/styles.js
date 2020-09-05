import styled, { css } from "styled-components";
import { COLOR_BOULDER } from "styles/colors";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 64px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 25px 15px;
  position: fixed;
  left: 20px;
  top: 50%;
  z-index: 2;
  background: white;
  transform: translateY(-50%);

  ${(props) =>
    props.isTipOpen &&
    css`
      transform: translateY(-40%);
    `}
`;

export const Logo = styled.img`
  margin-bottom: 20px;
`;

export const NavItem = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  outline: 0;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & i {
    color: ${COLOR_BOULDER};
  }
`;
