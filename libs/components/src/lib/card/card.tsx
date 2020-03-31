import React from 'react';

import './card.css';

/* eslint-disable-next-line */
export interface CardProps {
  url: string;
}

export const Card = ({ url, children }) => {
  return (
    <a className="card" href={url}>
      <div className="cardContent">{children}</div>
    </a>
  );
};

export default Card;
