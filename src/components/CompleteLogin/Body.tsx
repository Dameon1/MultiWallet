import Login from './Login';
import ThemeSwitch from './ThemeSwitch';
import { Grid } from '@nextui-org/react';
import { IoMdWallet } from 'react-icons/io';

const Body = ({ syntaxTheme }: { syntaxTheme: any }) =>
(<div className="App">
  <header>
    <h2>
      Your identity on the <a href="https://arweave.org" target="_blank" rel="noreferrer">permaweb</a>.
    </h2>
  </header>
  <main>
    <Grid.Container justify="space-between" alignItems="center">
      <h3><IoMdWallet />Access</h3>
      <ThemeSwitch />
    </Grid.Container>
    <Login />
  </main>
</div>);

export default Body;