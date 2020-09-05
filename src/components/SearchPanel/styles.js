import styled, { css } from "styled-components";
import Icon from "components/Icon";
import { COLOR_ALTO, COLOR_DUSTY_GRAY, COLOR_DOVE_GRAY } from "styles/colors";

export const Panel = styled.div`
  background: white;
  width: 380px;
  height: 100vh;
  padding: 26px;
  position: relative;
  transition: 0.3s;
  transform: translateX(-100%);
`;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 3;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;

      & ${Panel} {
        transform: translateX(0);
      }
    `}
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.562rem;
  margin-bottom: 23px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
  background: transparent;
  padding: 0;
  border: 0;
  outline: 0;

  & i {
    color: ${COLOR_ALTO};
  }
`;

export const InputPlaceholder = styled.p`
  position: absolute;
  left: 40px;
  color: ${COLOR_DUSTY_GRAY};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:focus-within ${InputPlaceholder} {
    display: none;
  }
`;

export const InputField = styled.input`
  background: white;
  border: 0;
  display: block;
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-bottom: 2px solid ${COLOR_ALTO};
  outline: none;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  color: ${COLOR_DUSTY_GRAY};
  left: 7px;
`;

export const TopicTitle = styled.h3`
  color: ${COLOR_DOVE_GRAY};
  font-weight: normal;
  font-size: 1rem;
  margin: 0 0 10px 0;
`;

export const CardGrid = styled.div`
  & > div {
    margin-bottom: 10px;
  }
`;
