import React from 'react';

import './logo.css';

/* eslint-disable-next-line */
export interface LogoProps {
  name: string;
}

export const Logo = ({ name }) => {
  if (!name) {
    return null;
  }
  return (
    <img
      className="logo"
      id={`${name}-logo`}
      src={`/logos/${name}.png`}
      alt={`${name} logo`}
    />
  );
};

export default Logo;
