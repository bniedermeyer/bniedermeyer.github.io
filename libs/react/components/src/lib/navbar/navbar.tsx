import { useState, useEffect } from 'react';
import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle';

/* eslint-disable-next-line */
export interface NavbarProps {
  displayFull?: boolean;
}

export function Navbar({ displayFull = true }: NavbarProps) {
  const baseStyles =
    'fixed w-full top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 transition-colors ease-in-out';
  const [styles, setStyles] = useState(baseStyles);

  useEffect(() => {
    if (displayFull) {
      setStyles(
        `${baseStyles} bg-gradient-to-r from-sky-800 via-amber-100 to-primary-light dark:from-primary-dark dark:via-cyan-700 dark:to-primary-dark shadow-xl transition-shadow duration-700 ease-in-out reduce-motion:transition-none`
      );
    } else {
      setStyles(`${baseStyles} bg-transparent`);
    }
  }, [displayFull]);

  return (
    <header className={styles}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a
          href="https://brenden.dev"
          className={`flex items-center ${
            displayFull
              ? 'opacity-100 transition-opacity duration-700 ease-in-out reduce-motion:transition-none pl-safe'
              : 'transition-opacity opacity-0 pointer-events-none'
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
