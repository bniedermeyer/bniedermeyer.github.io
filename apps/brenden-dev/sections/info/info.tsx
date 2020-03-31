import React from 'react';

import './info.css';
import { Card } from '@personal-site/components';
import { ReactComponent as Blog } from '../../assets/blog.svg';

/* eslint-disable-next-line */
export interface InfoProps {}

export const Info = (props: InfoProps) => {
  const cards = [
    <Card url="https://brenden.dev">
      <Blog className="info-image" />
    </Card>
  ];
  return (
    <div className="info">
      <div className="cards">{cards}</div>
    </div>
  );
};

export default Info;
