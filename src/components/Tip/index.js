import React from "react";
import PropTypes from "prop-types";

import { Container, Box, Title, Text, CloseButton } from "./styles";
import Icon from "components/Icon";

const Props = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Tip({ tipRef, isOpen, title, text, onClose }) {
  return (
    <Container ref={tipRef}>
      <Box isOpen={isOpen}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <CloseButton onClick={onClose}>
          <Icon>close</Icon>
        </CloseButton>
      </Box>
    </Container>
  );
}

Tip.propTypes = Props;
