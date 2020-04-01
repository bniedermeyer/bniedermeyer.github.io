import React, { useState } from 'react';

import './navbar.css';
import { useDocumentScrollThrottled } from '@personal-site/utility';

export const Navbar = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const MINIMUM_SCROLL = 400;
  const TIMEOUT_DELAY = 100;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setShouldDisplay(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const visible = shouldDisplay ? 'visible' : '';
  const hidden = shouldDisplay ? '' : 'hidden';

  return (
    <nav>
      <div className={`navbar ${visible} ${hidden}`}>
        <h1>Brenden Niedermeyer</h1>
      </div>
    </nav>
  );
};

export default Navbar;
