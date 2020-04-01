import React from 'react';

import './skills.css';
import { Logo } from '@personal-site/components';

/* eslint-disable-next-line */
export interface SkillsProps {}

export const Skills = (props: SkillsProps) => {
  return (
    <div className="skills">
      <div className="skills-grid">
        <Logo name="angular" />
        <Logo name="rxjs" />
        <Logo name="kubernetes" />
        <Logo name="nodejs" />
        <Logo name="google" />
        <Logo name="html5" />
        <Logo name="sass" />
        <Logo name="typescript" />
      </div>
    </div>
  );
};

export default Skills;
