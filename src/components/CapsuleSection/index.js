import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Grid } from "./styles";

const Props = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function CapsuleSection({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

CapsuleSection.propTypes = Props;
