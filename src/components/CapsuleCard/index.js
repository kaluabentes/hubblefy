import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Title,
  Counter,
  AttachmentGroup,
  AttachmentButton,
  AttachmentImage,
  StatusBadge,
  CreatedAtBadge,
  Footer,
  LargeTextLoader,
  SmallTextLoader,
} from "./styles";

import googlesheet from "./googlesheet.svg";
import googledoc from "./googledoc.svg";
import text from "./text.svg";

const Props = {
  title: PropTypes.string.isRequired,
  notificationCount: PropTypes.number.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(["unsigned", "signed", undefined]),
  createdAt: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
};

const AttachmentImageMap = {
  googlesheet,
  googledoc,
  text,
};

const StatusText = {
  unsigned: "Para assinar",
  signed: "Assinada",
};

function Loader() {
  return (
    <Container>
      <LargeTextLoader />
      <SmallTextLoader />
    </Container>
  );
}

export default function CapsuleCard({
  title,
  notificationCount,
  attachments,
  status,
  createdAt,
  isRead,
}) {
  return (
    <Container>
      <Title isRead={isRead}>{title}</Title>
      <Counter>{notificationCount}</Counter>
      <Footer>
        <AttachmentGroup>
          {attachments.map((att) => (
            <AttachmentButton>
              <AttachmentImage
                src={AttachmentImageMap[att.type]}
                alt={att.type}
              />
            </AttachmentButton>
          ))}
        </AttachmentGroup>
        <StatusBadge status={status}>{StatusText[status]}</StatusBadge>
        <CreatedAtBadge>{createdAt}</CreatedAtBadge>
      </Footer>
    </Container>
  );
}

CapsuleCard.propTypes = Props;
CapsuleCard.Loader = Loader;
