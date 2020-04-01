import React from 'react';

import './welcome.css';

import { ConfiguredParticles } from '@personal-site/components';

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-content-container">
        <img
          className="talk-photo"
          src="/speaking.jpg"
          alt="Speaking at Angular Seattle"
        />
        <div className="welcome-text-container">
          <div className="welcome-text">
            <h1>Hi! I'm Brenden</h1>
            <h2>I'm a web developer in Seattle</h2>
            <h3>
              I specialize in building powerful apps with modern web
              technologies. Learn more about me at my{' '}
              <a href="https://brenden.codes">blog</a>, or{' '}
              <a href="https://brenden.fyi">resume</a>. You can see some of my
              work <a href="#info">here</a>.
            </h3>
          </div>
        </div>
      </div>

      <ConfiguredParticles height={'100vh'} width={'100%'} />
    </div>
  );
};

export default Welcome;
