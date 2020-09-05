import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  AvatarContainer,
  AvatarImage,
  AvatarBullet,
  UserName,
} from "./styles";

const Props = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function ProfileWidget({ avatar, name }) {
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src={avatar} alt={name} />
        <AvatarBullet />
      </AvatarContainer>
      <UserName>{name}</UserName>
    </Container>
  );
}

ProfileWidget.propTypes = Props;
