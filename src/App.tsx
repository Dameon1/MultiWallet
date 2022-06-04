import './App.css';
import { a11yDark, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './utils/colors';
import { GlobalStyles } from './static/styles/global';
import { useState } from 'react';
import ctx from './utils/ctx';

import Body from './components/CompleteLogin/Body';

function App() {

  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  const [theme, updateTheme] = useState(mq.matches);
  const setTheme = (t: boolean) => {
    updateTheme(t);
  }

  return (
    <ctx.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalStyles />
        <Body syntaxTheme={theme ? a11yDark : duotoneLight} />
      </ThemeProvider>
    </ctx.Provider>
  );
}

export default App;
