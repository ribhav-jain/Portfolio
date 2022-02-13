import TagManager from "react-gtm-module";

import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_TRACKING_ID,
  };
  TagManager.initialize(tagManagerArgs);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
