import '@/styles/globals.css';
import 'normalize.css/normalize.css';
import Footer from '@/components/Footer/';
import Header from '@/components/Header/';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

/**
 * Modified 'App' file to share the same Header and Footer components in the entire application/website.
 *
 * _Remove Header and Footer components if you don't want them globally in all your application_
 *
 * More info: https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.pathname != '/404')
    return (
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </>
    );
  else {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
};

const GlobalStyle = createGlobalStyle`
  :root {
    --color-principal: #FDC60B;
    --color-secundario: #1B3089;
    --color-blanco: #fff;
    --color-negro: #000;
    --color-gris: #969696;
    --font-principal: "Averta";
  }

  html {
    font-size: 16px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  ::selection {
  }

  body {
    font-family: var(--font-principal);
    font-size: 1rem;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {  
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default MyApp;
