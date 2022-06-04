import { Grid } from '@nextui-org/react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Grid.Container gap={1} justify="center" alignItems='center'>
      <a href="https://github.com/MetaweaveTeam/arweave-account" target="_blank" rel="noreferrer">arweave-account</a>
      <FaGithub size={50} style={{ margin: '20px' }} />
      <a href="https://github.com/MetaweaveTeam/Account" target="_blank" rel="noreferrer">JS compatible</a>
    </Grid.Container>
  )
}

export default Footer;