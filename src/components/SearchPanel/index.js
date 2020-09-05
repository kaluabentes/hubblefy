import React from "react";
import PropTypes from "prop-types";

import CapsuleCard, { Props as CapsuleProps } from "components/CapsuleCard";

import {
  Background,
  Panel,
  Title,
  CloseButton,
  InputContainer,
  InputField,
  InputPlaceholder,
  InputIcon,
  TopicTitle,
  CardGrid,
} from "./styles";
import Icon from "components/Icon";

const Props = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  recent: PropTypes.arrayOf(PropTypes.shape(CapsuleProps)),
};

export default function SearchPanel({
  isOpen,
  onChange,
  onClose,
  value,
  recent,
}) {
  return (
    <Background isOpen={isOpen}>
      <Panel>
        <CloseButton onClick={onClose}>
          <Icon>close</Icon>
        </CloseButton>
        <Title>Acesso Rápido</Title>
        <InputContainer>
          <InputIcon>search</InputIcon>
          <InputPlaceholder>Pesquisar...</InputPlaceholder>
          <InputField value={value} onChange={onChange} />
        </InputContainer>
        <TopicTitle>Recentes</TopicTitle>
        <CardGrid>
          {recent.map((capsule) => (
            <CapsuleCard
              key={capsule.id}
              title={capsule.title}
              notificationCount={capsule.notificationCount}
              attachments={capsule.attachments}
              status={capsule.status}
              createdAt={capsule.createdAt}
              isRead
            />
          ))}
        </CardGrid>
      </Panel>
    </Background>
  );
}

SearchPanel.propTypes = Props;
