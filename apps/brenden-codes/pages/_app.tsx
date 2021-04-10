import React from 'react';
import { usePanelbear } from '@personal-site/utility';
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const { NEXT_PUBLIC_PANELBEAR_SITE_ID } = process.env;

function CustomApp({ Component, pageProps }: AppProps) {
  usePanelbear(NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true,
  });
  library.add(fab, fas);
  return (
    <>
      <Head>
        <title>Welcome to brenden-codes!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="app min-h-screen relative">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
