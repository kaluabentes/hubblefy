import styled, { css } from "styled-components";

export const Container = styled.div``;

export const InnerContainer = styled.div`
  padding: 85px 20px 0 20px;
  position: relative;
  z-index: 1;

  ${(props) =>
    props.isTipOpen &&
    css`
      padding-top: calc(85px + ${props.tipHeight}px);
    `}
`;

export const Main = styled.main`
  padding: 0 0 0 110px;
`;
