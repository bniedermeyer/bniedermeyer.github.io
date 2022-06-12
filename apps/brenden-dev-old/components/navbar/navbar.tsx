import React, { useState } from 'react';

import './navbar.css';
import { useDocumentScrollThrottled } from '@personal-site/utility';

export const Navbar = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const MINIMUM_SCROLL = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;

    if (previousScrollTop !== currentScrollTop) {
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
      setShouldDisplay(isMinimumScrolled);
    }
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
