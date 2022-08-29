import { AppProps } from 'next/app';
import { Navbar, Banner } from '@libs/react/components';
import Head from 'next/head';
import Script from 'next/script';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to brenden-dev!</title>
      </Head>
      <main className="app bg-primary-light dark:bg-primary-dark">
        <Script
          id="dark-mode-script"
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else{
              document.documentElement.classList.remove('dark')
            }
            `,
          }}
        />
        <Navbar />
        <Banner />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
