import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  imgUrl: string;
  links: { url: string; icon: string }[];
}

export const MenuBar = ({ imgUrl, links }: Props) => {
  return (
    <nav className="p-4 flex flex-col items-center space-y-5">
      <img src={imgUrl} alt="Brenden" className="rounded-full w-40" />
      <h1 className="font-bold text-xl">Brenden Niedermeyer</h1>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => (
          <a href={link.url} key={link.url} className="border-gray-400">
            <FontAwesomeIcon icon={['fab', link.icon]} />
          </a>
        ))}
      </div>
    </nav>
  );
};
