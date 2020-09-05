import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Logo,
  Separator,
  Title,
  ButtonContainer,
  Button,
  Loader,
  DotLoader,
} from "./styles";

import logo from "./logo.svg";

const Props = {
  title: PropTypes.string.isRequired,
  onCapsuleAdd: PropTypes.func.isRequired,
};

export default function Header({ title, onCapsuleAdd, isAdding }) {
  return (
    <Container>
      <Logo src={logo} alt="Hubblefy" />
      <Separator />
      <Title>{title}</Title>
      <ButtonContainer>
        <Button type="button" onClick={onCapsuleAdd}>
          {isAdding ? (
            <Loader>
              <DotLoader />
              <DotLoader />
              <DotLoader />
            </Loader>
          ) : (
            "Nova Cápsula"
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

Header.propTypes = Props;
