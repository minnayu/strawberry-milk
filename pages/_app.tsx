import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Navbar from '../components/Navbar';
import "../mybulma/css/mystyles.css"
import { useState } from 'react';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState('');

  const handleSetUsername = (username: string) => {
    setUsername(username);
  };

  if (typeof window !== 'undefined') {
    (window as any).handleSetUsername = handleSetUsername;
  }
  return (
    <>
      <Navbar username={username}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} handleSetUsername={handleSetUsername} />
        </ThemeProvider>
      </Navbar>
    </>
  );
}
