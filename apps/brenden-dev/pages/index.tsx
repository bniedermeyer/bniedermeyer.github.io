import React from 'react';
import Head from 'next/head';

import './index.css';

import { environment } from '../environments/environment';
import { Info } from '../sections/info/info';
import { Welcome } from '../sections/welcome/welcome';
import { Skills } from '../sections/skills/skills';
import { Navbar } from '@personal-site/components';

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
      </Head>
      <Navbar />
      <main className="main">
        <section className="welcome">
          <Welcome />
        </section>
        <section>
          <Info />
        </section>
        <section>
          <Skills />
        </section>
      </main>
    </div>
  );
};

export default Index;
