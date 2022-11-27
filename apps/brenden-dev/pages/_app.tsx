import { AppProps } from 'next/app';
import { Banner } from '@libs/react/components';
import Head from 'next/head';
import Script from 'next/script';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to brenden-dev!</title>
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
    </>
  );
}

export default CustomApp;
