import { Intro } from '../sections/intro/intro';
import { Info } from '../sections/info/info';
import { Skills } from '../sections/skills/skills';
import { Navbar } from '@libs/react/components';
import { useDocumentScrollThrottled } from '@libs/react/hooks';
import { useState } from 'react';

export function Index() {
  const [displayNavbar, setDisplayNavbar] = useState(false);

  const MINIMUM_SCROLL = 100;

  useDocumentScrollThrottled(
    ({ previousScrollTop, currentScrollTop }): void => {
      if (previousScrollTop !== currentScrollTop) {
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
        setDisplayNavbar(isMinimumScrolled);
      }
    }
  );
  return (
    <>
      <Navbar displayFull={displayNavbar} />
      <Intro />
      <Info />
      <Skills />
    </>
  );
}

export default Index;
