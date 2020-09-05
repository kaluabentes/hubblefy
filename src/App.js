import React from "react";
import { Helmet } from "react-helmet";

import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <h1>Hubblefy</h1>
    </>
  );
}

export default App;
