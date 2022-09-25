import { useState, useEffect } from 'react';
import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle';

/* eslint-disable-next-line */
export interface NavbarProps {
  displayFull?: boolean;
}

export function Navbar({ displayFull = true }: NavbarProps) {
  const baseStyles =
    'fixed w-full top-0 z-10 bg-primary-light border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-primary-dark transition-colors ease-in-out duration-300';
  const [styles, setStyles] = useState(baseStyles);

  useEffect(() => {
    if (displayFull) {
      setStyles(
        `${baseStyles} shadow-xl transition-shadow duration-700 ease-in-out reduce-motion:transition-none`
      );
    } else {
      setStyles(baseStyles);
    }
  }, [displayFull]);

  return (
    <header className={styles}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a
          href="https://brenden.dev"
          className={`flex items-center ${
            displayFull
              ? 'opacity-100 transition-opacity duration-700 ease-in-out reduce-motion:transition-none'
              : 'transition-opacity opacity-0'
          }`}
        >
          <span className="self-center text-2xl text-primary-dark font-semibold whitespace-nowrap dark:text-secondary-dark">
            Brenden Niedermeyer
          </span>
        </a>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Navbar;
