import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Tip from "components/Tip";
import Sidenav from "components/Sidenav";
import ProfileWidget from "components/ProfileWidget";
import profile from "images/profile.png";
import { Container, Main, InnerContainer } from "./styles";
import { useCapsules } from "contexts/capsules";
import SearchPanel from "components/SearchPanel";

const Props = {
  children: PropTypes.node.isRequired,
};

const TIP_TEXT =
  "A Cápsula, como uma evolução do antigo email, onde informações dispersas em diferentes ferramentas são apresentadas reunidas por assunto, gera alta eficiência nos fluxos de informação.";

const TIP_TITLE = "Cápsula: A evolução do email";

const ITEMS = [
  {
    icon: "folder",
  },
  {
    icon: "group",
  },
  {
    icon: "domain",
  },
  {
    icon: "person",
  },
];

export default function AppLayout({ children }) {
  const [isTipOpen, setIsTipOpen] = useState(true);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const searchItem = {
    icon: "search",
    onClick: () => setIsSearchPanelOpen(true),
  };
  const [{ isAdding, capsules }, addCapsule] = useCapsules();
  const [tipHeight, setTipHeight] = useState(0);
  const tipRef = useRef();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (tipRef.current) {
      setTipHeight(tipRef.current.offsetHeight);
    }
  }, []);

  return (
    <Container>
      <Header
        title="Cápsulas do Projeto Z"
        onCapsuleAdd={addCapsule}
        isAdding={isAdding}
      />
      <InnerContainer isTipOpen={isTipOpen} tipHeight={tipHeight}>
        <Tip
          tipRef={tipRef}
          isOpen={isTipOpen}
          title={TIP_TITLE}
          text={TIP_TEXT}
          onClose={() => setIsTipOpen(false)}
        />
        <Main>{children}</Main>
      </InnerContainer>
      <Sidenav isTipOpen={isTipOpen} items={[...ITEMS, searchItem]} />
      <ProfileWidget avatar={profile} name="Lew S." />
      <SearchPanel
        isOpen={isSearchPanelOpen}
        recent={capsules.slice(0, 3)}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onClose={() => setIsSearchPanelOpen(false)}
      />
    </Container>
  );
}

AppLayout.propTypes = Props;
