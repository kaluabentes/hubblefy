import React from "react";
import PropTypes from "prop-types";

import { Container, Logo, NavItem } from "./styles";

import icon from "./icon.svg";
import Icon from "components/Icon";

const Props = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  isTipOpen: PropTypes.bool.isRequired,
};

export default function Sidenav({ isTipOpen, items }) {
  return (
    <Container isTipOpen={isTipOpen}>
      <Logo src={icon} alt="Hubblefy" />
      {items.map((item) => (
        <NavItem onClick={item.onClick}>
          <Icon>{item.icon}</Icon>
        </NavItem>
      ))}
    </Container>
  );
}

Sidenav.propTypes = Props;
