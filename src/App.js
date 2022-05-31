import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import { light, dark } from './utils/colors';
import { GlobalStyles } from './static/styles/global';

import { a11yDark, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeProvider } from 'styled-components';
import { Grid } from '@nextui-org/react';
import { IoMdWallet } from 'react-icons/io';

const Body = () =>
(<div className="App">
  <header>
    <h1>Account</h1>
  </header>
  <main>
    <Grid.Container justify="space-between" alignItems="center">
      <h3><IoMdWallet />Access</h3>
    </Grid.Container>
    <Login />
  </main>
</div>);

function App() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, updateTheme] = useState(mq.matches);
  const setTheme = (t) => {
    updateTheme(t);
  }
  return (
    <ThemeProvider theme={theme ? dark : light}>
      <GlobalStyles />
      <Body syntaxTheme={theme ? a11yDark : duotoneLight} />
    </ThemeProvider>
  );
}

export default App;
