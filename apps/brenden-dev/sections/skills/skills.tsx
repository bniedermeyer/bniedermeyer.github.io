import React from 'react';

import './skills.css';
import { Logo } from '@personal-site/components';

export const Skills = () => {
  return (
    <div className="skills">
      <h2>I have experience building with</h2>
      <div className="skills-grid">
        <Logo name="angular" />
        <Logo name="react" />
        <Logo name="rxjs" />
        <Logo name="typescript" />
        <Logo name="nodejs" />
        <Logo name="kubernetes" />
        <Logo name="google" />
        <Logo name="html5" />
        <Logo name="sass" />
      </div>
    </div>
  );
};

export default Skills;
