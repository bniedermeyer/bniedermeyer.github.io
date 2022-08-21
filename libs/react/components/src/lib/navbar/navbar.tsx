import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle';
import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 bg-primary-light border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-primary-dark">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://brenden.dev" className="flex items-center">
          <span className="self-center text-2xl text-primary-dark font-semibold whitespace-nowrap dark:text-secondary-dark">
            Brenden Niedermeyer
          </span>
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
