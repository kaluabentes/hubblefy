import styled, { css } from "styled-components";
import { COLOR_BRIDAL_HEALTH, COLOR_DOVE_GRAY } from "styles/colors";

export const Container = styled.div`
  padding: 0 20px 0 0;
  position: fixed;
  top: 85px;
  z-index: 2;
`;

export const Box = styled.div`
  background: ${COLOR_BRIDAL_HEALTH};
  border-radius: 8px;
  padding: 15px;
  position: relative;
  margin-bottom: 20px;

  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

export const Title = styled.h2`
  color: ${COLOR_DOVE_GRAY};
  font-size: 1rem;
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  color: ${COLOR_DOVE_GRAY};
  margin: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  background: transparent;
  border: 0;
  outline: 0;
  margin: 15px;

  & i {
    font-size: 15px;
    font-weight: bold;
    color: ${COLOR_DOVE_GRAY};
  }
`;
