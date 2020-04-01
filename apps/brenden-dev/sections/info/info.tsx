import React from 'react';

import './info.css';
import { Card } from '@personal-site/components';
import { ReactComponent as Blog } from '../../assets/blog.svg';
import { ReactComponent as Projects } from '../../assets/projects.svg';
import { ReactComponent as Resume } from '../../assets/resume.svg';
import { ReactComponent as Talks } from '../../assets/talks.svg';

/* eslint-disable-next-line */
export interface InfoProps {}

export const Info = (props: InfoProps) => {
  const cards = [
    <Card url="https://brenden.codes">
      <Blog className="info-image" />
      <h1>Blog</h1>
    </Card>,
    <Card url="https://brenden.fyi">
      <Resume className="info-image" />
      <h1>Resume</h1>
    </Card>,
    <Card url="https://github.com/bniedermeyer">
      <Projects className="info-image" />
      <h1>Projects</h1>
    </Card>,
    <Card url="https://www.youtube.com/playlist?list=PLqn52Dxq8AiW5PU9PPWXPk-YJYS9vsrJ-">
      <Talks className="info-image" />
      <h1>Talks</h1>
    </Card>
  ];
  return (
    <div className="info" id="info">
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Info;
