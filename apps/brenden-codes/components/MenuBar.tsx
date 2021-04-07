import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { Image } from '@personal-site/image';

interface Props {
  imgUrl: string;
  links: { url: string; icon: IconName; brand: boolean; label: string }[];
}

export const MenuBar = ({ imgUrl, links }: Props) => {
  return (
    <nav className="md:h-screen p-4">
      <div className="nav-content flex md:flex-col items-center justify-items-center p-4">
        <Image
          imageUrl={imgUrl}
          alt="Brenden"
          className="hidden md:block rounded-full w-40 border-solid border-2 border-gray-300"
        />
        <h1 className="font-bold dark:text-gray-200 text-md text-left md:text-center md:text-xl md:mt-5">
          Brenden Niedermeyer
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 md:mt-12">
          {links.map((link) => (
            <a href={link.url} key={link.url} aria-label={link.label}>
              <FontAwesomeIcon
                icon={[link.brand ? 'fab' : 'fas', link.icon]}
                className="border-gray-400"
                fixedWidth
                color="#9CA3AF"
                size="2x"
                border
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
