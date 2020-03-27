import React from 'react';

import './welcome.css';

import { ConfiguredParticles } from '../configured-particles/configured-particles';

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-text-container">
        <div className="welcome-text">
          <h1>Hi! I'm Brenden</h1>
          <h2>I'm a web developer in Seattle</h2>
        </div>
      </div>
      <ConfiguredParticles />
    </div>
  );
};

export default Welcome;
