import React from 'react';

import './card.css';

/* eslint-disable-next-line */
export interface CardProps {
  url: string;
  imgUrl?: string;
  imgAlt?: string;
}

export const Card = ({ url, imgUrl, imgAlt, children }) => {
  let classes = 'card hover-shadow';
  if (imgUrl) {
    classes += ' no-padding';
  }
  return (
    <a className={classes} href={url}>
      {imgUrl ? (
        <img className="card-image" src={imgUrl} alt={imgAlt}></img>
      ) : null}
      <div className="card-content">{children}</div>
    </a>
  );
};

export default Card;
