import React from "react";
import { Helmet } from "react-helmet";

import GlobalStyles from "styles/GlobalStyles";
import { CapsulesProvider } from "contexts/capsules";
import Board from "pages/Board";

function App() {
  return (
    <CapsulesProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Board />
    </CapsulesProvider>
  );
}

export default App;
