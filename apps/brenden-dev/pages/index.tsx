import React from 'react';

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
