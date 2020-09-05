import styled, { css, keyframes } from "styled-components";
import {
  COLOR_ORANGE,
  COLOR_MERCURY,
  COLOR_LIGHT_ORANGE,
  COLOR_RED,
  COLOR_GRAY,
  COLOR_CONCRETE,
} from "styles/colors";

export const Container = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  background: white;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  min-width: 320px;
  max-width: 320px;
`;

export const Title = styled.p`
  margin: 0 0 10px 0;
  font-size: 0.875rem;

  ${(props) =>
    !props.isRead &&
    css`
      font-weight: bold;
    `}
`;

export const Counter = styled.div`
  height: 20px;
  width: 20px;
  background: ${COLOR_ORANGE};
  border-radius: 50%;
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const AttachmentGroup = styled.div`
  display: flex;
`;

export const AttachmentButton = styled.button`
  height: 27px;
  width: 27px;
  border: 0.595199px solid ${COLOR_MERCURY};
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: 0;
  margin-left: -7px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const AttachmentImage = styled.img``;

export const StatusBadge = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;

  ${(props) =>
    props.status === "signed" &&
    css`
      background: ${COLOR_LIGHT_ORANGE};
      color: white;
    `}

  ${(props) =>
    props.status === "unsigned" &&
    css`
      background: ${COLOR_RED};
      color: white;
    `}
`;

export const CreatedAtBadge = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  color: ${COLOR_GRAY};
  background: ${COLOR_CONCRETE};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const glow = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const commonLoader = css`
  background: rgba(0, 0, 0, 0.1);
  animation: ${glow} 1.5s linear infinite;
`;

export const SmallTextLoader = styled.div`
  height: 10px;
  width: 30%;
  ${commonLoader}
`;

export const LargeTextLoader = styled.div`
  height: 10px;
  width: 100%;
  margin: 0 0 10px 0;
  ${commonLoader}
`;
