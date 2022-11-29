import { AppProps } from 'next/app';
import { Banner, Footer } from '@libs/react/components';
import Head from 'next/head';
import Script from 'next/script';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brenden Niedermeyer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          key="viewport"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Homepage for Brenden Niedermeyer" />
      </Head>
      <main className="app transition ease-in-out duration-300 bg-gradient-to-r from-sky-800 via-amber-100 to-primary-light dark:from-primary-dark dark:via-cyan-700 dark:to-cyan-800">
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
        <Banner />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
