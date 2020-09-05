import styled from "styled-components";
import { COLOR_RED, COLOR_DOVE_GRAY } from "styles/colors";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 2;
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  background: white;
  padding: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 54px;
  width: 54px;
  position: relative;
  margin-bottom: 6px;
`;

export const AvatarImage = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
`;

export const AvatarBullet = styled.div`
  border-radius: 50%;
  background: ${COLOR_RED};
  border: 2px solid white;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 6px;
  right: 6px;
`;

export const UserName = styled.p`
  margin: 0;
  color: ${COLOR_DOVE_GRAY};
  font-size: 0.75rem;
`;
