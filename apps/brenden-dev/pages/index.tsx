import React from 'react';

import './index.css';

import { environment } from '../environments/environment';
import { Welcome } from '@personal-site/components';

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <main className="main">
        <section>
          <Welcome />
        </section>
      </main>
    </div>
  );
};

export default Index;
